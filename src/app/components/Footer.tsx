"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Social media links
  const socialLinks = [
    {
      id: "github",
      icon: <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: "https://github.com/tiwariParth",
      label: "GitHub Profile",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: "https://linkedin.com/in/tiwarip",
      label: "LinkedIn Profile",
    },
    {
      id: "twitter",
      icon: <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: "https://x.com/tiwarip",
      label: "Twitter Profile",
    },
  ];

  return (
    <motion.footer
      className="relative bg-fsNeon-dark/80 backdrop-blur-sm py-6 sm:py-8 mt-12 sm:mt-16 border-t border-fsNeon-primary/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fsNeon-dark/50 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold glow-text-fs">
              Parth Tiwari
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mt-1 sm:mt-2">
              Full Stack Developer & DevOps Engineer
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              © {currentYear} All Rights Reserved
            </p>
          </div>

          {/* Right section */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            {/* Social links */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-fsNeon-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Footer info */}
            <div className="flex flex-col items-center md:items-end space-y-1">
              <p className="text-xs text-gray-500">
                Last updated: {new Date().toISOString()}
              </p>
              <p className="text-xs text-gray-500">
                Built with Next.js, Tailwind CSS & Framer Motion
              </p>
              <p className="text-xs text-gray-500">
                Maintained by: tiwariParth
              </p>
            </div>
          </div>
        </div>

        {/* Navigation links - Optional */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-fsNeon-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-fsNeon-primary transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-400 hover:text-fsNeon-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-fsNeon-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
