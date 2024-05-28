import React, { useState } from 'react';
import StickMan from '../components/gabut';
import Target from '../components/target';
import targetImage from '../assets/target.png';
import Bullet from '../components/bullet';
import warBG from '../assets/war.jpg'


const Gabuts = () => {
  const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [bullets, setBullets] = useState([]);
  const [targetRotation, setTargetRotation] = useState(0);

  const targetX = window.innerWidth / 2;
  const targetY = window.innerHeight / 2;
  const targetRadius = 20; // Ukuran target (40px / 2)

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
    const bullet = {
      x: mousePosition.x,
      y: mousePosition.y,
      id: Date.now(), // Menggunakan timestamp sebagai ID unik
    };
    setBullets((prevBullets) => [...prevBullets, bullet]);
  };

  const removeBullet = (bulletId) => {
    setBullets((prevBullets) => prevBullets.filter((b) => b.id !== bulletId));
  };

  const calculateAngle = (startX, startY, targetX, targetY) => {
    const deltaY = targetY - startX;
    const deltaX = targetX - startY;
    const angleInDegrees = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    return angleInDegrees;
  };

  const handleBulletCollision = (bullet) => {
    const dx = bullet.x - targetX;
    const dy = bullet.y - targetY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < targetRadius) {
      const angle = calculateAngle(bullet.x, bullet.y, targetX, targetY);
      setTargetRotation((prevRotation) => prevRotation + angle);
      removeBullet(bullet.id);
    }
  };

  return (
    <div
      className="bg-[url('./assets/war.jpg')] relative w-screen h-screen bg-cover bg-center bg-fixed bg-gray-100 overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <StickMan x={mousePosition.x} y={mousePosition.y} targetX={targetX} targetY={targetY} />
      <Target image={targetImage} rotation={targetRotation} />

      {bullets.map((bullet) => (
        <Bullet
          key={bullet.id}
          startX={bullet.x}
          startY={bullet.y}
          onComplete={() => handleBulletCollision(bullet)}
          removeBullet={() => removeBullet(bullet.id)}
        />
      ))}
    </div>
  );
};

// const Bullet = ({ startX, startY, onComplete }) => {
//   const [position, setPosition] = useState({ x: startX, y: startY });
//   const duration = 1000; // Durasi animasi dalam ms
//   const targetX = window.innerWidth / 2;
//   const targetY = window.innerHeight / 2;

//   React.useEffect(() => {
//     const startTime = Date.now();

//     const animate = () => {
//       const now = Date.now();
//       const elapsed = now - startTime;
//       const progress = Math.min(elapsed / duration, 1);

//       const newX = startX + (targetX - startX) * progress;
//       const newY = startY + (targetY - startY) * progress;
//       setPosition({ x: newX, y: newY });

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       } else {
//         onComplete();
//       }
//     };

//     animate();
//   }, [startX, startY, targetX, targetY, onComplete]);

//   return (
//     <div
//       className="absolute w-2 h-2 bg-red-500 rounded-full"
//       style={{ left: position.x, top: position.y, transform: 'translate(-50%, -50%)' }}
//     ></div>
//   );
// };

export default Gabuts;