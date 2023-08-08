import  "./style.scss";

export const Star = ({ logement }) => {
    const stars = [];

    for (let i = 1; i <= logement.rating; i++) {
        stars.push(<i key={i} className="fa-solid fa-star fa-2x"></i>);
    }
    if (logement.rating < 5 && logement.rating > 0) {
        let note = 5 - logement.rating
        for (let i = 1; i <= note; i++) {
            stars.push(<i key={`${i}-note`} className="fa-regular fa-star fa-2x"></i>);
        }
    }

    return (
        <div className="rating">
            {stars.map((star) => (
                star
            ))}
        </div>
    )
}