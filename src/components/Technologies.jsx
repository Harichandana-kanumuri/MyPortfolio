import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiSpringboot,
  SiAngular,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiKubernetes,
  SiJenkins,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

// Container variant for staggering children
const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variant for column headers (e.g. "Frontend", "Backend", etc.)
const columnHeaderVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Variant for each technology item
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
        className="my-6 text-center text-4xl text-white"
      >
        Technologies
      </motion.h1>

      {/* Four-Column Layout */}
      <motion.div
        className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-2"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Frontend Column */}
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <motion.h2
            variants={columnHeaderVariant}
            className="text-2xl font-bold mb-4 text-white"
          >
            Frontend
          </motion.h2>
          {/* HTML5 */}
          <motion.div className="flex flex-col items-center mb-4" variants={itemVariants}>
            <FaHtml5 className="text-7xl" color="#E34F26" />
            <p className="mt-2 text-lg text-white">HTML5</p>
          </motion.div>
          {/* CSS3 */}
          <motion.div className="flex flex-col items-center mb-4" variants={itemVariants}>
            <FaCss3Alt className="text-7xl" color="#1572B6" />
            <p className="mt-2 text-lg text-white">CSS3</p>
          </motion.div>
          {/* JavaScript */}
          <motion.div className="flex flex-col items-center mb-4" variants={itemVariants}>
            <SiJavascript className="text-7xl" color="#F7DF1E" />
            <p className="mt-2 text-lg text-white">JavaScript</p>
          </motion.div>
          {/* ReactJS */}
          <motion.div className="flex flex-col items-center mb-4" variants={itemVariants}>
            <RiReactjsLine className="text-7xl" color="#61DAFB" />
            <p className="mt-2 text-lg text-white">ReactJS</p>
          </motion.div>
          {/* Angular */}
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <SiAngular className="text-7xl" color="#DD0031" />
            <p className="mt-2 text-lg text-white">Angular</p>
          </motion.div>
        </motion.div>

        {/* Backend Column */}
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <motion.h2
            variants={columnHeaderVariant}
            className="text-2xl font-bold mb-4 text-white"
          >
            Backend
          </motion.h2>
          {/* Java */}
          <motion.div className="flex flex-col items-center mb-4" variants={itemVariants}>
            <FaJava className="text-7xl" color="#007396" />
            <p className="mt-2 text-lg text-white">Java</p>
          </motion.div>
          {/* Spring Boot */}
          <motion.div className="flex flex-col items-center mb-4" variants={itemVariants}>
            <SiSpringboot className="text-7xl" color="#6DB33F" />
            <p className="mt-2 text-lg text-white">Spring Boot</p>
          </motion.div>
          {/* Spring MVC */}
          <motion.div className="flex flex-col items-center mb-4" variants={itemVariants}>
            <SiSpringboot className="text-7xl" color="#6DB33F" />
            <p className="mt-2 text-lg text-white">Spring MVC</p>
          </motion.div>
          {/* Python */}
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <FaPython className="text-7xl" color="#3776AB" />
            <p className="mt-2 text-lg text-white">Python</p>
          </motion.div>
        </motion.div>

        {/* Databases Column */}
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <motion.h2
            variants={columnHeaderVariant}
            className="text-2xl font-bold mb-4 text-white"
          >
            Databases
          </motion.h2>
          {/* MongoDB */}
          <motion.div className="flex flex-col items-center mb-4" variants={itemVariants}>
            <SiMongodb className="text-7xl" color="#47A248" />
            <p className="mt-2 text-lg text-white">MongoDB</p>
          </motion.div>
          {/* PostgreSQL */}
          <motion.div className="flex flex-col items-center mb-4" variants={itemVariants}>
            <SiPostgresql className="text-7xl" color="#336791" />
            <p className="mt-2 text-lg text-white">PostgreSQL</p>
          </motion.div>
          {/* MySQL */}
          <motion.div className="flex flex-col items-center mb-4" variants={itemVariants}>
            <SiMysql className="text-7xl" color="#4479A1" />
            <p className="mt-2 text-lg text-white">MySQL</p>
          </motion.div>
          {/* Oracle */}
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <SiOracle className="text-7xl" color="#F80000" />
            <p className="mt-2 text-lg text-white">Oracle</p>
          </motion.div>
        </motion.div>

        {/* Other Tools Column */}
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <motion.h2
            variants={columnHeaderVariant}
            className="text-2xl font-bold mb-4 text-white"
          >
            Other Tools
          </motion.h2>
          {/* Docker */}
          <motion.div className="flex flex-col items-center mb-4" variants={itemVariants}>
            <FaDocker className="text-7xl" color="#2496ED" />
            <p className="mt-2 text-lg text-white">Docker</p>
          </motion.div>
          {/* Kubernetes */}
          <motion.div className="flex flex-col items-center mb-4" variants={itemVariants}>
            <SiKubernetes className="text-7xl" color="#326CE5" />
            <p className="mt-2 text-lg text-white">Kubernetes</p>
          </motion.div>
          {/* AWS */}
          <motion.div className="flex flex-col items-center mb-4" variants={itemVariants}>
            <FaAws className="text-7xl" color="#FF9900" />
            <p className="mt-2 text-lg text-white">AWS</p>
          </motion.div>
          {/* Jenkins */}
          <motion.div className="flex flex-col items-center mb-4" variants={itemVariants}>
            <SiJenkins className="text-7xl" color="#D33833" />
            <p className="mt-2 text-lg text-white">Jenkins</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
