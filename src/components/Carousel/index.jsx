import { useState } from 'react';

import { Counter } from "@/components/Carousel/Counter";

import { ImageSlider } from "@/components/Carousel/ImageSlider";

import "./style.scss";

export const Carousel = ({logement}) => {

    const [currentElement, setCurrentElement] = useState(0);

    /**
     * The function `handlePreviousClick` decreases the value of `currentElement` by 1 if it is greater
     * than 0.
     */
    const handlePreviousClick = () => {
        if (currentElement > 0) {
            setCurrentElement(currentElement - 1);
        } else {
            setCurrentElement(currentElement + logement.pictures.length - 1)
        }
    };

    /**
     * The function `handleNextClick` increments the value of `currentElement` by 1 if it is less than the
     * length of `logement.pictures` minus 1.
     */
    const handleNextClick = () => {
        if (currentElement < logement.pictures.length - 1) {
            setCurrentElement(currentElement + 1);
        } else {
            setCurrentElement(0); // Revenir à la première image
        }
    };

    return (
        <div>
            {logement.pictures && (
                <div className="slide">
                    <img src={logement.pictures[currentElement]} alt="carousel_image" />

                    {logement.pictures.length > 1 && (
                        <div className="slide-arrow">
                            <ImageSlider
                                currentElement={currentElement}
                                handlePreviousClick={handlePreviousClick}
                                handleNextClick={handleNextClick}
                                totalPictures={logement.pictures.length}
                            />
                        </div>
                    )}
                    <Counter logement={logement} currentElement={currentElement} />
                </div>
            )}
        </div>
    );
};
