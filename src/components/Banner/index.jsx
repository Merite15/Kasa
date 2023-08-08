import  "./style.scss";

export const Banner = (props) => {
    const { title, bgImg } = props

    return (
        <div className="banner">
            <img src={bgImg} alt="" />
            <div>
                <span>{title}</span>
            </div>
        </div>
    );
}