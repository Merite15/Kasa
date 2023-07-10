/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export const Card = ({ logement }) => {
    return (
        <NavLink to={`/card/${logement.id}`} style={{ backgroundImage: `url('${logement.cover}')` }}
            className="card">
            <span>{logement.title}</span>
        </NavLink>
    );
}