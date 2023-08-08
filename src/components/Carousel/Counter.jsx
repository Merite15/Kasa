export const Counter = ({ logement, currentElement }) => {
    return (
        <>
            {logement.pictures.length > 1 ? (
                <div className="count">{`${currentElement + 1}/${logement.pictures.length}`}</div>
            ) : <span> Aucune image</span>}
        </>
    )
}