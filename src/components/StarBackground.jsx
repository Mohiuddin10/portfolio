import { useEffect, useState } from "react";

// start has : id, x, y, size, opacity, animationDuration

export const StarBackground = () => {
  // set star in useState
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();
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
    </div>
  );
};
