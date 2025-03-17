"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden grid-bg">
      {/* Background gradients - adjusted for better mobile appearance */}
      <div className="absolute inset-0 bg-gradient-to-b from-fsNeon-dark/40 to-devopsNeon-dark/40 backdrop-blur-sm"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-96 h-[300px] sm:h-96 bg-fsNeon-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-[250px] sm:w-80 h-[250px] sm:h-80 bg-devopsNeon-primary/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Improved text scaling for different screen sizes */}
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="glow-text-fs whitespace-nowrap">Parth Tiwari</span>
          </h1>

          <h2 className="mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-bold">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
              <span className="text-orange-100">Full Stack Developer</span>
              <span className=" mx-2 hidden sm:inline">&</span>
              <span className="text-blue-200">DevOps Engineer</span>
            </div>
          </h2>

          <p className="mb-8 sm:mb-10 max-w-[90%] sm:max-w-2xl mx-auto text-base sm:text-lg text-gray-300 px-4 sm:px-0">
            Building robust, scalable applications and optimizing deployment
            workflows to create seamless user experiences and efficient
            infrastructure.
          </p>

          {/* Enhanced button container for better mobile layout */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4 sm:px-0">
            <motion.a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base font-medium rounded-lg bg-fsNeon-primary text-fsNeon-dark hover:bg-fsNeon-primary/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Download CV
            </motion.a>

            <motion.a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base font-medium rounded-lg border-2 border-fsNeon-primary text-fsNeon-primary hover:bg-fsNeon-primary/10 transition-all duration-300 text-amber-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Adjusted scroll indicator position for mobile */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <a
          href="#about"
          className="text-fsNeon-light hover:text-fsNeon-primary transition-colors"
        >
          <FaArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
