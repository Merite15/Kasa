import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Main } from "@/layouts/Main";
import { Carousel } from "@/components/Carousel";
import { Star } from "@/components/Star";
import { Tag } from "@/components/Tag";
import { Collapse } from "@/components/Collapse";
import { Error } from '@/components/Utils/Error';
import { Loader } from '@/components/Utils/Loader';
import "./style.scss";

export const Property = () => {

    const params = useParams()

    const [logement, setLogement] = useState({})

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_PUBLIC_URL}/logements.json`)
            .then((response) => response.json()
                .then((res) => {
                    const data = res.filter(logement => logement.id === params.id)
                    if (data.length > 0) {
                        setLogement(data[0]);
                    } else {
                        setError('Logement not found')
                    }
                })
                .catch((error) => setError(error))
                .finally(() => {
                    setTimeout(() => {
                        setLoading(false)
                    }, 1500)
                })
            )
    }, [params.id])

    return (
        <Main>
            {loading ?

                <Loader />

                : error ? <Error /> :
                    <>
                        <Carousel logement={logement}></Carousel>
                        <div>
                            <div className="logement">
                                <div className="logement__title">{logement.title}</div>
                                <div className="logement__location">
                                    {logement.location}
                                </div>

                                <div className="logement__tags">
                                    {logement.tags?.map((tag, i) => {

                                        return (
                                            <Tag key={`${i}-${tag.trim()}`} name={tag} />
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="logement__host">
                                <Star logement={logement} />

                                <div className="logement__host--hosting">
                                    <div>{logement.host?.name}</div>
                                    <img className="host-avatar" src={logement.host?.picture} alt={logement.host?.name} />
                                </div>
                            </div>
                        </div>

                        <div className="logement-details">
                            <div>
                                <Collapse title="Description" content={logement.description}
                                    open={true}></Collapse>
                            </div>
                            <div>
                                <Collapse title="Équipement" list={logement.equipments}
                                    open={true}></Collapse>
                            </div>
                        </div>
                    </>
            }
        </Main>
    );
}