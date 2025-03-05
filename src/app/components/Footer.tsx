'use client';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  // Current metadata
  const lastUpdated = "2025-03-05 15:36:19";
  const maintainedBy = "tiwariParth";
  
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  // Social media links
  const socialLinks = [
    { id: 'github', icon: <FaGithub size={20} />, url: 'https://github.com/tiwariParth' },
    { id: 'linkedin', icon: <FaLinkedin size={20} />, url: 'https://linkedin.com/in/tiwarip' },
    { id: 'twitter', icon: <FaTwitter size={20} />, url: 'https://x.com/tiwarip' },
  ];

  return (
    <motion.footer 
      className="bg-fsNeon-dark/80 backdrop-blur-sm py-8 mt-16 border-t border-fsNeon-primary/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold glow-text-fs">Parth Tiwari</h3>
            <p className="text-gray-400 mt-2">Full Stack Developer & DevOps Engineer</p>
            <p className="text-gray-500 text-sm mt-1">© {currentYear} All Rights Reserved</p>
          </div>
          
          <div className="space-y-4 md:space-y-0 text-center md:text-right">
            <div className="flex space-x-6 justify-center md:justify-end">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-fsNeon-primary transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                  <span className="sr-only">{link.id}</span>
                </motion.a>
              ))}
            </div>
            
            <div className="text-xs text-gray-500 mt-4">
              <p>Last updated: {lastUpdated}</p>
              <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
              <p>Maintained by: {maintainedBy}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;