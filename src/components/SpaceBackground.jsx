import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SpaceBackground = () => {
  const [shootingStars, setShootingStars] = useState([]);

  // Shooting stars logic
  useEffect(() => {
    const maxStars = 2; // reduced from 4
    const intervals = [];

    for (let i = 0; i < maxStars; i++) {
      const spawnStar = () => {
        setShootingStars((prev) => [
          ...prev,
          {
            id: Math.random(),
            edge: ["top", "bottom", "left", "right"][Math.floor(Math.random() * 4)],
            top: Math.random() * 80 + 10,
            left: Math.random() * 80 + 10,
          },
        ]);

        // Random interval for next star spawn (2–5s)
        intervals[i] = setTimeout(spawnStar, 2000 + Math.random() * 3000);
      };
      spawnStar();
    }

    return () => intervals.forEach(clearTimeout);
  }, []);

  // Small twinkling stars
  const twinklingStars = [...Array(20)].map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 1 + Math.random() * 3,
    opacity: 0.3 + Math.random() * 0.7,
  }));

  return (
    <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
      {/* Twinkling stars */}
      {twinklingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: star.opacity,
          }}
          animate={{ opacity: [star.opacity, 0.1, star.opacity] }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: "3px",
            height: "12px",
            boxShadow: "0 0 10px 2px white",
            borderRadius: "50%",
            top:
              star.edge === "bottom"
                ? "100%"
                : star.edge === "top"
                ? "0%"
                : `${star.top}%`,
            left:
              star.edge === "left"
                ? "0%"
                : star.edge === "right"
                ? "100%"
                : `${star.left}%`,
          }}
          animate={{
            x:
              star.edge === "left"
                ? [0, window.innerWidth * 0.7]
                : star.edge === "right"
                ? [0, -window.innerWidth * 0.7]
                : [0, 200 - Math.random() * 400],
            y:
              star.edge === "top"
                ? [0, window.innerHeight * 0.7]
                : star.edge === "bottom"
                ? [0, -window.innerHeight * 0.7]
                : [0, 150 - Math.random() * 300],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1 + Math.random() * 0.5, // slightly faster
            ease: "linear",
          }}
          onAnimationComplete={() =>
            setShootingStars((prev) => prev.filter((s) => s.id !== star.id))
          }
        />
      ))}
    </div>
  );
};

export default SpaceBackground;
