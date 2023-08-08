import { useState } from 'react';

import { Counter } from "@/components/Carousel/Counter";

import { ImageSlider } from "@/components/Carousel/ImageSlider";

import "./style.scss";

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
