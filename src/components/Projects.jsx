import { PROJECTS } from "../constants";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Container variant to stagger children animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Variant for each project card animation
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5 } 
  },
};

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <motion.h2
        className="mb-12 text-center text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-3xl shadow-lg overflow-hidden h-72 flex items-center justify-center"
            variants={cardVariants}
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 bg-black bg-opacity-70 w-full h-full flex flex-col items-center justify-center p-6 text-white">
              <h3 className="text-2xl font-bold mb-3 text-center">
                {project.title}
              </h3>
              <p className="text-sm text-center mb-4">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium"
                >
                  View Project <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
