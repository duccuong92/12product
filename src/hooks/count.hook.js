import { useState } from "react";

export const useCount = () => {
    const [ count, setCount] = useState(0);

    const handleInc = () => {
        setCount((c) => c + 1);
    };

    const handleDesc = () => {
        setCount((c) => c - 1);
    };

    return {
        count,
        handleDesc,
        handleInc,
    };
};