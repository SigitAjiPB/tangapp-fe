import React from 'react';

interface Coords {
  image: any;
  rotation: any;
}

const Target = ({ image, rotation }:Coords) => {
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