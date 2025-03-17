"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  // Animation variants
  const glowVariants = {
    initial: { opacity: 0.5, scale: 0.8 },
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [0.8, 1, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-dark-950">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-neon-purple-500/10 rounded-full blur-[100px]"
          variants={glowVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-neon-cyan-500/10 rounded-full blur-[100px]"
          variants={glowVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.5 }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name heading with enhanced glow effect */}
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-neon-purple-400 to-neon-cyan-400 text-transparent bg-clip-text">
                Parth Tiwari
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-neon-purple-500 to-neon-cyan-500 blur-lg opacity-50" />
            </span>
          </h1>

          {/* Role titles with neon effect */}
          <h2 className="mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-bold">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
              <span className="text-transparent bg-gradient-to-r from-neon-purple-400 to-neon-purple-300 bg-clip-text shadow-neon-sm shadow-neon-purple-glow">
                Full Stack Developer
              </span>
              <span className="text-white mx-2 hidden sm:inline opacity-60">
                &
              </span>
              <span className="text-transparent bg-gradient-to-r from-neon-cyan-400 to-neon-cyan-300 bg-clip-text shadow-neon-sm shadow-neon-cyan-glow">
                DevOps Engineer
              </span>
            </div>
          </h2>

          {/* Description with improved readability */}
          <p className="mb-8 sm:mb-10 max-w-[90%] sm:max-w-2xl mx-auto text-base sm:text-lg text-gray-300/90 px-4 sm:px-0 leading-relaxed">
            Building robust, scalable applications and optimizing deployment
            workflows to create seamless user experiences and efficient
            infrastructure.
          </p>

          {/* Enhanced button container */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4 sm:px-0">
            <motion.a
              href="/resume.pdf"
              download
              className="group relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base font-medium rounded-lg 
                       bg-gradient-to-r from-neon-purple-500 to-neon-purple-400 text-white
                       hover:shadow-neon-lg hover:shadow-neon-purple-glow transition-all duration-300
                       overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="relative z-10">Download CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple-400 to-neon-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="#contact"
              className="group relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base font-medium rounded-lg
                       border border-neon-cyan-500/50 text-neon-cyan-400
                       hover:shadow-neon-lg hover:shadow-neon-cyan-glow
                       hover:bg-neon-cyan-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan-500/10 to-neon-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: [0.5, 1, 0.5],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <a
          href="#about"
          className="p-2 rounded-full bg-dark-800/50 border border-neon-purple-500/20
                     hover:border-neon-purple-500/50 hover:shadow-neon-md hover:shadow-neon-purple-glow
                     transition-all duration-300"
        >
          <FaArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-neon-purple-400" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
