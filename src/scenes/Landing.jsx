import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ManikantaImage from "../assets/ManiImgCircle3.png"; // adjust path if needed

const handleDownloadResume = () => {
  const resumeUrl = "../assets/Manikanta Balaga - React Dev.pdf";
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.setAttribute("download", "Manikanta_Balaga_Resume.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:rounded-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:hue-rotate-90 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[450px] rounded-[400px]"
              src={ManikantaImage}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[300px] md:max-w-[400px] rounded-[400px]"
            src={ManikantaImage}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p
            className="
    text-5xl font-playfair z-10 text-center md:text-start
    transition-transform duration-300 ease-out
    hover:scale-105 hover:drop-shadow-xl
  "
          >
            Manikanta{" "}
            <span
              className="
      xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
      before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]
      transition-colors duration-300
      hover:text-blue-500
    "
            >
              Balaga
            </span>
          </p>

          <p
            className="
    mt-10 mb-7 text-sm text-center md:text-start
    transition-transform duration-800 ease-out
    hover:scale-105 hover:text-blue-400 hover:drop-shadow-lg
  "
          >
            Enthusiastic and dedicated aspiring React developer, passionate
            about crafting engaging user experiences
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* Contact Info Button */}
          <AnchorLink
            onClick={() => setSelectedPage("contact")}
            href="#footer"
            className="
      relative flex items-center bg-white/10 backdrop-blur-md border border-white/30
      text-white font-semibold py-3 px-7 rounded-lg shadow-md
      hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-out
      group overflow-hidden
    "
          >
            {/* Hover shine overlay */}
            <span
              className="
      absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-30
      transition-opacity duration-300 rounded-lg
    "
            ></span>
            <span className="z-10">Contact Info</span>
          </AnchorLink>

          {/* Let's Talk Button */}
          <AnchorLink
            onClick={() => setSelectedPage("contact")}
            href="#contact"
            className="
      relative flex items-center bg-white/10 backdrop-blur-md border border-white/30
      text-white font-semibold py-3 px-7 rounded-lg shadow-md
      hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-out
      group overflow-hidden
    "
          >
            <span
              className="
      absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-30
      transition-opacity duration-300 rounded-lg
    "
            ></span>
            <span className="z-10">Let's Talk.</span>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-3 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <button
            onClick={handleDownloadResume}
            className="
    relative flex items-center bg-white/10 backdrop-blur-md border border-white/30
    text-white font-semibold py-3 px-6 rounded-lg shadow-md
    hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-out
    group overflow-hidden
  "
          >
            {/* Hover overlay for subtle shine */}
            <span
              className="
      absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-30
      transition-opacity duration-300
      rounded-lg
    "
            ></span>

            {/* Icon */}
            <img
              src="../assets/resume-icon5.png"
              alt="resume-download-link"
              className="w-6 h-6 mr-3 z-10 group-hover:rotate-12 transition-transform duration-300 ease-out"
            />

            {/* Text */}
            <span className="z-10">Download Resume</span>
          </button>
        </motion.div>

        <motion.div
          className="flex mt-1 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
