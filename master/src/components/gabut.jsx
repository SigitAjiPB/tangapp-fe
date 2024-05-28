import React from 'react';
import Gun from '../assets/gun.svg'
import Gun2 from '../assets/gun2.svg'
import Gun3 from '../assets/gun3.svg'

const StickMan = ({ x, y, targetX, targetY }) => {
  const calculateAngle = (startX, startY, targetX, targetY) => {
    const deltaY = targetY - startY;
    const deltaX = targetX - startX;
    const angleInDegrees = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    return angleInDegrees;
  };

  const angle = calculateAngle(x, y, targetX, targetY);
  const isRightSide = x > window.innerWidth / 2;
  return (
    <div
    className="absolute"
    style={{
      left: x,
      top: y,
      width: '50px',
      height: '50px',
      transform: `translate(-50%, -50%) rotate(${angle}deg) scaleY(${isRightSide ? -1 : 1})`,
      transformOrigin: 'center center',
    }}
    >

      <img src={Gun3} alt=""  className='h-20'/>
      {/* <div className="w-1 h-10 bg-black mx-auto"></div>
      <div className="w-4 h-4 bg-black rounded-full mx-auto mt-[-8px]"></div>
      <div className="w-1 h-8 bg-black mx-auto"></div>
      <div className="flex justify-between mt-[-4px]">
        <div className="w-1 h-8 bg-black"></div>
        <div className="w-1 h-8 bg-black"></div>
      </div>
      <div className="flex justify-between mt-[-8px]">
        <div className="w-1 h-8 bg-black"></div>
        <div className="w-1 h-8 bg-black"></div>
      </div> */}
    </div>
  );
};

export default StickMan;