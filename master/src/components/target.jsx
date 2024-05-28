import React from 'react';

const Target = ({ image, rotation }) => {
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    >
      <img src={image} alt="Target" className="w-20 h-20" />
    </div>
  );
};

export default Target;