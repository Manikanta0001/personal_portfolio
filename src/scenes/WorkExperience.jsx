import { motion } from "framer-motion";
// import LineGradient from "../components/LineGradient";

const WorkExperience = () => {
  return (
    <section id="workexperience" className="pt-20 pb-24">
      <motion.div
        className="md:w-7/8 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            WORK <span className="text-red">EXPERIENCE</span>
          </p>
          {/* <div className="flex justify-center mt-2">
            <LineGradient width="w-1/3" />
          </div> */}
        </div>

        <motion.div
          className=" text-white rounded-xl shadow-lg p-8 text-left border border-light-green mt-8"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-orange-300 mb-1">
            <a
              href="https://www.elberttech.com" // replace with the actual URL
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Elbert Technology Pvt Ltd
            </a>
          </h3>

          <p className="italic text-gray-100 mb-4">August 2024 – Present</p>

          <h4 className="text-xl font-semibold mb-2 text-white">
            Frontend Developer — Fintech Project{" "}
            <a
              href="https://www.fairneft.com" // 🔗 replace with actual project URL if different
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-300 hover:underline"
            >
              FairNeft
            </a>
          </h4>

          <p className="text-white-300 leading-relaxed mb-4">
            I am currently working as a{" "}
            <span className="font-medium text-orange-300">
              Frontend Developer
            </span>{" "}
            at Elbert Technology Pvt Ltd, where I contribute to a large-scale
            fintech project called{" "}
            <span className="font-semibold">FairNeft</span>. My role involves
            building and maintaining core modules like Professional and
            Educational Loan Applications, integrating APIs, and developing
            responsive dashboards for financial reports and credit management.
          </p>

          <ul className="list-disc list-inside text-white-300 space-y-1">
            <li>
              Developed reusable, responsive React components using Tailwind CSS
              & Material UI.
            </li>
            <li>
              Integrated RESTful APIs using Axios and handled state management
              with Redux & Redux-Saga.
            </li>
            <li>
              Worked closely with backend and QA teams to ensure smooth
              deployments and high-quality delivery.
            </li>
            <li>
              Focused on improving page performance, UI responsiveness, and user
              experience.
            </li>
          </ul>
        </motion.div>

        {/* 🌟 AnuSolWave Pvt. Ltd. */}
        <motion.div
          className="text-white rounded-xl shadow-lg p-8 text-left border border-light-green mt-8"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-orange-300 mb-1">
            <a
              href="https://www.linkedin.com/company/anusolwave/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              AnuSolWave Pvt. Ltd.
            </a>
          </h3>

          <p className="italic text-gray-100 mb-2">Feb 2024 – April 2024</p>

          <h4 className="text-xl font-semibold mb-2 text-white">
            React JS Developer — Intern
          </h4>

          <p className="text-white-300 leading-relaxed mb-2">
            Built single-page apps like{" "}
            <span className="font-medium text-orange-300">
              Safety Inspections, Rental Guardian
            </span>{" "}
            using React, Redux-Saga, and Tailwind CSS.
          </p>

          <ul className="list-disc list-inside text-white-300 space-y-1">
            <li>Developed responsive UI components.</li>
            <li>Integrated APIs and managed state with Redux-Saga.</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
