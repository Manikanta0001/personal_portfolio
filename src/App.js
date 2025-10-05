import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/MySkills";
import WorkExperience from "./scenes/WorkExperience";
import Projects from "./scenes/Projects";
import Education from "./scenes/Education";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import SpaceBackground from "./components/SpaceBackground";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  // Scroll listener for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      {/* 🌈 Animated Gradient Background */}
      <div
        className="fixed inset-0 -z-10 animate-gradientBackground"
        style={{
          background: `linear-gradient(
      135deg,
      #ff5f6d,  /* red-pink */
      #ffc371,  /* orange */
      #47e5bc,  /* teal */
      #6a82fb,  /* blue */
      #fc5c7d,  /* pink */
      #f7b733,  /* yellow-orange */
      #f80759,  /* magenta */
      #00f5a0,  /* green */
      #00c6ff,  /* cyan */
      #8e2de2,  /* purple */
      #ff9a9e,  /* light pink */
      #fad0c4,  /* soft peach */
      #a18cd1,  /* lavender */
      #fbc2eb,  /* pastel purple */
      #84fab0,  /* mint */
      #8fd3f4,  /* light blue */
      #fccb90,  /* beige-orange */
      #e0c3fc,  /* lilac */
      #f093fb,  /* pink-purple */
      #6dd5ed   /* turquoise */
    )`,
          backgroundSize: "4000% 4000%", // bigger to accommodate more colors
        }}
      />

      {/* 🌟 Floating Orbs */}
      <div className="fixed -z-10 w-full h-full pointer-events-none">
        <div className="absolute w-[400px] h-[400px] top-[-150px] left-[-150px] rounded-full filter blur-[160px] bg-cyan-400 opacity-60 animate-floatGlow"></div>
        <div className="absolute w-[400px] h-[400px] bottom-[-150px] right-[-150px] rounded-full filter blur-[160px] bg-purple-400 opacity-60 animate-floatGlow delay-2000"></div>
      </div>

      {/* 🔹 TECHY FLOATING SHAPES */}
      <div className="fixed -z-10 w-full h-full pointer-events-none">
        {/* Glowing Orbs */}
        <motion.div
          className="absolute w-12 h-12 bg-cyan-400 rounded-full opacity-60"
          animate={{ y: [0, -40, 0], x: [0, 20, -20, 0], rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "15%", left: "10%" }}
        />
        <motion.div
          className="absolute w-8 h-8 bg-purple-400 rounded-full opacity-50"
          animate={{ y: [0, 30, 0], x: [0, -25, 25, 0], rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "60%", left: "75%" }}
        />

        {/* Rotating Cubes */}
        <motion.div
          className="absolute w-6 h-6 bg-green-400 opacity-50"
          animate={{ rotate: [0, 360], scale: [1, 1.5, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ top: "30%", left: "50%" }}
        />
        <motion.div
          className="absolute w-10 h-10 bg-orange-400 opacity-40"
          animate={{ rotate: [0, -360], scale: [1, 1.3, 1] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ top: "75%", left: "20%" }}
        />

        {/* Tech Triangles */}
        <motion.div
          className="absolute w-6 h-6 border-l-4 border-t-4 border-white/40 rotate-45 opacity-40"
          animate={{ y: [0, -20, 0], x: [0, 15, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "40%", left: "30%" }}
        />
        <motion.div
          className="absolute w-4 h-4 border-r-2 border-b-2 border-blue-300/50 rotate-45 opacity-50"
          animate={{ y: [0, 25, 0], x: [0, -10, 10, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "70%", left: "80%" }}
        />

        {/* Horizontal Data Lines */}
        <motion.div
          className="absolute h-0.5 w-20 bg-white/30"
          animate={{ x: [0, 100, -100, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ top: "10%", left: "50%" }}
        />
        <motion.div
          className="absolute h-1 w-28 bg-blue-300/30"
          animate={{ x: [0, -80, 80, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ top: "85%", left: "40%" }}
        />

        {/* Small twinkling particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            animate={{ y: [0, -10, 0], x: [0, 5, -5, 0] }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
     {/* 🔹 TECHY FLOATING SHAPES */}
<div className="fixed -z-10 w-full h-full pointer-events-none">

  {/* Glowing Orbs */}
  {[...Array(8)].map((_, i) => (
    <motion.div
      key={`orb-${i}`}
      className={`absolute rounded-full`}
      style={{
        width: `${8 + Math.random() * 16}px`,
        height: `${8 + Math.random() * 16}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        backgroundColor: `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},0.5)`,
      }}
      animate={{
        y: [0, -60 + Math.random() * 40, 0],    // increased vertical travel
        x: [0, 40 - Math.random() * 80, 0],     // increased horizontal travel
        rotate: [0, 360],
      }}
      transition={{
        duration: 25 + Math.random() * 20,      // longer duration
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ))}

  {/* Rotating Cubes / Rectangles */}
  {[...Array(6)].map((_, i) => (
    <motion.div
      key={`cube-${i}`}
      className="absolute opacity-40 bg-white"
      style={{
        width: `${10 + Math.random() * 20}px`,
        height: `${10 + Math.random() * 20}px`,
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`,
      }}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.5, 1],
        x: [0, -20 + Math.random()*40, 0],   // wider horizontal movement
        y: [0, -20 + Math.random()*40, 0],   // taller vertical movement
      }}
      transition={{
        duration: 35 + Math.random() * 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  ))}

  {/* Triangles */}
  {[...Array(6)].map((_, i) => (
    <motion.div
      key={`triangle-${i}`}
      className="absolute w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-white/30"
      style={{
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 90}%`,
        opacity: 0.3 + Math.random() * 0.4,
      }}
      animate={{
        rotate: [0, 360],
        y: [0, -30 + Math.random() * 60, 0], // longer vertical path
        x: [0, 20 - Math.random() * 40, 0],  // longer horizontal path
      }}
      transition={{
        duration: 30 + Math.random() * 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ))}

  {/* Hexagons */}
  {[...Array(4)].map((_, i) => (
    <motion.div
      key={`hex-${i}`}
      className="absolute opacity-30 border-2 border-white/40"
      style={{
        width: `${20 + Math.random() * 30}px`,
        height: `${20 + Math.random() * 30}px`,
        clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
        top: `${Math.random() * 85}%`,
        left: `${Math.random() * 85}%`,
      }}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.3, 1],
        x: [0, 30 - Math.random() * 60, 0],
        y: [0, -30 + Math.random() * 60, 0],
      }}
      transition={{
        duration: 40 + Math.random() * 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  ))}

  {/* Horizontal & Vertical Data Lines */}
  {[...Array(6)].map((_, i) => (
    <motion.div
      key={`line-${i}`}
      className="absolute bg-white/20"
      style={{
        width: `${10 + Math.random() * 50}px`,
        height: `${1 + Math.random() * 3}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        x: [0, 60 - Math.random() * 120, 0],  // longer horizontal slide
        y: [0, 20 - Math.random() * 40, 0],    // longer vertical slide
      }}
      transition={{
        duration: 15 + Math.random() * 15,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  ))}

  {/* Diagonal Crosses */}
  {[...Array(4)].map((_, i) => (
    <motion.div
      key={`cross-${i}`}
      className="absolute w-4 h-4 bg-white/20 rotate-45"
      style={{
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`,
      }}
      animate={{
        rotate: [45, 405],
        scale: [1, 1.5, 1],
        x: [0, 20 - Math.random() * 40, 0],   // longer horizontal
        y: [0, -20 + Math.random() * 40, 0],  // longer vertical
      }}
      transition={{
        duration: 20 + Math.random() * 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ))}

  {/* Small Twinkling Particles */}
  {[...Array(20)].map((_, i) => (
    <motion.div
      key={`particle-${i}`}
      className="absolute w-2 h-2 bg-white rounded-full opacity-20"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -20 + Math.random() * 20, 0],  // bigger vertical motion
        x: [0, 10 - Math.random() * 20, 0],   // bigger horizontal motion
      }}
      transition={{
        duration: 15 + Math.random() * 15,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 5,
      }}
    />
  ))}
</div>
<SpaceBackground />



      {/* Navbar */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      {/* DotGroup */}
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}

        {/* Sections */}
        <div id="home">
          <motion.div onViewportEnter={() => setSelectedPage("home")}>
            <Landing setSelectedPage={setSelectedPage} />
          </motion.div>
        </div>

        <div id="skills" className="md:h-full mt-20 md:mt-52">
          <motion.div onViewportEnter={() => setSelectedPage("skills")}>
            <MySkills />
          </motion.div>
        </div>

        <div
          id="workexperience"
          className="mt-20 md:mt-52 relative min-h-[500px] md:min-h-screen"
        >
          <motion.div onViewportEnter={() => setSelectedPage("workexperience")}>
            <WorkExperience />
          </motion.div>
        </div>

        <div id="projects" className="md:h-full mt-20">
          <motion.div onViewportEnter={() => setSelectedPage("projects")}>
            <Projects />
          </motion.div>
        </div>

        <div id="education" className="md:h-full mt-20">
          <motion.div onViewportEnter={() => setSelectedPage("education")}>
            <Education />
          </motion.div>
        </div>

        <div id="contact" className="md:h-full mt-20">
          <motion.div onViewportEnter={() => setSelectedPage("contact")}>
            <Contact />
          </motion.div>
        </div>
      </div>

      <Footer />

      {/* Tailwind Animations */}
      <style>
        {`
   @keyframes gradientBackground {
  0% { background-position: 0% 50%; }
  25% { background-position: 50% 100%; }
  50% { background-position: 100% 50%; }
  75% { background-position: 50% 0%; }
  100% { background-position: 0% 50%; }
}
.animate-gradientBackground {
  animation: gradientBackground 40s ease infinite; /* slightly longer for 20 colors */
}


    @keyframes floatGlow {
      0% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-50px) scale(1.1); }
      100% { transform: translateY(0) scale(1); }
    }
    .animate-floatGlow {
      animation: floatGlow 20s infinite ease-in-out alternate;
    }
    .delay-2000 {
      animation-delay: 2s;
    }
  `}
      </style>
    </div>
  );
}

export default App;
