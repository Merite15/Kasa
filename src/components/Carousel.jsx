import { useState } from 'react';

export const Carousel = (props) => {
    const { logement } = props

    const [currentElement, setCurrentElement] = useState(0);

    const handlePreviousClick = () => {
        if (currentElement > 0) {
            setCurrentElement(currentElement - 1);
        }
    };

    const handleNextClick = () => {
        if (currentElement < logement.pictures.length - 1) {
            setCurrentElement(currentElement + 1);
        }
    };

    return (
        <div>
            {logement.pictures && (
                <div
                    className="slide"
                    style={{ backgroundImage: `url(${logement.pictures[currentElement]})` }}
                >

                    {logement.pictures.length > 1 && (
                        <div className="slide-arrow">
                            <div>
                                {currentElement > 0 && (
                                    <i onClick={handlePreviousClick} className="fa-solid fa-chevron-left fa-4x arrow" />
                                )}
                            </div>

                            <div>
                                {currentElement < logement.pictures.length - 1 && (
                                    <i onClick={handleNextClick} className="fa-solid fa-chevron-right fa-4x arrow" />
                                )}
                            </div>
                        </div>
                    )}
                    {logement.pictures.length > 1 && (
                        <div className="count">{`${currentElement + 1}/${logement.pictures.length}`}</div>
                    )}
                </div>
            )}
        </div>
    );
};
