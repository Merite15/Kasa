import { Main } from "@/layouts/Main";
import { Banner } from "@/components/Banner";
import { useEffect, useState } from "react";
import { Card } from "@/components/Card";
import banner from "@/assets/img/banner.jpeg"
import  "./style.scss";

export const Home = () => {
    const [logements, setLogements] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_PUBLIC_URL}/logements.json`)
            .then((response) => response.json()
                .then((data) => {
                    setLogements(data)
                })
                .catch((error) => console.error(error))
            )
    }, [])

    
    return (
        <Main>
            <Banner
                bgImg={banner} title="Chez vous, partout et ailleurs"></Banner>

            <div className="cards">

                {logements.map((logement) => {
                    return (
                        <Card key={`${logement.id}`} logement={logement} />
                    )
                })}
            </div>
        </Main>
    );
}