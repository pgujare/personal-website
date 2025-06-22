import { Mail, Linkedin, Twitter, Github, ExternalLink, MapPin, Zap, ChefHat, Circle, Music, Dumbbell, Coffee, Building2, TrendingUp, Calculator } from "lucide-react"
import { Analytics } from "@vercel/analytics/next"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Parth Gujare",
  description: "Parth Gujare's personal website",
}

export default function Component() {
  return (
    <div className="min-h-screen bg-white" style={{
      backgroundImage: `radial-gradient(circle, #e5e7eb 1px, transparent 1px)`,
      backgroundSize: '20px 20px'
    }}>
      <Analytics />
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-20">
          <h1 className="text-4xl font-semibold mb-4 text-black tracking-tight leading-tight">Parth Gujare</h1>
          <div className="space-y-4">
            <p className="text-lg text-gray-600 leading-relaxed">
              I have fun when I&apos;m learning new things and working on hard problems. Want to build and invest in things with interesting people and ideas.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm">
                <MapPin className="h-4 w-4 text-gray-500 transition-all duration-200 group-hover:text-gray-700 group-hover:scale-110" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors duration-200 tracking-wide">
                  Based in New York, NY
                </span>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-orange-50 hover:bg-orange-100 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm">
                <Zap className="h-4 w-4 text-orange-500 transition-all duration-200 group-hover:text-orange-600 group-hover:scale-110" />
                <span className="text-sm font-medium text-orange-700 group-hover:text-orange-800 transition-colors duration-200 tracking-wide">
                  Texas Football
                </span>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm">
                <ChefHat className="h-4 w-4 text-red-500 transition-all duration-200 group-hover:text-red-600 group-hover:scale-110" />
                <span className="text-sm font-medium text-red-700 group-hover:text-red-800 transition-colors duration-200 tracking-wide">
                  BBQ Enthusiast
                </span>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm">
                <Circle className="h-4 w-4 text-blue-500 transition-all duration-200 group-hover:text-blue-600 group-hover:scale-110" />
                <span className="text-sm font-medium text-blue-700 group-hover:text-blue-800 transition-colors duration-200 tracking-wide">
                  Carolina Basketball
                </span>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm">
                <Music className="h-4 w-4 text-purple-500 transition-all duration-200 group-hover:text-purple-600 group-hover:scale-110" />
                <span className="text-sm font-medium text-purple-700 group-hover:text-purple-800 transition-colors duration-200 tracking-wide">
                  Bollywood Music
                </span>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-green-50 hover:bg-green-100 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm">
                <Dumbbell className="h-4 w-4 text-green-500 transition-all duration-200 group-hover:text-green-600 group-hover:scale-110" />
                <span className="text-sm font-medium text-green-700 group-hover:text-green-800 transition-colors duration-200 tracking-wide">
                  Barry's
                </span>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-amber-50 hover:bg-amber-100 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm">
                <Coffee className="h-4 w-4 text-amber-600 transition-all duration-200 group-hover:text-amber-700 group-hover:scale-110" />
                <span className="text-sm font-medium text-amber-800 group-hover:text-amber-900 transition-colors duration-200 tracking-wide">
                  Coffee
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-black">Experience</h2>
          <div className="space-y-8">
            <div className="group hover:bg-gray-50 hover:shadow-sm rounded-lg p-4 -m-4 transition-all duration-300 ease-in-out cursor-default">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-medium text-black group-hover:text-gray-900 transition-colors duration-200">Product Manager, Growth</h3>
                <span className="text-sm font-medium text-gray-500 tracking-wide">2024 - Present</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-gray-500" />
                <Link 
                  href="https://ramp.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 group-hover:text-gray-700 transition-all duration-200 hover:bg-yellow-200 px-1 -mx-1 rounded"
                >
                  Ramp
                </Link>
              </div>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-200 text-sm">
                Building tools to help Ramp acquire more customers
              </p>
            </div>

            <div className="group hover:bg-gray-50 hover:shadow-sm rounded-lg p-4 -m-4 transition-all duration-300 ease-in-out cursor-default">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-medium text-black group-hover:text-gray-900 transition-colors duration-200">Associate Consultant</h3>
                <span className="text-sm font-medium text-gray-500 tracking-wide">2022 - 2024</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-4 w-4 text-gray-500" />
                <Link 
                  href="https://bain.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 group-hover:text-gray-700 transition-all duration-200 hover:bg-red-100 px-1 -mx-1 rounded"
                >
                  Bain & Company
                </Link>
              </div>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-200 text-sm">
                Learned how to be a generalist. Spent a lot of time in the Private Equity Group, analyzing potential investments across different industries.
              </p>
            </div>

            <div className="group hover:bg-gray-50 hover:shadow-sm rounded-lg p-4 -m-4 transition-all duration-300 ease-in-out cursor-default">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-medium text-black group-hover:text-gray-900 transition-colors duration-200">Investment Banking</h3>
                <span className="text-sm font-medium text-gray-500 tracking-wide">2021</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="h-4 w-4 text-gray-500" />
                <Link 
                  href="https://jefferies.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 group-hover:text-gray-700 transition-all duration-200 hover:bg-gray-200 px-1 -mx-1 rounded"
                >
                  Jefferies
                </Link>
              </div>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-200 text-sm">
                Did a lot of financial modeling and valuation. Can use excel without a mouse.
              </p>
            </div>
          </div>
        </div>

        {/* Learning & Building */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-black">Learning & Building</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Moving from spreadsheets and presentations to actually building things. Figuring out how to turn AI models into useful products that solve real problems.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <Link
                  href="https://github.com/pgujare"
                  className="flex items-center gap-2 text-gray-700 hover:text-black transition-all duration-200 hover:translate-x-1 font-medium text-base mb-6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 transition-transform duration-200 hover:scale-110" />
                  Follow my coding journey on GitHub
                </Link>
              </div>
              
              <div className="group hover:bg-gray-50 hover:shadow-sm rounded-lg p-4 -m-4 transition-all duration-300 ease-in-out cursor-default">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-medium text-black group-hover:text-gray-900 transition-colors duration-200">This Website</h3>
                  <ExternalLink className="h-5 w-5 text-gray-500 group-hover:text-gray-600 transition-colors duration-200" />
                </div>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-200 text-sm">
                  My first coding project - built with Next.js, TypeScript, and Tailwind CSS. Learning by building.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-black">Education</h2>
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-lg font-medium text-black">University of North Carolina at Chapel Hill</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm mt-2">
              B.S. in Business Administration<br />
              B.A. in Computer Science
            </p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-black">Contact</h2>
          <div className="flex gap-6">
            <Link
              href="https://x.com/parthgujare_"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-all duration-200 hover:translate-y-[-2px] font-medium text-base"
            >
              <Twitter className="h-4 w-4 transition-transform duration-200 hover:scale-110" />
              X
            </Link>
            <Link
              href="https://linkedin.com/in/parthgujare"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-all duration-200 hover:translate-y-[-2px] font-medium text-base"
            >
              <Linkedin className="h-4 w-4 transition-transform duration-200 hover:scale-110" />
              LinkedIn
            </Link>
            <Link
              href="mailto:parthgujare10@gmail.com"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-all duration-200 hover:translate-y-[-2px] font-medium text-base"
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
