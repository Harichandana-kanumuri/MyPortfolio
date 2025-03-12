import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/chandu.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 mb-12"> {/* Added pb and mb for space */}
      <div className="flex flex-wrap items-center">
        {/* Left side: Text */}
        <div className="w-full lg:w-1/2 p-4">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white lg:text-6xl"
          >
            Harichandana Kanumuri
          </motion.h1>
          <p className="mt-4 text-lg text-neutral-300">{HERO_CONTENT}</p>
        </div>

        {/* Right side: Image */}
        <div className="w-full lg:w-1/2 p-4 flex justify-center">
          <motion.img
            src={profilePic}
            alt="chandu"
            className="w-72 h-72 rounded-full object-cover border-4 border-neutral-700"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
