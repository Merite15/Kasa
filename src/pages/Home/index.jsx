import { Main } from "@/layouts/Main";
import { Banner } from "@/components/Banner";
import { useEffect, useState } from "react";
import { Card } from "@/components/Card";
import { Error } from '@/components/Utils/Error';
import { Loader } from '@/components/Utils/Loader';
import banner from "./banner.jpeg"
import "./style.scss";

export const Home = () => {
    const [logements, setLogements] = useState([])

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_PUBLIC_URL}/logements.json`)
            .then((response) => response.json()
                .then((data) => setLogements(data))
                .catch((error) => setError(error))
                .finally(() => {
                    setTimeout(() => {
                        setLoading(false)
                    }, 1500)
                })
            )
    }, [])


    return (
        <Main>
            <Banner
                bgImg={banner} title="Chez vous, partout et ailleurs"></Banner>

            {loading ?

                <Loader />

                : error ? <Error /> :
                    <div className="cards">

                        {logements.map((logement) => {
                            return (
                                <Card key={`${logement.id}`} logement={logement} />
                            )
                        })}
                    </div>
            }
        </Main>
    );
}