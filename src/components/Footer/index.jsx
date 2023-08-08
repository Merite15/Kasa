import white_logo from '@/assets/img/logo/white-logo.svg'

import "./style.scss";

export const Footer = () => {
    return (
        <footer>
            <img src={white_logo} alt="white-logo" />

            <p className="copyright">© 2023 Kasa. All rights reserved</p>
        </footer>
    );
}