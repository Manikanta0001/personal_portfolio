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
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  const handleRedirect = () => {
    window.open(url, "_blank");
  };

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles} onClick={handleRedirect}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {description}
        </p>
        <Button variant="contained" sx={{bgcolor:"#325f6e", mt:2}} >View project</Button>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
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
        As a fresh developer, I've showcased my skills with projects like an Admin dashboard, Spotify clone, and personal portfolio.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          

          {/* ROW 2 */}
          <Project title="admin-dashboard" description="using Material UI , Datagrid, light and dark mode" url="https://mani-admin-dashboard.netlify.app" />
          <Project title="spotify-clone" description="using Tailwind css, Redux, Spotify API"/>
          <Project title="food-delevery-app" description="Coming Soon" />

          
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
