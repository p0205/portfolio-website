'use client'
import { motion } from 'framer-motion'
import { Code, Book, PenToolIcon as Tool, Globe, Users, Brain, Clock } from 'lucide-react'

export default function Skills() {
  const technicalSkills = [
    'Java',
    'C++',
    'Dart',
    'SQL',
    'Spring Boot',
    'Flutter',
    'GitHub',
    'MySQL',
    'OpenCV',
  ]

  const tools = [
    'Visual Studio Code',
    'Eclipse',
    'Android Studio',
    'Postman',
    'BLoC Architecture',
  ]

  const languages = ['Mandarin', 'English', 'Malay']

  const softSkills = [
    {
      name: 'Team Collaboration',
      icon: <Users className="w-8 h-8" />,
      details: [
        'Work well with others on group projects',
        'Open to feedback and different perspectives',
      ],
    },
    {
      name: 'Problem-Solving',
      icon: <Brain className="w-8 h-8" />,
      details: [
        'Methodical approach to debugging',
        'Willing to seek help when needed',
      ],
    },
    {
      name: 'Communication',
      icon: <Globe className="w-8 h-8" />,
      details: [
        'Clear documentation writing',
        'Active listening',
      ],
    },
    {
      name: 'Learning Attitude',
      icon: <Book className="w-8 h-8" />,
      details: [
        'Eager to learn new technologies',
        'Open to guidance and mentoring',
      ],
    },
    {
      name: 'Responsibility',
      icon: <Clock className="w-8 h-8" />,
      details: [
        'Committed to meeting deadlines',
        'Reliable team member',
      ],
    },
  ]

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <motion.h1 
        className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
        {...fadeInUp}
      >
        Skills
      </motion.h1>

      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-6 text-white flex items-center">
          <Code className="mr-4" />
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {technicalSkills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-4 text-center shadow-xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <p className="font-medium text-white">{skill}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-6 text-white flex items-center">
          <Tool className="mr-4" />
          Frameworks & Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {tools.map((tool, index) => (
            <motion.div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-4 text-center shadow-xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <p className="font-medium text-white">{tool}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-6 text-white flex items-center">
          <Globe className="mr-4" />
          Languages
        </h2>
        <div className="flex flex-wrap gap-4">
          {languages.map((language, index) => (
            <motion.div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full px-6 py-2 shadow-xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <p className="font-medium text-white">{language}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        {...fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-6 text-white flex items-center">
          <Users className="mr-4" />
          Soft Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softSkills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-4 text-white">{skill.name}</h3>
              </div>
              <ul className="list-disc pl-5">
                {skill.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-white">{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}

