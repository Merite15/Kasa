export const ImageSlider = ({ currentElement, handlePreviousClick, handleNextClick, totalPictures }) => {
    return (
        <>
            <button>
                {currentElement > 0 && (
                    <i onClick={handlePreviousClick} className="fa-solid fa-chevron-left fa-4x arrow" />
                )}
            </button>

            <button>
                {currentElement < totalPictures - 1 && (
                    <i onClick={handleNextClick} className="fa-solid fa-chevron-right fa-4x arrow" />
                )}
            </button>
        </>
    );
};