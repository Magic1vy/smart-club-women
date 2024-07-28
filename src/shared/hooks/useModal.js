import { useState } from "react";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const changeOpen = () => {
        setIsOpen(isOpen => !isOpen);
    };

    return {
        isOpen,
        changeOpen
    };
};

export default useModal;