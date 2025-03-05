'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-fsNeon-dark/30 backdrop-blur-sm -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-fsNeon-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-devopsNeon-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center glow-text-fs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Replace with your image or a placeholder */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-fsNeon-primary/80 to-devopsNeon-primary/80 p-1">
                <div className="w-full h-full rounded-full bg-fsNeon-dark flex items-center justify-center text-2xl text-fsNeon-primary font-bold">
                  PT
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fsNeon-primary to-devopsNeon-primary blur-xl opacity-30 -z-10"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-fsNeon-primary">Parth Tiwari</h3>
            <h4 className="text-xl font-semibold mb-6 text-devopsNeon-primary">Full Stack Developer & DevOps Engineer</h4>
            
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a passionate and versatile technology professional with expertise in both Full Stack Development and DevOps Engineering. 
                With a strong foundation in modern web technologies and cloud infrastructure, I create efficient, scalable solutions that 
                bridge the gap between development and operations.
              </p>
              <p>
                My approach combines clean, performant code with automated, reliable deployment pipelines to deliver seamless user experiences
                backed by robust infrastructure. I continuously explore new technologies and methodologies to improve development workflows and system efficiency.
              </p>
              <p>
                Whether building responsive frontends, designing API architectures, or implementing CI/CD pipelines, I'm committed to delivering
                high-quality solutions that meet business goals and technical requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;