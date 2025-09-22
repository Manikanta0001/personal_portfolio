import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 ">
        <span className="text-red">EDU</span>CATION
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
        Here are the educational institutions I attended, along with the marks I obtained in each degree.
        </p>
      </motion.div>

      {/* Colleges */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
           
<p className="font-bold text-deep-blue2">RBVRR Institute of Tech. , Abids, Hyderabad.</p>
Master of Computer Applications (MCA), 

          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-green max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
          <p className="font-bold text-deep-blue2">Pragathi Degree & PG college, KPHB</p>
Bachelor of Science (MSCs),
8.59 CGPA

          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-purple max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
          <p className="font-bold text-deep-blue2">Zilla Parishad High School, Gundlapochampally</p>
 <p>SSC Board,Telangana.</p> 8.5 CGPA
 
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
