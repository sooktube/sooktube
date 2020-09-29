import React from 'react';
import FallbackItem from "./FallbackItem";

function FallbackVideoList({ marginLeft }) {
  return (
      <>
        {Array(5)
            .fill()
            .map(() => (
                <FallbackItem key={Math.floor(Math.random() * 100000) + "Fallback"}
                              marginLeft={marginLeft}/>
            ))}
      </>
  );
}

export default FallbackVideoList;