import { useEffect, useState } from "react";

export const useSlide = (maxLength) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(0);
    }, [maxLength]);

    const prevSlide = () => {
        setActiveIndex((prevIndex) => {
            let newIndex = prevIndex - 1;
            if (newIndex < 0) {
                newIndex = maxLength - 1;
            }
            return newIndex;
        });
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => {
            let newIndex = prevIndex + 1;
            if (newIndex >= maxLength) {
                newIndex = 0;
            }
            return newIndex;
        });
    };

    return { nextSlide, prevSlide, activeIndex, setActiveIndex };
};
