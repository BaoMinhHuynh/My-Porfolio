import { useScroll } from "motion/react";
import React, { useRef } from "react";
import { projects } from "@/assets/assets";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";
const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 20%", "end end"],
  });
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="project"
      className="relative mb-4 flex scroll-m-16 flex-col gap-8 p-4 md:p-8"
      ref={ref}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-Ovo"
      >
        Projects
      </motion.h2>
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Here are some of the projects that I have worked on.
      </motion.h4>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </motion.ul>
    </motion.section>
  );
};

export default Projects;
