import React from 'react';
import FallbackItem from "./FallbackItem";

function FallbackVideoList() {
  return (
      <>
        {Array(3)
            .fill()
            .map(() => (
                <FallbackItem key={Math.floor(Math.random() * 100000) + "Fallback"}/>
            ))}
      </>
  );
}

export default FallbackVideoList;