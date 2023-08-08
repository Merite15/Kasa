import logo from './logo.svg'

import "./style.scss";

export const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="white-logo" />

            <p className="copyright">© 2023 Kasa. All rights reserved</p>
        </footer>
    );
}