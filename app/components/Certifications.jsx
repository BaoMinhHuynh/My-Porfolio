import { certList } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Certifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="certifications"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Achievements
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo mb-10"
      >
        Certifications & Courses
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-3xl mx-auto flex flex-col gap-6"
      >
        {certList.map(
          (
            { logo, title, issuer, issueDate, credentialId, credentialUrl },
            index
          ) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              key={index}
              className="flex gap-4 p-4 border-b-[0.5px] border-gray-300 last:border-none hover:bg-lightHover rounded-lg transition-colors duration-300"
            >
              {/* Cột Logo */}
              <div className="flex-shrink-0 mt-1">
                <Image
                  src={logo}
                  alt={issuer}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Cột Nội dung */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold font-Ovo text-gray-900">
                  {title}
                </h3>
                <p className="text-md text-gray-700">{issuer}</p>
                <p className="text-sm text-gray-500 mt-1">{issueDate}</p>
                {credentialId && (
                  <p className="text-sm text-gray-500">
                    Credential ID {credentialId}
                  </p>
                )}

                {/* Nút Show Credential */}
                {credentialUrl && (
                  <a
                    href={credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-2 w-max px-4 py-1.5 border border-gray-400 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black transition-all duration-300"
                  >
                    <span>Show credential</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 2.25 0 003 8.25v10.5A2.25 2.25 2.25 0 005.25 21h10.5A2.25 2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default Certifications;
