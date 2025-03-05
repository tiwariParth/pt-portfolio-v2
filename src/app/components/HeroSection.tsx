'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center min-h-screen px-4 py-24 overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-fsNeon-dark/40 to-devopsNeon-dark/40 backdrop-blur-sm"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fsNeon-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-devopsNeon-primary/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Hi, I'm <span className="glow-text-fs">Parth Tiwari</span>
          </h1>

          <h2 className="mb-8 text-2xl md:text-3xl font-bold">
            <span className="text-fsNeon-primary mr-2">Full Stack Developer</span>
            <span className="text-white mx-2">&</span>
            <span className="text-devopsNeon-primary ml-2">DevOps Engineer</span>
          </h2>
          
          <p className="mb-10 max-w-2xl mx-auto text-lg text-gray-300">
            Building robust, scalable applications and optimizing deployment workflows to create seamless user experiences and efficient infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="/resume.pdf"
              download
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Download CV
            </motion.a>
            
            <motion.a
              href="#contact"
              className="btn border-2 border-fsNeon-primary text-fsNeon-primary hover:bg-fsNeon-primary/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <a href="#about" className="text-fsNeon-light hover:text-fsNeon-primary transition-colors">
          <FaArrowDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;