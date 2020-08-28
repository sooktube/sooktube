import React from 'react';
import FallbackItem from "./FallbackItem";

const FallbackCardList = () => {
    return (
      <>
          {Array(8)
              .fill()
              .map(() => (
                  <FallbackItem/>
              ))}
      </>
    );
};

export default FallbackCardList;