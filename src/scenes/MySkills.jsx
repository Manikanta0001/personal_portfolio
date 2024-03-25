import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          Expertise in React, JavaScript, TypeScript, along with proficiency in Redux, Tailwind CSS, and Material UI, Formik etc..
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
      <div className="w-full bg-cover"><h4 className="text-1xl md:text-1xl font-bold">Web Development</h4>
      <div className='mt-5 w-full flex flex-col gap-6'>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">React</p>
            <span className="w-full h-2 bg-black bg-opacity-40 rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue via-pink-500 to-red2 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">80%</span>
              </motion.span>
            </span>
            </div>
            <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Javascript</p>
            <span className="w-full h-2 bg-black bg-opacity-40 rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[85%] h-full bg-gradient-to-r from-blue via-pink-500 to-red2 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">85%</span>
              </motion.span>
            </span>
            </div>
            <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">TypeScript</p>
            <span className="w-full h-2 bg-black bg-opacity-40 rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[45%] h-full bg-gradient-to-r from-blue via-pink-500 to-red2 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">45%</span>
              </motion.span>
            </span>
            </div>
            <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Html and css</p>
            <span className="w-full h-2 bg-black bg-opacity-40 rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue via-pink-500 to-red2 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">90%</span>
              </motion.span>
            </span>
            </div>
          </div>
      </div>
      <div className="w-full bg-cover"><h4 className="text-1xl md:text-1xl font-bold">React libraries and tools</h4>
      <div className='mt-5 w-full flex flex-col gap-6'>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Material UI</p>
            <span className="w-full h-2 bg-black bg-opacity-40 rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue via-pink-500 to-red2 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">90%</span>
              </motion.span>
            </span>
            </div>
            <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Tailwind CSS</p>
            <span className="w-full h-2 bg-black bg-opacity-40 rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[60%] h-full bg-gradient-to-r from-blue via-pink-500 to-red2 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">60%</span>
              </motion.span>
            </span>
            </div>
            <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Formik</p>
            <span className="w-full h-2 bg-black bg-opacity-40 rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue via-pink-500 to-red2 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">80%</span>
              </motion.span>
            </span>
            </div>
            <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Redux and saga</p>
            <span className="w-full h-2 bg-black bg-opacity-40 rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue via-pink-500 to-red2 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">70%</span>
              </motion.span>
            </span>
            </div>
          </div>
          
      </div>
      <div className="w-full bg-cover"><h4 className="text-1xl md:text-1xl font-bold">Other programming knowledge</h4>
      <div className='mt-5 w-full flex flex-col gap-6'>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Python</p>
            <span className="w-full h-2 bg-black bg-opacity-40 rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[40%] h-full bg-gradient-to-r from-blue via-pink-500 to-red2 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">40%</span>
              </motion.span>
            </span>
            </div>
            <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Core Java</p>
            <span className="w-full h-2 bg-black bg-opacity-40 rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[50%] h-full bg-gradient-to-r from-blue via-pink-500 to-red2 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">50%</span>
              </motion.span>
            </span>
            </div>
          </div>
          </div>
      </div>
    </section>
  );
};

export default MySkills;
