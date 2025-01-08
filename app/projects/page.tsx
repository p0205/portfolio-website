'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Github, Youtube } from 'lucide-react'

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null)

  const projects = [
    {
      title: "Health Buddy",
      description: "A comprehensive health management application with advanced features for tracking calories, exercise, and overall health.",
      technologies: ["Java", "SpringBoot", "MySQL", "Flutter", "BLoC Architecture", "OpenCV", "Postman"],
      features: [
        "Calories Counter Module with automatic nutrition information extraction",
        "Calories Burnt (Sport Summary) Module",
        "Progress tracking",
        "Advanced OCR Implementation using OpenCV",
      ],
      impact: [
        "Promoted healthy lifestyles",
        "Provided personalized health insights",
        "Improved user engagement in health management",
      ],
      context: "Part of a larger health management system aimed at promoting healthy lifestyles through AI-powered schedule generation, health risk assessment, performance analysis, daily routine optimization, and personalized health insights.",
    },
    {
      title: "Hospital Management System",
      description: "A microservices-based system for efficient hospital management, focusing on patient registration and medical records.",
      technologies: ["Java", "MySQL", "Microservices", "RESTful API"],
      features: [
        "Patient Registration Application",
        "Medical Record Application",
        "Secure data transmission",
        "Role-based access control",
      ],
      impact: [
        "Streamlined patient registration process",
        "Improved medical record management",
        "Enhanced data security and compliance",
      ],
      links: {
        github: "https://github.com/p0205/Hospital-Management-System",
        youtube: "https://youtu.be/FlEpclmWTUI?si=fa0_NFsmHbExvsce",
      },
    },
    {
      title: "Payroll Management System",
      description: "A comprehensive desktop application for managing payroll processes, employee information, and generating reports.",
      technologies: ["C++", "MySQL"],
      features: [
        "Payroll Processing",
        "Employee Management",
        "Leave Management",
        "Report Generation",
        "Security Features",
      ],
      impact: [
        "Reduced processing time for payroll calculations",
        "Improved accuracy in payroll processing",
        "Streamlined HR operations",
        "Reduced operational costs",
      ],
      links: {
        github: "https://github.com/p0205/Payroll-Management-System",
      },
    },
    {
      title: "Gift Shop System",
      description: "An efficient and user-friendly platform for managing the inventory of a gift shop, focusing on core OOP principles.",
      technologies: ["Java", "Java Swing", "MySQL"],
      features: [
        "Inventory management",
        "User-friendly interface",
        "Core OOP principles implementation",
      ],
      links: {
        github: "https://github.com/YIsheng2002/pen-pals",
        youtube: "https://youtu.be/8SLbastHjW8",
      },
    },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <motion.h1 
        className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Projects
      </motion.h1>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.section 
            key={index} 
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div 
              className="p-6 cursor-pointer"
              onClick={() => setExpandedProject(expandedProject === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-semibold mb-2 text-pink-400">{project.title}</h2>
                <motion.div
                  animate={{ rotate: expandedProject === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </div>
              <p className="text-lg text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-purple-500 bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <AnimatePresence>
              {expandedProject === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 overflow-hidden"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2 text-purple-400">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {project.impact && (
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-2 text-purple-400">Project Impact</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {project.impact.map((impact, impactIndex) => (
                          <li key={impactIndex}>{impact}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.context && (
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-2 text-purple-400">Project Context</h3>
                      <p>{project.context}</p>
                    </div>
                  )}

                  {project.links && (
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold mb-2 text-purple-400">Links</h3>
                      <div className="flex space-x-4">
                        {project.links.github && (
                          <Link href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-400 hover:text-pink-300 transition duration-300">
                            <Github className="w-5 h-5 mr-2" />
                            GitHub
                          </Link>
                        )}
                        {project.links.youtube && (
                          <Link href={project.links.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-400 hover:text-pink-300 transition duration-300">
                            <Youtube className="w-5 h-5 mr-2" />
                            Demo
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        ))}
      </div>
    </motion.div>
  )
}

