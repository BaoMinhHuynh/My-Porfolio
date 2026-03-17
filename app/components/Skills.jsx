import { toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skill"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-Ovo"
      >
        Skills
      </motion.h2>
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Languages, frameworks, technologies, and libraries.
      </motion.h4>
      {/* <ul className="flex items-center gap-3 sm:gap-5 justify-center">
        {toolsData.map((tool, index) => (
          <li
            className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 pt-2"
            key={index}
          >
            <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
          </li>
        ))}
      </ul> */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="grid grid-cols-3 sm:grid-cols-6 gap-6 gap-y-16 justify-center pt-12"
      >
        {toolsData.map((tool, index) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            key={index}
            className="flex flex-col items-center justify-center w-24 aspect-square cursor-pointer hover:-translate-y-1 transition duration-300"
          >
            <Image
              src={tool.img}
              alt={tool.title}
              className="w-12 sm:w-16 mb-2"
            />
            <span className="text-sm text-center">{tool.title}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Skills;
