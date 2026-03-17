import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { assets } from "@/assets/assets";
const ProjectCard = ({ project, index, targetScale, progress }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, [index * 0.5, 1], [1, targetScale]);
  return (
    <li ref={containerRef} className="sticky top-24 mx-auto">
      <motion.div
        className="relative flex h-[500px] origin-top flex-col justify-center rounded-xl border-2 border-l-8 border-primary bg-white p-4 shadow-md"
        style={{ scale, top: `calc(${index * 20}px)` }}
      >
        <div className="mb-8 text-center">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.subtitle}</p>
        </div>

        <div className="grid place-items-center sm:grid-cols-2">
          <div className="relative hidden max-w-lg overflow-hidden rounded-xl border sm:block">
            <motion.div style={{ scale: imageScale }}>
              <Image
                src={project.image}
                alt={project.title}
                width={1020}
                height={770}
                className="h-full w-full object-cover"
                quality={100}
              />
            </motion.div>
          </div>

          {/* <div className="w-full rounded-b-xl rounded-t-xl bg-muted sm:absolute sm:bottom-0 sm:rounded-t-none sm:border-t-2 sm:border-dashed sm:border-primary"> */}
          <div className="">
            <div className="space-y-2 p-4 py-0 md:p-8 md:py-0">
              <p className="whitespace-pre-line leading-snug">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 sm:gap-4">
                {project.tags.map((tag, i) => (
                  <li key={i}>
                    <span className="select-none inline-flex items-center rounded-full bg-black px-2 py-1 text-xs font-medium text-white ring-1 ring-gray-500/10 ring-inset">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-end p-2">
              <a
                href={`${project.slug}`}
                className="flex items-center gap-2 hover:underline"
              >
                Learn more <Image src={assets.right_arrow} className="w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </li>
  );
};

export default ProjectCard;
