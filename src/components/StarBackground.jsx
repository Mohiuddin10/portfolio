import { useEffect, useRef, useState } from "react";

// start has : id, x, y, size, opacity, animationDuration

// meteor has : id, x, y, size, delay, animationDuration

export const StarBackground = () => {
  // set star in useState
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [fallingStars, setFallingStars] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
    generateFallingStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate stars
  const generateStars = () => {
    // 1. Calculate number of start
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    // 2. Create an array of stars
    const newStars = [];

    // 3. Generate random stars
    for (let i = 0; i < numberOfStars; i++) {
      // 4. push stars to newStars obj
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };
  // meteors
  const generateMeteors = () => {
    // 1. Calculate number of meteors
    const numberOfMeteors = 3;

    // 2. Create an array of meteors
    const newMeteors = [];

    // 3. Generate random stars
    for (let i = 0; i < numberOfMeteors; i++) {
      // 4. push meteors to newMeteors obj
      newMeteors.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 20,
        size: Math.random() * 2 + 1,
        animationDelay: Math.random() * 10,
        animationDuration: Math.random() * 5 + 3,
      });
    }
    setMeteors(newMeteors);
  };

  // falling stars
  const generateFallingStars = () => {
    // 1. Calculate number of falling stars
    const numberOfFallingStars = 5;

    // 2. Create an array of stars
    const newFallingStars = [];

    // 3. Generate random stars
    for (let i = 0; i < numberOfFallingStars; i++) {
      // 4. push stars to newStars obj
      newFallingStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 10,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setFallingStars(newFallingStars);
  };

  // move of spaceship
  const boxRef = useRef(null);

  useEffect(() => {
    function moveRandomly() {
      const box = boxRef.current;
      if (!box) return;
      const maxX = window.innerWidth - box.offsetWidth;
      const maxY = window.innerHeight - box.offsetHeight;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      box.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    moveRandomly(); // initial move
    const interval = setInterval(moveRandomly, 1000);

    return () => clearInterval(interval);
  }, []);
  // move of spaceship
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            width: `${meteor.size * 20}px`,
            height: `${meteor.size}px`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}

      {/* falling stars  */}
      {fallingStars.map((fallingStar) => (
        <div
          key={fallingStar.id}
          className="meteor animate-meteor"
          style={{
            left: `${fallingStar.x}%`,
            top: `${fallingStar.y}%`,
            width: `${fallingStar.size}px`,
            height: `${fallingStar.size}px`,
            animationDelay: `${fallingStar.delay}s`,
            animationDuration: `${fallingStar.animationDuration}s`,
          }}
        />
      ))}

      {/* spaceship  */}
      <img
        ref={boxRef}
        className="absolute top-0 left-0 w-20 h-20 rounded-md opacity-50 transition-all duration-1000"
        src="/spaceship1.png"
        alt=""
      />

      {/* spaceship  */}
    </div>
  );
};
