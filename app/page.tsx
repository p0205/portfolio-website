'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Mail, Phone, Code, BookOpen, Briefcase, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-16"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Phoebe Kiew Jing Yao
            </h1>
            <p className="text-2xl font-light">Computer Science Student | Software Developer</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-64 h-64 mx-auto mb-12"
          >
            <Image
              src="/placeholder.svg"
              alt="Phoebe Kiew Jing Yao"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-pink-500 shadow-lg"
            />
            <motion.div
              className="absolute -bottom-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Code className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: <Github className="w-6 h-6" />, text: "GitHub", link: "https://github.com/p0205" },
              { icon: <Mail className="w-6 h-6" />, text: "kks741224@gmail.com" },
              { icon: <Phone className="w-6 h-6" />, text: "+60198310723" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full px-6 py-3 shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.p 
            className="text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Passionate Computer Science student at Universiti Teknikal Malaysia Melaka, specializing in Software Development. Combining strong academic performance with practical skills to create innovative solutions.
          </motion.p>

          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link href="/projects" passHref>
              <motion.a
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg flex items-center space-x-2"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="w-6 h-6" />
                <span>View Projects</span>
              </motion.a>
            </Link>
            <Link href="/about#contact" passHref>
              <motion.a
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg flex items-center space-x-2"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-6 h-6" />
                <span>Contact Me</span>
              </motion.a>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowMore(!showMore)}
              className="text-white flex items-center mx-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="mr-2">Learn More</span>
              <motion.div
                animate={{ rotate: showMore ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown />
              </motion.div>
            </motion.button>
          </motion.div>

          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: <BookOpen className="w-12 h-12 text-pink-400" />, title: "Education", description: "Bachelor in Computer Science" },
                    { icon: <Code className="w-12 h-12 text-purple-400" />, title: "Skills", description: "Java, C++, Flutter, SQL" },
                    { icon: <Briefcase className="w-12 h-12 text-indigo-400" />, title: "Projects", description: "Health Apps, Management Systems" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                    >
                      {item.icon}
                      <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
                      <p className="text-white text-opacity-80">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

