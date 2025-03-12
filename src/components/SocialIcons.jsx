// src/components/SocialIcons.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMedium } from "react-icons/ai";
import { SOCIAL_MEDIA_LINKS } from "../constants"; // Correct import from constants.js

// Map icon names to their actual components
const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  medium: AiOutlineMedium,
};

const SocialIcons = () => {
  return (
    <div className="flex items-center space-x-6 z-20">
      {SOCIAL_MEDIA_LINKS.map((item, index) => {
        const IconComponent = iconMap[item.icon]; // Dynamically get icon
        return (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors"
          >
            <IconComponent size={30} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
