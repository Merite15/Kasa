

export const Banner = (props) => {
    const { title, bgImg } = props

    return (
        <div className="banner" style={{ backgroundImage: `url(${bgImg})` }}>
            <div>
                <span>{title}</span>
            </div>
        </div>
    );
}