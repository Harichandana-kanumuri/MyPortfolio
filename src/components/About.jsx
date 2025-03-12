import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

// Container to stagger child animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

// Variant for heading
const headingVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Variant for paragraph
const paragraphVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 mb-12"> {/* Added spacing */}
      <motion.div
        className="w-full lg:w-3/4 mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1
          className="my-12 text-center text-4xl font-bold text-white"
          variants={headingVariant}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-xl text-white leading-relaxed tracking-wide"
          variants={paragraphVariant}
        >
          {ABOUT_TEXT}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
