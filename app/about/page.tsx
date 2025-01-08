'use client'
import { motion } from 'framer-motion'
import { User, Users, UserCheck, Briefcase, Heart, Code, Mail, Phone, Github, Globe } from 'lucide-react'
export default function About() {
  const fadeIn = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 space-y-16"
    >
      <motion.h1 
        className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
        {...fadeIn}
      >
        About Me
      </motion.h1>
      
      <motion.section {...fadeIn} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 flex items-center">
          <User className="mr-4 text-pink-400" />
          Professional Summary
        </h2>
        <p className="mb-4 text-lg">
          I am a Computer Science student specializing in Software Development at Universiti Teknikal Malaysia Melaka. Through my academic journey, I have maintained a strong academic performance while developing practical skills in software development. I have had the opportunity to work on several meaningful projects, including healthcare management solutions and lifestyle applications, which have helped me build a solid foundation in both frontend and backend development.
        </p>
        <p className="text-lg">
          I enjoy tackling technical challenges and have experience in developing various applications, from desktop-based systems to mobile applications. Each project has been a valuable learning experience, allowing me to grow my technical skills while understanding the importance of creating solutions that provide real value to users.
        </p>
      </motion.section>

      <motion.section {...fadeIn} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 flex items-center">
          <Briefcase className="mr-4 text-purple-400" />
          Career Objectives
        </h2>
        <p className="text-lg">
          To grow as a Software Developer while contributing to meaningful projects that solve real-world problems. I am eager to learn from experienced professionals and hope to apply my knowledge in full-stack development to create reliable and user-friendly solutions. I look forward to opportunities where I can both contribute and continue learning in the fast-evolving field of software development.
        </p>
      </motion.section>

      <motion.section {...fadeIn} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 flex items-center">
          <Heart className="mr-4 text-pink-400" />
          Professional Values/Work Philosophy
        </h2>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start">
            <Code className="mr-4 mt-1 text-purple-400" />
            <div>
              <strong>Continuous Improvement:</strong> Willing to learn from mistakes and feedback, open to new approaches and better ways of doing things, value every opportunity to expand knowledge.
            </div>
          </li>
          <li className="flex items-start">
            <Users className="mr-4 mt-1 text-pink-400" />
            <div>
              <strong>Team Collaboration:</strong> Believe in the power of working together, ready to help team members when needed, open to learning from others' experiences.
            </div>
          </li>
          <li className="flex items-start">
            <UserCheck className="mr-4 mt-1 text-purple-400" />
            <div>
              <strong>User Focus:</strong> Committed to understanding user needs, value feedback for improvement, focus on creating practical solutions.
            </div>
          </li>
          <li className="flex items-start">
            <Code className="mr-4 mt-1 text-pink-400" />
            <div>
              <strong>Code Quality:</strong> Strive to write clear and maintainable code, follow team coding standards, pay attention to documentation.
            </div>
          </li>
        </ul>
      </motion.section>

      <motion.section 
        id="contact" 
        {...fadeIn}
        className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl"
      >
        <h2 className="text-3xl font-semibold mb-6 flex items-center">
          <Mail className="mr-4 text-purple-400" />
          Contact Information
        </h2>
        <ul className="space-y-4 text-lg">
          <li className="flex items-center">
            <Mail className="mr-4 text-pink-400" />
            <a href="mailto:kks741224@gmail.com" className="hover:text-pink-400 transition duration-300">kks741224@gmail.com</a>
          </li>
          <li className="flex items-center">
            <Phone className="mr-4 text-purple-400" />
            <a href="tel:+60198310723" className="hover:text-pink-400 transition duration-300">+60198310723</a>
          </li>
          <li className="flex items-center">
            <Github className="mr-4 text-pink-400" />
            <a href="https://github.com/p0205" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition duration-300">https://github.com/p0205</a>
          </li>
          <li className="flex items-center">
            <Globe className="mr-4 text-purple-400" />
            Languages: Mandarin, English, Malay
          </li>
        </ul>
      </motion.section>
    </motion.div>
  )
}

