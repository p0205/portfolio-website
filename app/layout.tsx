import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Phoebe Kiew Jing Yao - Portfolio',
  description: 'Computer Science student specializing in Software Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white`}>
        <div className="flex flex-col min-h-screen">
          <nav className="bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg text-white p-4 sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold hover:scale-105 transition-transform">
                Phoebe Kiew
              </h1>
              <ul className="flex space-x-4">
                {['Home', 'About', 'Projects', 'Education', 'Skills'].map((item) => (
                  <li key={item} className="hover:scale-105 transition-transform">
                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-pink-400 transition duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

