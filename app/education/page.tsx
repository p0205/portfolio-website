'use client'
import { BookOpen, Award, School } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Education() {
  const educationEvents = [
    {
      year: '2022 - Present',
      title: 'Universiti Teknikal Malaysia Melaka',
      description: 'Bachelor in Computer Science (Software Development)',
      details: 'CGPA: 3.96',
      icon: <BookOpen className="w-8 h-8 text-pink-400" />,
    },
    {
      year: '2021',
      title: 'SMK Tung Hua',
      description: 'STPM',
      details: 'Result: 4.0',
      icon: <School className="w-8 h-8 text-purple-400" />,
    },
    {
      year: '2019',
      title: 'SMK Tung Hua',
      description: 'SPM',
      details: 'Result: 4A+, 6A, 1A-',
      icon: <School className="w-8 h-8 text-pink-400" />,
    },
    {
      year: '2017',
      title: 'SMK Tung Hua',
      description: 'PT3',
      details: 'Result: 10A',
      icon: <School className="w-8 h-8 text-purple-400" />,
    },
    {
      year: '2014',
      title: 'SJK(C) Tung Hua',
      description: 'UPSR',
      details: 'Result: 7A',
      icon: <School className="w-8 h-8 text-pink-400" />,
    }
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
        Education
      </motion.h1>
      
      <div className="space-y-8">
        {educationEvents.map((event, index) => (
          <motion.div 
            key={index} 
            className="flex items-start space-x-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex-shrink-0 mt-1">
              {event.icon}
            </div>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 flex-grow shadow-xl">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-semibold text-pink-400">{event.title}</h2>
                <span className="text-sm text-white">{event.year}</span>
              </div>
              <p className="text-lg mb-2 text-gray-300">{event.description}</p>
              <p className="text-white">{event.details}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.section 
        className="mt-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-pink-400">Certification</h2>
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 flex items-center space-x-4 shadow-xl">
          <Award className="w-12 h-12 text-purple-400" />
          <div>
            <h3 className="text-xl font-semibold text-pink-400">IEEE Associate Software Developer Certification</h3>
            <p className="text-white">Obtained in 2024</p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

