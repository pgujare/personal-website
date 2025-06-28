"use client"

import { Mail, Linkedin, Twitter, Github, ExternalLink, MapPin, Zap, ChefHat, Circle, Music, Dumbbell, Coffee, Moon, Sun } from "lucide-react"
import { Analytics } from "@vercel/analytics/next"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Component() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(saved ? JSON.parse(saved) : prefersDark)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark))
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`} style={{
      backgroundImage: `radial-gradient(circle, ${isDark ? '#374151' : '#e5e7eb'} 1px, transparent 1px)`,
      backgroundSize: '20px 20px'
    }}>
      <Analytics />
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Dark Mode Toggle */}
        <div className="fixed top-6 right-6 z-10">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 group cursor-pointer shadow-sm ${
              isDark 
                ? 'bg-gray-800 hover:bg-gray-700 border border-gray-600' 
                : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 text-yellow-400`} />
            ) : (
              <Moon className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 text-gray-600`} />
            )}
            <span className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
              isDark ? 'text-gray-200 group-hover:text-white' : 'text-gray-700 group-hover:text-black'
            }`}>
              {isDark ? 'Light' : 'Dark'}
            </span>
          </button>
        </div>
        {/* Hero */}
        <div className="mb-20">
          <h1 className={`text-4xl font-semibold mb-4 tracking-tight leading-tight transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}>Hi, I&apos;m Parth Gujare 👋</h1>
          <div className="space-y-4">
            <p className={`text-lg leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I have fun when I&apos;m learning new things and working on hard problems. Want to build and invest in things with interesting people and ideas.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <MapPin className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 ${
                  isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-700'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                  isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-black'
                }`}>
                  Based in New York, NY
                </span>
              </div>
              
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm ${
                isDark ? 'bg-orange-900/30 hover:bg-orange-900/40' : 'bg-orange-50 hover:bg-orange-100'
              }`}>
                <Zap className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 ${
                  isDark ? 'text-orange-400 group-hover:text-orange-300' : 'text-orange-500 group-hover:text-orange-600'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                  isDark ? 'text-orange-300 group-hover:text-orange-200' : 'text-orange-700 group-hover:text-orange-800'
                }`}>
                  Texas Football
                </span>
              </div>
              
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm ${
                isDark ? 'bg-red-900/30 hover:bg-red-900/40' : 'bg-red-50 hover:bg-red-100'
              }`}>
                <ChefHat className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 ${
                  isDark ? 'text-red-400 group-hover:text-red-300' : 'text-red-500 group-hover:text-red-600'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                  isDark ? 'text-red-300 group-hover:text-red-200' : 'text-red-700 group-hover:text-red-800'
                }`}>
                  BBQ Enthusiast
                </span>
              </div>
              
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm ${
                isDark ? 'bg-blue-900/30 hover:bg-blue-900/40' : 'bg-blue-50 hover:bg-blue-100'
              }`}>
                <Circle className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 ${
                  isDark ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-500 group-hover:text-blue-600'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                  isDark ? 'text-blue-300 group-hover:text-blue-200' : 'text-blue-700 group-hover:text-blue-800'
                }`}>
                  Carolina Basketball
                </span>
              </div>
              
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm ${
                isDark ? 'bg-purple-900/30 hover:bg-purple-900/40' : 'bg-purple-50 hover:bg-purple-100'
              }`}>
                <Music className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 ${
                  isDark ? 'text-purple-400 group-hover:text-purple-300' : 'text-purple-500 group-hover:text-purple-600'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                  isDark ? 'text-purple-300 group-hover:text-purple-200' : 'text-purple-700 group-hover:text-purple-800'
                }`}>
                  Bollywood Music
                </span>
              </div>
              
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm ${
                isDark ? 'bg-green-900/30 hover:bg-green-900/40' : 'bg-green-50 hover:bg-green-100'
              }`}>
                <Dumbbell className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 ${
                  isDark ? 'text-green-400 group-hover:text-green-300' : 'text-green-500 group-hover:text-green-600'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                  isDark ? 'text-green-300 group-hover:text-green-200' : 'text-green-700 group-hover:text-green-800'
                }`}>
                  Barry&apos;s
                </span>
              </div>
              
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm ${
                isDark ? 'bg-amber-900/30 hover:bg-amber-900/40' : 'bg-amber-50 hover:bg-amber-100'
              }`}>
                <Coffee className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 ${
                  isDark ? 'text-amber-400 group-hover:text-amber-300' : 'text-amber-600 group-hover:text-amber-700'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                  isDark ? 'text-amber-300 group-hover:text-amber-200' : 'text-amber-800 group-hover:text-amber-900'
                }`}>
                  Coffee
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <h2 className={`text-2xl font-semibold mb-8 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}>Experience</h2>
          <div className="space-y-12">
            <div className={`group rounded-lg p-4 -m-4 transition-all duration-300 ease-in-out cursor-default ${
              isDark ? 'hover:bg-gray-800 hover:shadow-sm' : 'hover:bg-gray-50 hover:shadow-sm'
            }`}>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className={`text-lg font-medium transition-colors duration-200 ${
                  isDark ? 'text-white group-hover:text-gray-100' : 'text-black group-hover:text-gray-900'
                }`}>Product Manager, Growth</h3>
                <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>2024 - Present</span>
              </div>
              <div className="mb-2">
                <Link 
                  href="https://ramp.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-all duration-200 px-1 -mx-1 rounded ${
                    isDark 
                      ? 'text-gray-300 group-hover:text-gray-200 hover:bg-yellow-900' 
                      : 'text-gray-600 group-hover:text-gray-700 hover:bg-yellow-200'
                  }`}
                >
                  Ramp
                </Link>
              </div>
              <p className={`leading-relaxed transition-colors duration-200 text-sm ${
                isDark ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-700 group-hover:text-gray-800'
              }`}>
                Building tools to help Ramp acquire more customers
              </p>
            </div>

            <div className={`group rounded-lg p-4 -m-4 transition-all duration-300 ease-in-out cursor-default ${
              isDark ? 'hover:bg-gray-800 hover:shadow-sm' : 'hover:bg-gray-50 hover:shadow-sm'
            }`}>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className={`text-lg font-medium transition-colors duration-200 ${
                  isDark ? 'text-white group-hover:text-gray-100' : 'text-black group-hover:text-gray-900'
                }`}>Associate Consultant</h3>
                <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>2022 - 2024</span>
              </div>
              <div className="mb-2">
                <Link 
                  href="https://bain.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-all duration-200 px-1 -mx-1 rounded ${
                    isDark 
                      ? 'text-gray-300 group-hover:text-gray-200 hover:bg-red-900' 
                      : 'text-gray-600 group-hover:text-gray-700 hover:bg-red-100'
                  }`}
                >
                  Bain & Company
                </Link>
              </div>
              <p className={`leading-relaxed transition-colors duration-200 text-sm ${
                isDark ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-700 group-hover:text-gray-800'
              }`}>
                Learned how to be a generalist. Spent a lot of time in the Private Equity Group, analyzing potential investments across different industries.
              </p>
            </div>

            <div className={`group rounded-lg p-4 -m-4 transition-all duration-300 ease-in-out cursor-default ${
              isDark ? 'hover:bg-gray-800 hover:shadow-sm' : 'hover:bg-gray-50 hover:shadow-sm'
            }`}>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className={`text-lg font-medium transition-colors duration-200 ${
                  isDark ? 'text-white group-hover:text-gray-100' : 'text-black group-hover:text-gray-900'
                }`}>Investment Banking</h3>
                <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>2021</span>
              </div>
              <div className="mb-2">
                <Link 
                  href="https://jefferies.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-all duration-200 px-1 -mx-1 rounded ${
                    isDark 
                      ? 'text-gray-300 group-hover:text-gray-200 hover:bg-gray-700' 
                      : 'text-gray-600 group-hover:text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Jefferies
                </Link>
              </div>
              <p className={`leading-relaxed transition-colors duration-200 text-sm ${
                isDark ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-700 group-hover:text-gray-800'
              }`}>
                Did a lot of financial modeling and valuation. Can use excel without a mouse.
              </p>
            </div>
          </div>
        </div>

        {/* Learning & Building */}
        <div className="mb-20">
          <h2 className={`text-2xl font-semibold mb-8 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}>Learning & Building</h2>
          <div className="space-y-8">
            <div>
              <p className={`leading-relaxed mb-6 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Moving from spreadsheets and presentations to actually building things. Figuring out how to turn AI models into useful products that solve real problems.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <Link
                  href="https://github.com/pgujare"
                  className={`flex items-center gap-2 transition-all duration-200 hover:translate-x-1 font-medium text-base mb-6 ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 transition-transform duration-200 hover:scale-110" />
                  Follow my coding journey on GitHub
                </Link>
              </div>
              
              <div className={`group rounded-lg p-4 -m-4 transition-all duration-300 ease-in-out cursor-default ${
              isDark ? 'hover:bg-gray-800 hover:shadow-sm' : 'hover:bg-gray-50 hover:shadow-sm'
            }`}>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className={`text-lg font-medium transition-colors duration-200 ${
                    isDark ? 'text-white group-hover:text-gray-100' : 'text-black group-hover:text-gray-900'
                  }`}>This Website</h3>
                  <ExternalLink className={`h-5 w-5 transition-colors duration-200 ${
                    isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-600'
                  }`} />
                </div>
                <p className={`leading-relaxed transition-colors duration-200 text-sm ${
                isDark ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-700 group-hover:text-gray-800'
              }`}>
                  My first coding project - built with Next.js, TypeScript, and Tailwind CSS. Learning by building.
                </p>
              </div>
              
              <div className="pt-4">
                <p className={`text-sm italic transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  More projects coming soon as I continue learning and building...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h2 className={`text-2xl font-semibold mb-8 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}>Education</h2>
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <Link 
                href="https://unc.edu" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-lg font-medium px-1 -mx-1 rounded transition-all duration-200 ${
                  isDark ? 'text-white hover:bg-blue-900' : 'text-black hover:bg-blue-200'
                }`}
              >
                University of North Carolina at Chapel Hill
              </Link>
            </div>
            <p className={`leading-relaxed text-sm mt-2 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              B.S. in Business Administration<br />
              B.A. in Computer Science
            </p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className={`text-2xl font-semibold mb-8 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}>Contact</h2>
          <div className="flex gap-6">
            <Link
              href="https://x.com/parthgujare_"
              className={`flex items-center gap-2 transition-all duration-200 hover:translate-y-[-2px] font-medium text-base ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              <Twitter className="h-4 w-4 transition-transform duration-200 hover:scale-110" />
              X
            </Link>
            <Link
              href="https://linkedin.com/in/parthgujare"
              className={`flex items-center gap-2 transition-all duration-200 hover:translate-y-[-2px] font-medium text-base ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              <Linkedin className="h-4 w-4 transition-transform duration-200 hover:scale-110" />
              LinkedIn
            </Link>
            <Link
              href="mailto:parthgujare10@gmail.com"
              className={`flex items-center gap-2 transition-all duration-200 hover:translate-y-[-2px] font-medium text-base ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              <Mail className="h-4 w-4 transition-transform duration-200 hover:scale-110" />
              Email
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
