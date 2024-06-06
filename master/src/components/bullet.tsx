import React, { useState, useEffect } from 'react';
import pelor from '../assets/bullet.svg'


interface Coords {
  startX: number;
  startY: number;
  onComplete: ()=> void;
  removeBullet: () => void;
  targetX: number;
  targetY: number;
}

const Bullet = ({ startX, startY, onComplete, removeBullet }:Coords) => {

  const [position, setPosition] = useState({ x: startX, y: startY });
  const duration = 100
  const targetX = window.innerWidth / 2;
  const targetY = window.innerHeight / 2;

  const calculateAngle = ({startX, startY, targetX, targetY}:Coords) => {
    const deltaY = targetY - startY;
    const deltaX = targetX - startX;
    const angleInDegrees = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    return angleInDegrees;
  };

  const angle = calculateAngle({startX, startY, targetX, targetY, onComplete, removeBullet});

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const newX = startX + (targetX - startX) * progress;
      const newY = startY + (targetY - startY) * progress;
      setPosition({ x: newX, y: newY });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        onComplete();
        removeBullet();
      }
    };
 
  
    animate();
  }, [startX, startY, targetX, targetY, onComplete, removeBullet]);

  return (
    <div
      className="absolute w-12 h-12 "
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
      }}
    >
      <img src={pelor} alt="" />
    </div>
  );
};




export default Bullet;
