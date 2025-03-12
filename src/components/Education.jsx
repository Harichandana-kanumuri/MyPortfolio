import { EDUCATION } from "../constants";
import { FaUniversity, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Container variant to stagger the children (education cards)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

// Variant for each education card
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Variant for the section title
const titleVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Education = () => {
  return (
    <section className="pt-20" id="education">
      {/* Section Title */}
      <motion.h2
        className="mb-8 text-center text-2xl lg:text-3xl font-bold text-white"
        variants={titleVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Education
      </motion.h2>

      {/* Education Cards */}
      <motion.div
        className="container mx-auto space-y-6 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {EDUCATION.map((education, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-4 p-4 border border-gray-600 rounded-lg bg-transparent"
            variants={cardVariant}
          >
            {/* Degree (with University Icon) */}
            <h3 className="text-lg lg:text-xl font-bold text-white flex items-center gap-2">
              <FaUniversity className="text-yellow-400" />
              {education.degree}
            </h3>

            {/* Institution */}
            <p className="text-sm text-gray-300 font-semibold">
              {education.institution}
            </p>

            {/* Duration (If Available) */}
            {education.duration && (
              <span className="text-sm text-gray-400 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-400" />
                {education.duration}
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
