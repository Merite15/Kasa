import { NavLink } from "react-router-dom";

import "./style.scss";

export const Card = ({ logement }) => {
    return (
        <NavLink to={`/property/${logement.id}`}
            className="card">
            <img src={logement.cover} alt="logement_image" />
            <span>{logement.title}</span>
        </NavLink>
    );
}