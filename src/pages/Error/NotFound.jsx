import { Main } from "@/layouts/Main";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
    return (
        <Main>
            <div className="notFound">
                <div>
                    <div className="notFound__code">404</div>
                    <div className="notFound__text">Oups! La page que vous demandez n&apos;existe pas.</div> 
                    <div className="home-link"><NavLink className="home-nav-link" to="/">Retourner sur la page
                        d’accueil</NavLink></div>
                </div>
            </div>
        </Main>
    );
}