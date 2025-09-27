import { Button } from "@mui/material";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, url }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey/90 z-30 flex flex-col justify-center items-center text-center p-10 text-deep-blue rounded-2xl`;

  const projectTitle = title.split(" ").join("-").toLowerCase();

  const handleRedirect = () => {
    if (url) window.open(url, "_blank");
  };

  return (
    <motion.div
      variants={projectVariant}
      className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
    >
      {/* Overlay */}
      <div className={overlayStyles} onClick={handleRedirect}>
        <p className="text-2xl font-playfair font-semibold">{title}</p>
        <p className="mt-4 text-sm">{description}</p>
        {url && (
          <Button variant="contained" sx={{ bgcolor: "#325f6e", mt: 2 }}>
            View Project
          </Button>
        )}
      </div>

      {/* Image */}
      <img
        src={`../assets/${projectTitle}.jpeg`}
        alt={projectTitle}
        className="rounded-2xl w-full h-64 object-cover"
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          As a fresh developer, I've showcased my skills with projects like an Admin dashboard,
          Spotify clone, and personal portfolio.
        </p>
      </motion.div>

      {/* PROJECTS GRID */}
      <div className="flex justify-center">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 sm:px-0"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Project
            title="sankhya-hospital-website"
            description="Developed using Tailwind CSS, react-router-dom"
            url="https://sankhyahospital-bymanikanta.netlify.app"
          />
          <Project
            title="admin-dashboard"
            description="Built with Material UI, DataGrid, and supports light & dark mode."
            url="https://mani-admin-dashboard.netlify.app"
          />
          <Project title="maintenance-request-system"
           description="A web app for tenants to submit and track maintenance requests, built with React, Tailwind CSS, Redux-toolkit and Supabase for APIS and Data Storage."
           url="https://maintenance-request-system.netlify.app/" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
