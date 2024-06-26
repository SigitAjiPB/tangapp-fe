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

      <img src={Gun3} alt="Gun"  className='h-20'/>
    </div>
  );
};

export default StickMan;