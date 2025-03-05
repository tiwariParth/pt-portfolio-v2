'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  SiDocker, SiKubernetes, SiGo, SiAnsible, SiTerraform,
  SiPrometheus, SiGrafana, SiAmazon, SiGithubactions
} from 'react-icons/si';

const DevOpsContent = () => {
  // Last updated information
  const lastUpdated = "2025-03-05 17:15:43";
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

  // Skills for DevOps
  const skills = [
    { name: 'Docker', icon: <SiDocker className="skill-icon text-devopsNeon-primary" /> },
    { name: 'Kubernetes', icon: <SiKubernetes className="skill-icon text-devopsNeon-primary" /> },
    { name: 'Golang', icon: <SiGo className="skill-icon text-devopsNeon-primary" /> },
    { name: 'Ansible', icon: <SiAnsible className="skill-icon text-devopsNeon-primary" /> },
    { name: 'Terraform', icon: <SiTerraform className="skill-icon text-devopsNeon-primary" /> },
    { name: 'Prometheus', icon: <SiPrometheus className="skill-icon text-devopsNeon-primary" /> },
    { name: 'Grafana', icon: <SiGrafana className="skill-icon text-devopsNeon-primary" /> },
    { name: 'AWS', icon: <SiAmazon className="skill-icon text-devopsNeon-primary" /> },
    { name: 'GitHub Actions', icon: <SiGithubactions className="skill-icon text-devopsNeon-primary" /> },
  ];

  // Sample projects for DevOps
  const projects = [
    {
      title: 'Microservices Orchestration',
      description: 'Designed and implemented a Kubernetes-based microservices architecture with automated scaling, monitoring, and deployment pipelines.',
      technologies: ['Kubernetes', 'Docker', 'Terraform', 'AWS EKS', 'GitHub Actions'],
      github: '#',
      live: '#',
      image: '/projects/microservices.jpg'
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Built comprehensive CI/CD pipelines using GitHub Actions for testing, building, and deploying applications to multiple environments.',
      technologies: ['GitHub Actions', 'Docker', 'AWS', 'Terraform', 'Bash'],
      github: '#',
      live: '#',
      image: '/projects/cicd.jpg'
    },
    {
      title: 'Infrastructure Monitoring System',
      description: 'Implemented a robust monitoring and alerting system using Prometheus and Grafana for tracking application and infrastructure metrics.',
      technologies: ['Prometheus', 'Grafana', 'Kubernetes', 'Terraform', 'Go'],
      github: '#',
      live: '#',
      image: '/projects/monitoring.jpg'
    },
  ];

  return (
    <div className="space-y-16">
      {/* Skills Section */}
      <section>
        <h3 className="text-2xl font-bold mb-8 text-center text-devopsNeon-primary">Skills & Technologies</h3>
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
              className="flex flex-col items-center p-4 rounded-lg bg-devopsNeon-dark/40 backdrop-blur-sm border border-devopsNeon-primary/30 hover:border-devopsNeon-primary transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {skill.icon}
              <span className="text-sm font-medium text-devopsNeon-light text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section - Original Design */}
      <section>
        <h3 className="text-2xl font-bold mb-8 text-center text-devopsNeon-primary">Featured Projects</h3>
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
              className="card card-devops group h-full flex flex-col"
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-gray-900">
                <div className="absolute inset-0 flex items-center justify-center text-devopsNeon-primary opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full bg-gradient-to-tr from-devopsNeon-dark to-devopsNeon-primary/30 flex items-center justify-center">
                    <span className="text-2xl font-bold">{project.title.charAt(0)}</span>
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl font-bold mb-2 text-devopsNeon-primary">{project.title}</h4>
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs px-2 py-1 rounded-full bg-devopsNeon-primary/20 text-devopsNeon-primary"
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
                  className="flex items-center text-sm font-medium text-devopsNeon-light hover:text-devopsNeon-primary transition-colors"
                >
                  <FaGithub className="mr-1" /> GitHub
                </a>
                <a 
                  href={project.live} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-devopsNeon-light hover:text-devopsNeon-primary transition-colors"
                >
                  <FaExternalLinkAlt className="mr-1" /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experience Section - New Timeline Design */}
      <section>
        <h3 className="text-2xl font-bold mb-8 text-center text-devopsNeon-primary">Work Experience</h3>
        <div className="space-y-8">
          {/* Timeline item 1 */}
          <motion.div 
            className="relative pl-8 border-l-2 border-devopsNeon-primary/50"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-devopsNeon-primary"></div>
            <div className="mb-1 text-devopsNeon-primary font-semibold">2023 - Present</div>
            <h4 className="text-lg font-bold mb-2">Senior DevOps Engineer</h4>
            <h5 className="text-md font-medium mb-2 text-gray-300">CloudScale Systems</h5>
            <p className="text-gray-400 mb-4">
              Leading DevOps initiatives and implementing infrastructure automation for cloud-native applications.
              Architecting and maintaining high-availability Kubernetes clusters and CI/CD pipelines.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
              <li>Architected and maintained Kubernetes clusters for high-availability microservices</li>
              <li>Implemented Infrastructure as Code using Terraform and AWS CloudFormation</li>
              <li>Designed and optimized CI/CD pipelines with GitHub Actions, reducing deployment time by 60%</li>
              <li>Set up comprehensive monitoring solutions with Prometheus and Grafana</li>
            </ul>
          </motion.div>

          {/* Timeline item 2 */}
          <motion.div 
            className="relative pl-8 border-l-2 border-devopsNeon-primary/50"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-devopsNeon-primary"></div>
            <div className="mb-1 text-devopsNeon-primary font-semibold">2021 - 2023</div>
            <h4 className="text-lg font-bold mb-2">DevOps Engineer</h4>
            <h5 className="text-md font-medium mb-2 text-gray-300">TechInfra Inc.</h5>
            <p className="text-gray-400 mb-4">
              Managed and automated infrastructure deployments while implementing modern DevOps practices.
              Focused on containerization and cloud infrastructure optimization.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
              <li>Containerized legacy applications using Docker and orchestrated with Kubernetes</li>
              <li>Automated server provisioning and configuration with Ansible</li>
              <li>Built and maintained AWS infrastructure for production and staging environments</li>
              <li>Implemented cost optimization strategies, reducing cloud spending by 35%</li>
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

export default DevOpsContent;