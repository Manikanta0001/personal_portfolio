import { useEffect, useState } from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const [animationKey, setAnimationKey] = useState(0);

  // 🔁 Re-trigger skill bar animation every 5 seconds (or set to 30s if needed)
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const skillBarsLeft = [
    { label: "React Js", percent: "90%" },
    { label: "Javascript", percent: "80%" },
    { label: "HTML & CSS", percent: "100%" },
    { label: "TypeScript", percent: "70%" },
  ];

  const skillBarsRight = [
    { label: "Material UI", percent: "80%" },
    { label: "Tailwind CSS", percent: "90%" },
    { label: "Formik", percent: "80%" },
    { label: "Redux", percent: "70%" },
  ];

  const renderBar = (skill, index) => (
    <motion.div
      key={index}
      className="overflow-x-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <p className="text-sm uppercase font-medium">{skill.label}</p>
      <span className="w-full h-2 bg-black bg-opacity-40 rounded-md inline-flex mt-2 relative">
        <motion.span
          key={animationKey} // triggers width animation again
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          style={{ width: skill.percent }}
          className="h-full bg-gradient-to-r from-blue via-pink-500 to-red2 rounded-md relative"
        >
          <span className="absolute -top-6 right-0 text-xs font-semibold text-gray-800">
            {skill.percent}
          </span>
        </motion.span>
      </span>
    </motion.div>
  );

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        {/* Left Text Section */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Expertise in React, JavaScript, TypeScript, along with proficiency
            in Redux, Tailwind CSS, and Material UI, Formik etc.
          </p>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-0"
        >
          {isAboveLarge ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img alt="skills" className="z-10" src="assets/skills-image.png" />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </motion.div>
      </div>

      {/* SKILLS SECTION */}
      <motion.div
        className="md:flex md:justify-between mt-16 gap-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        {/* Web Development */}
        <div className="w-full bg-cover">
          <h4 className="text-1xl md:text-1xl font-bold">Web Development</h4>
          <div className="mt-5 w-full flex flex-col gap-6">
            {skillBarsLeft.map(renderBar)}
          </div>
        </div>

        {/* React Libraries and Tools */}
        <div className="w-full bg-cover">
          <h4 className="text-1xl md:text-1xl font-bold">React Libraries & Tools</h4>
          <div className="mt-5 w-full flex flex-col gap-6">
            {skillBarsRight.map(renderBar)}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MySkills;
