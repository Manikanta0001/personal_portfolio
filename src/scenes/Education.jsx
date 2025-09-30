import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const educationData = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    college: "RBVRR Institute of Technology, Hyderabad",
    score: "8.27 CGPA",
    year: "",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    id: 2,
    degree: "Bachelor of Science (MSCs)",
    college: "Pragathi Degree & PG College, KPHB",
    score: "8.59 CGPA",
    year: "",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
  },
  {
    id: 3,
    degree: "SSC Board",
    college: "Zilla Parishad High School, Gundlapochampally",
    score: "8.5 CGPA",
    year: "",
    gradient: "from-rose-500 via-pink-500 to-orange-400",
  },
];

const Education = () => {
  return (
    <section id="education" className="pt-32 pb-20 text-white">
      {/* Heading */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-playfair font-semibold text-4xl mb-4">
          <span className="text-red">EDU</span>CATION
        </p>
        <LineGradient width="mx-auto w-1/5" />
        <p className="mt-6 text-white-400 text-lg">
          A quick look at my academic journey that built my technical roots.
        </p>
      </motion.div>

      {/* Education Cards */}
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              scale: 1.08,
              y: -10,
              transition: { duration: 0.15, ease: "easeOut" }, // ⚡ faster hover animation
            }}
            className={`relative bg-gradient-to-r ${edu.gradient} rounded-3xl w-[320px] h-[300px] flex flex-col justify-center items-center text-center shadow-xl shadow-gray-800/30 hover:shadow-2xl hover:shadow-gray-900/40 transition-all duration-300`}
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-3xl backdrop-blur-md border border-white/10" />

            {/* Content */}
            <div className="relative z-10 px-6">
              <h3 className="font-semibold text-xl text-white mb-2 tracking-wide drop-shadow-md">
                {edu.degree}
              </h3>
              <p className="text-gray-100 text-sm mb-1 font-light">
                {edu.college}
              </p>
              <p className="text-gray-200 text-xs mb-3">{edu.year}</p>
              <p className="font-semibold text-white mt-2 text-lg tracking-wide">
                {edu.score}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
