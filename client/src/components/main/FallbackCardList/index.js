import React from 'react';
import FallbackItem from "./FallbackItem";

const FallbackCardList = () => {
    return (
      <>
          {Array(8)
              .fill()
              .map(() => (
                  <FallbackItem key={Math.floor(Math.random() * 100000) + "Fallback"}/>
              ))}
      </>
    );
};

export default FallbackCardList;