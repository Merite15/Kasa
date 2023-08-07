import { NavLink } from "react-router-dom";

import  "./style.scss";

export const Card = ({ logement }) => {
    return (
        <NavLink to={`/property/${logement.id}`} style={{ backgroundImage: `url('${logement.cover}')` }}
            className="card">
            <span>{logement.title}</span>
        </NavLink>
    );
}