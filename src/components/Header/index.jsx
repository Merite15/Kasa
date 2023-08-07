import logo from '@/assets/img/logo/logo.svg'

import { NavLink } from "react-router-dom";

import  "./style.scss";

export const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
    };

    return (
        <header>
            <div>
                <NavLink to="/"><img className="logo" src={logo} alt="logo" /></NavLink>
            </div>
            
            <div>
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
            </div>

        </header>
    );
}