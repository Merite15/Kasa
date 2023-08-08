import "./style.scss";

export const Banner = ({ title, bgImg }) => {
    return (
        <div className="banner">
            <img src={bgImg} alt="banner" />
            <div>
                <span>{title}</span>
            </div>
        </div>
    );
}