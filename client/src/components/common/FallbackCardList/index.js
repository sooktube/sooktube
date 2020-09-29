import React from 'react';
import FallbackItem from "./FallbackItem";

const FallbackCardList = ({ total }) => {
    return (
        <>
            {Array(total || 8)
                .fill()
                .map(() => (
                    <FallbackItem key={Math.floor(Math.random() * 100000) + "Fallback"}/>
                ))}
        </>
    );
};

export default FallbackCardList;