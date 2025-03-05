'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  SiNextdotjs, SiJavascript, SiTypescript, SiReact, 
  SiCss3, SiHtml5, SiExpress, SiNodedotjs,
  SiPostgresql, SiPrisma, SiMongodb, SiTailwindcss
} from 'react-icons/si';

const FullStackContent = () => {
  // Last updated information
  const lastUpdated = "2025-03-05 17:17:40";
  const maintainedBy = "tiwariParth";

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  // Skills for Full Stack
  const skills = [
    { name: 'Next.js', icon: <SiNextdotjs className="skill-icon text-fsNeon-primary" /> },
    { name: 'JavaScript', icon: <SiJavascript className="skill-icon text-fsNeon-primary" /> },
    { name: 'TypeScript', icon: <SiTypescript className="skill-icon text-fsNeon-primary" /> },
    { name: 'CSS', icon: <SiCss3 className="skill-icon text-fsNeon-primary" /> },
    { name: 'HTML', icon: <SiHtml5 className="skill-icon text-fsNeon-primary" /> },
    { name: 'Express.js', icon: <SiExpress className="skill-icon text-fsNeon-primary" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="skill-icon text-fsNeon-primary" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="skill-icon text-fsNeon-primary" /> },
    { name: 'Prisma', icon: <SiPrisma className="skill-icon text-fsNeon-primary" /> },
    { name: 'MongoDB', icon: <SiMongodb className="skill-icon text-fsNeon-primary" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="skill-icon text-fsNeon-primary" /> },
  ];

  // Sample projects for Full Stack
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with Next.js, TypeScript, and Prisma, featuring real-time inventory updates, secure payment processing, and user authentication.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe API'],
      github: 'https://github.com/tiwariParth/ecommerce-platform',
      live: 'https://ecommerce-platform-demo.vercel.app',
      image: '/projects/ecommerce.jpg'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A responsive dashboard for social media analytics with real-time data visualization, custom reporting features, and API integrations with major social platforms.',
      technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'Chart.js'],
      github: 'https://github.com/tiwariParth/social-dashboard',
      live: 'https://social-dashboard-demo.vercel.app',
      image: '/projects/dashboard.jpg'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management application with user authentication, role-based permissions, and real-time updates for team productivity and project tracking.',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets'],
      github: 'https://github.com/tiwariParth/task-manager',
      live: 'https://task-manager-demo.vercel.app',
      image: '/projects/taskmanager.jpg'
    },
  ];

  return (
    <div className="space-y-16">
      {/* Skills Section */}
      <section>
        <h3 className="text-2xl font-bold mb-8 text-center text-fsNeon-primary">Skills & Technologies</h3>
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center p-4 rounded-lg bg-fsNeon-dark/40 backdrop-blur-sm border border-fsNeon-primary/30 hover:border-fsNeon-primary transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {skill.icon}
              <span className="text-sm font-medium text-fsNeon-light text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section - Updated to match DevOpsContent design */}
      <section>
        <h3 className="text-2xl font-bold mb-8 text-center text-fsNeon-primary">Featured Projects</h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card card-fs group h-full flex flex-col"
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-gray-900">
                <div className="absolute inset-0 flex items-center justify-center text-fsNeon-primary opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full bg-gradient-to-tr from-fsNeon-dark to-fsNeon-primary/30 flex items-center justify-center">
                    <span className="text-2xl font-bold">{project.title.charAt(0)}</span>
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl font-bold mb-2 text-fsNeon-primary">{project.title}</h4>
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs px-2 py-1 rounded-full bg-fsNeon-primary/20 text-fsNeon-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 mt-auto">
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-fsNeon-light hover:text-fsNeon-primary transition-colors"
                >
                  <FaGithub className="mr-1" /> GitHub
                </a>
                <a 
                  href={project.live} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-fsNeon-light hover:text-fsNeon-primary transition-colors"
                >
                  <FaExternalLinkAlt className="mr-1" /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section>
        <h3 className="text-2xl font-bold mb-8 text-center text-fsNeon-primary">Work Experience</h3>
        <div className="space-y-8">
          {/* Timeline item 1 */}
          <motion.div 
            className="relative pl-8 border-l-2 border-fsNeon-primary/50"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-fsNeon-primary"></div>
            <div className="mb-1 text-fsNeon-primary font-semibold">2023 - Present</div>
            <h4 className="text-lg font-bold mb-2">Senior Full Stack Developer</h4>
            <h5 className="text-md font-medium mb-2 text-gray-300">TechInnovate Solutions</h5>
            <p className="text-gray-400 mb-4">
              Leading development of enterprise SaaS applications using Next.js, TypeScript, and PostgreSQL. 
              Architected and implemented microservices backend with Express.js and integrated third-party APIs.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
              <li>Reduced application load time by 40% through code splitting and lazy loading strategies</li>
              <li>Implemented real-time notification system using WebSockets and Redis</li>
              <li>Led a team of 5 developers through Agile development cycles</li>
            </ul>
          </motion.div>

          {/* Timeline item 2 */}
          <motion.div 
            className="relative pl-8 border-l-2 border-fsNeon-primary/50"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-fsNeon-primary"></div>
            <div className="mb-1 text-fsNeon-primary font-semibold">2021 - 2023</div>
            <h4 className="text-lg font-bold mb-2">Full Stack Developer</h4>
            <h5 className="text-md font-medium mb-2 text-gray-300">Digital Frontiers Inc.</h5>
            <p className="text-gray-400 mb-4">
              Developed and maintained e-commerce platforms and content management systems using React, Node.js, and MongoDB.
              Implemented OAuth authentication and payment gateway integrations.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
              <li>Created custom CMS solution that increased content team productivity by 30%</li>
              <li>Implemented CI/CD pipelines that reduced deployment time from hours to minutes</li>
              <li>Optimized database queries resulting in 50% improved response times</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Metadata section */}
      <div className="text-xs text-gray-500 text-right">
        <p>Last updated: {lastUpdated}</p>
        <p>Maintained by: {maintainedBy}</p>
      </div>
    </div>
  );
};

export default FullStackContent;