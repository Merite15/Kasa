import { Main } from "@/layouts/Main";
import { Carousel } from "@/components/Carousel";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Card = () => {

    const params = useParams()

    const [logement, setLogement] = useState({})

    useEffect(() => {
        fetch(`http://127.0.0.1:5173/logements.json`)
            .then((response) => response.json()
                .then((res) => {
                    const data = res.filter(logement => logement.id === params.id)
                    setLogement(data[0])
                })
                .catch((error) => console.log(error))
            )
    }, [params.id])
    return (
        <Main>
            <Carousel
                logement={logement}></Carousel>
        </Main>
    );
}