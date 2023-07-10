import white_logo from '@/assets/img/logo/white-logo.svg'

export const Footer = () =>{
    return (
        <footer>
            <div>
                <div><img src={white_logo} alt="white-logo"/></div>
                <div className="copyright">© 2023 Kasa. All rights reserved</div>
            </div>
        </footer>
    );
}