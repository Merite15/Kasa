import { Main } from "@/layouts/Main";
import { NavLink } from "react-router-dom";
import  "./style.scss";

export const NotFound = () => {
    return (
        <Main>
            <div className="notFound">
                    <p className="notFound__code">404</p>
                    <p className="notFound__text">Oups! La page que vous demandez n&apos;existe pas.</p> 
                    <p className="home-link"><NavLink className="home-nav-link" to="/">Retourner sur la page
                        d’accueil</NavLink></p>
            </div>
        </Main>
    );
}