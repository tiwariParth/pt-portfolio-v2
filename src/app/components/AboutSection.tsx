"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      {/* Enhanced background elements for better mobile appearance */}
      <div className="absolute inset-0 bg-fsNeon-dark/30 backdrop-blur-sm -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-fsNeon-primary/10 rounded-full blur-2xl sm:blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-devopsNeon-primary/10 rounded-full blur-2xl sm:blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center glow-text-fs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Profile Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center px-4 sm:px-0"
          >
            <div className="relative w-48 h-48 sm:w-64 md:w-80 sm:h-64 md:h-80 transform hover:scale-105 transition-transform duration-300">
              {/* Profile Image or Placeholder */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-fsNeon-primary/80 to-devopsNeon-primary/80 p-1">
                <div className="w-full h-full rounded-full bg-fsNeon-dark flex items-center justify-center text-xl sm:text-2xl text-fsNeon-primary font-bold">
                  <img
                    src="/unnamed.png"
                    alt="parth-tiwari"
                    className="w-full h-full rounded-full bg-fsNeon-dark flex items-center justify-center text-xl sm:text-2xl text-fsNeon-primary font-bold"
                  />
                </div>
              </div>
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fsNeon-primary to-devopsNeon-primary blur-lg sm:blur-xl opacity-30 -z-10 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 sm:px-6 lg:px-0"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-fsNeon-primary">
              Parth Tiwari
            </h3>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-devopsNeon-primary">
              Full Stack Developer & DevOps Engineer
            </h4>

            <div className="space-y-3 sm:space-y-4 text-gray-300 text-base sm:text-lg">
              <p className="leading-relaxed text-justify">
                I'm a passionate and versatile technology professional with
                expertise in both Full Stack Development and DevOps Engineering.
                With a strong foundation in modern web technologies and cloud
                infrastructure, I create efficient, scalable solutions that
                bridge the gap between development and operations.
              </p>
              <p className="leading-relaxed text-justify">
                My approach combines clean, performant code with automated,
                reliable deployment pipelines to deliver seamless user
                experiences backed by robust infrastructure. I continuously
                explore new technologies and methodologies to improve
                development workflows and system efficiency.
              </p>
              <p className="leading-relaxed text-justify">
                Whether building responsive frontends, designing API
                architectures, or implementing CI/CD pipelines, I'm committed to
                delivering high-quality solutions that meet business goals and
                technical requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
