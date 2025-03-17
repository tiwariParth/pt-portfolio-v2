"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiDocker,
  SiKubernetes,
  SiGo,
  SiAnsible,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiAmazon,
  SiGithubactions,
  SiJenkins,
  SiLinux,
  SiPython,
  SiNginx,
} from "react-icons/si";

const DevOpsContent = () => {
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

  // Skills for DevOps with expanded list
  const skills = [
    {
      name: "Docker",
      icon: (
        <SiDocker className="text-2xl sm:text-3xl text-devopsNeon-primary" />
      ),
    },
    {
      name: "Kubernetes",
      icon: (
        <SiKubernetes className="text-2xl sm:text-3xl text-devopsNeon-primary" />
      ),
    },
    {
      name: "Terraform",
      icon: (
        <SiTerraform className="text-2xl sm:text-3xl text-devopsNeon-primary" />
      ),
    },
    {
      name: "AWS",
      icon: (
        <SiAmazon className="text-2xl sm:text-3xl text-devopsNeon-primary" />
      ),
    },
    {
      name: "GitHub Actions",
      icon: (
        <SiGithubactions className="text-2xl sm:text-3xl text-devopsNeon-primary" />
      ),
    },
    {
      name: "Ansible",
      icon: (
        <SiAnsible className="text-2xl sm:text-3xl text-devopsNeon-primary" />
      ),
    },
    {
      name: "Prometheus",
      icon: (
        <SiPrometheus className="text-2xl sm:text-3xl text-devopsNeon-primary" />
      ),
    },
    {
      name: "Grafana",
      icon: (
        <SiGrafana className="text-2xl sm:text-3xl text-devopsNeon-primary" />
      ),
    },
    {
      name: "Golang",
      icon: <SiGo className="text-2xl sm:text-3xl text-devopsNeon-primary" />,
    },
    {
      name: "Jenkins",
      icon: (
        <SiJenkins className="text-2xl sm:text-3xl text-devopsNeon-primary" />
      ),
    },
    {
      name: "Linux",
      icon: (
        <SiLinux className="text-2xl sm:text-3xl text-devopsNeon-primary" />
      ),
    },
    {
      name: "Python",
      icon: (
        <SiPython className="text-2xl sm:text-3xl text-devopsNeon-primary" />
      ),
    },
  ];

  // Projects data
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description:
        "Developed comprehensive infrastructure as code solutions using Terraform and AWS, implementing multi-environment deployments with automated scaling and security compliance.",
      technologies: [
        "Terraform",
        "AWS",
        "GitHub Actions",
        "Python",
        "CloudWatch",
      ],
      github: "https://github.com/tiwariParth/cloud-infra-automation",
      live: "#",
      achievements: [
        "Reduced infrastructure deployment time by 75%",
        "Implemented cost optimization saving 40% on cloud expenses",
        "Automated security compliance checks",
      ],
    },
    {
      title: "Kubernetes Cluster Management",
      description:
        "Designed and implemented a scalable Kubernetes infrastructure with automated deployment pipelines, monitoring, and disaster recovery capabilities.",
      technologies: ["Kubernetes", "Docker", "Prometheus", "Grafana", "Helm"],
      github: "https://github.com/tiwariParth/k8s-cluster-management",
      live: "#",
      achievements: [
        "Achieved 99.99% system uptime",
        "Reduced deployment failures by 85%",
        "Implemented zero-downtime deployments",
      ],
    },
    {
      title: "DevOps Monitoring Platform",
      description:
        "Built a comprehensive monitoring and alerting system integrating Prometheus, Grafana, and custom alerting solutions for microservices architecture.",
      technologies: [
        "Prometheus",
        "Grafana",
        "AlertManager",
        "ELK Stack",
        "Python",
      ],
      github: "https://github.com/tiwariParth/monitoring-platform",
      live: "#",
      achievements: [
        "Real-time monitoring of 200+ services",
        "Reduced incident response time by 60%",
        "Custom dashboard for business metrics",
      ],
    },
  ];

  // Experience data
  const experiences = [
    {
      period: "2023 - Present",
      title: "Senior DevOps Engineer",
      company: "CloudScale Technologies",
      description:
        "Leading DevOps initiatives and implementing infrastructure automation for cloud-native applications.",
      achievements: [
        "Architected and maintained Kubernetes clusters supporting 100+ microservices",
        "Implemented GitOps workflow reducing deployment time by 70%",
        "Designed disaster recovery system with 99.99% uptime guarantee",
        "Led team of 5 DevOps engineers in modernizing legacy infrastructure",
      ],
    },
    {
      period: "2021 - 2023",
      title: "DevOps Engineer",
      company: "TechInfra Solutions",
      description:
        "Managed cloud infrastructure and implemented CI/CD pipelines for multiple client projects.",
      achievements: [
        "Reduced cloud infrastructure costs by 45% through optimization",
        "Implemented automated security scanning in CI/CD pipeline",
        "Developed custom monitoring solutions using Prometheus and Grafana",
        "Automated deployment processes saving 20 hours per week",
      ],
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 text-blue-200">
      {/* Skills Section */}
      <section className="px-2 sm:px-4">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-devopsNeon-primary text-blue-300">
          Skills & Technologies
        </h3>
        <motion.div
          className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center p-3 sm:p-4 rounded-lg bg-devopsNeon-dark/40 backdrop-blur-sm border border-devopsNeon-primary/30 hover:border-devopsNeon-primary transition-all duration-300 group "
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-xs sm:text-sm font-medium text-devopsNeon-light text-center mt-2">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="px-2 sm:px-4">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-devopsNeon-primary">
          Featured Projects
        </h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col h-full p-4 sm:p-6 rounded-lg bg-devopsNeon-dark/10 backdrop-blur-sm border border-devopsNeon-primary/20 hover:border-devopsNeon-primary/40 transition-all duration-300 group"
            >
              <div className="relative w-full h-32 sm:h-40 mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-devopsNeon-dark/80 to-devopsNeon-primary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-devopsNeon-primary opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    {project.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </span>
                </div>
              </div>

              <h4 className="text-lg sm:text-xl font-bold mb-2 text-devopsNeon-primary">
                {project.title}
              </h4>

              <p className="text-sm sm:text-base text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="mb-4 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 rounded-full bg-devopsNeon-primary/20 text-devopsNeon-primary whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {project.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-devopsNeon-primary">•</span>
                    <span className="text-xs sm:text-sm text-gray-400">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-xs sm:text-sm font-medium text-devopsNeon-light hover:text-devopsNeon-primary transition-colors"
                >
                  <FaGithub className="mr-1" /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-xs sm:text-sm font-medium text-devopsNeon-light hover:text-devopsNeon-primary transition-colors"
                >
                  <FaExternalLinkAlt className="mr-1" /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="px-2 sm:px-4">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-devopsNeon-primary">
          Work Experience
        </h3>
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative pl-6 sm:pl-8 border-l-2 border-devopsNeon-primary/50"
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="absolute left-[-5px] sm:left-[-8px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-devopsNeon-primary"></div>
              <div className="mb-1 text-sm sm:text-base text-devopsNeon-primary font-semibold">
                {experience.period}
              </div>
              <h4 className="text-base sm:text-lg font-bold mb-1">
                {experience.title}
              </h4>
              <h5 className="text-sm sm:text-base font-medium mb-2 text-gray-300">
                {experience.company}
              </h5>
              <p className="text-sm sm:text-base text-gray-400 mb-3">
                {experience.description}
              </p>
              <ul className="list-none space-y-2">
                {experience.achievements.map(
                  (achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="flex items-start space-x-2 text-xs sm:text-sm text-gray-400"
                    >
                      <span className="text-devopsNeon-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Metadata section */}
      <div className="text-xs text-gray-500 text-right px-2 sm:px-4">
        <p>Last updated: 2025-03-16 13:21:40</p>
        <p>Maintained by: tiwariParth</p>
      </div>
    </div>
  );
};

export default DevOpsContent;
