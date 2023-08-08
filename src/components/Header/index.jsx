import logo from './logo.svg'

import { NavLink } from "react-router-dom";

import "./style.scss";

export const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
    };

    return (
        <header>
            <NavLink to="/"><img className="logo" src={logo} alt="logo" /></NavLink>

            <nav>
                <ul>
                    <li><NavLink className="navlink" style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } to="/">Accueil</NavLink></li>
                    <li><NavLink className="navlink" style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } to="/about">A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}