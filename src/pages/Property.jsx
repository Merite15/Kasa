import { Main } from "@/layouts/Main";
import { Carousel } from "@/components/Carousel";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tag } from "@/components/Tag";
import { Collapse } from "@/components/Collapse";

export const Property = () => {

    const params = useParams()

    const [logement, setLogement] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5173/logements.json`)
            .then((response) => response.json()
                .then((res) => {
                    const data = res.filter(logement => logement.id === params.id)
                    console.log(data);
                    // console.log( setLogement(data));
                    // if (data.length > 0) {
                    //     setLogement(data[0]);
                    // } else {
                    //     console.log('Logement not found');
                    // }
                })
                .catch((error) => console.log(error))
            )
    }, [logement, params.id])

    const stars = [];

    for (let i = 1; i <= logement.rating; i++) {
        stars.push(<i key={i} className="fa-solid fa-star fa-2x"></i>);
    }
    if (logement.rating < 5 && logement.rating > 0) {
        let note = 5 - logement.rating
        for (let i = 1; i <= note; i++) {
            stars.push(<i key={`${i}-note`} className="fa-regular fa-star fa-2x"></i>);
        }
    }

    return (
        <Main>
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
                    <div className="logement__host--rating">
                        {stars.map((star) => (
                            star
                        ))}
                    </div>

                    <div className="logement__host--hosting">
                        <div>{logement.host?.name}</div>
                        <img className="host-avatar" src={logement.host?.picture} alt={logement.host?.name} />
                    </div>
                </div>
            </div>

            <div className="logement-collapse-group">

                <div className="logement-collapse">
                    <Collapse title="Description" content={logement.description}
                        open={true}></Collapse>
                </div>
                <div className="logement-collapse">
                    <Collapse title="Équipement" list={logement.equipments}
                        open={true}></Collapse>
                </div>
            </div>
        </Main>
    );
}