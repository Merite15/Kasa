import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Main } from "@/layouts/Main";
import { Carousel } from "@/components/Carousel";
import { Star } from "@/components/Star";
import { ListTag } from "@/components/List/Tag";
import { Collapse } from "@/components/Collapse";
import { Error } from '@/components/Utils/Error';
import { Loader } from '@/components/Utils/Loader';
import "./style.scss";

export const Property = () => {

    const params = useParams()

    const [logement, setLogement] = useState({})

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_PUBLIC_URL}/logements.json`)
            .then((response) => response.json()
                .then((res) => {
                    const data = res.filter(logement => logement.id === params.id)
                    if (data.length > 0) {
                        setLogement(data[0]);
                    } else {
                        navigate("/404");
                    }
                })
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
            {loading ?

                <Loader />

                : error ? <Error /> :
                    <>
                        <Carousel logement={logement}></Carousel>

                        <div className="property">
                            <div className="logement">
                                <div className="details">
                                    <p className="title">{logement.title}</p>
                                    <p className="location">
                                        {logement.location}
                                    </p>
                                </div>

                                <div className="tags">
                                    <ListTag logement={logement} />
                                </div>
                            </div>

                            <div className="review">
                                <div className="hosting">
                                    <p>{logement.host?.name}</p>
                                    <img className="host-avatar" src={logement.host?.picture} alt={logement.host?.name} />
                                </div>

                                <Star logement={logement} />
                            </div>
                        </div>

                        <div className="logement-description">
                            <Collapse title="Description" content={logement.description}
                                open={true}></Collapse>

                            <Collapse title="Équipement" list={logement.equipments}
                                open={true}></Collapse>
                        </div>
                    </>
            }
        </Main>
    );
}