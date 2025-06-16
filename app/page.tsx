import { Mail, Linkedin } from "lucide-react"
import { Analytics } from "@vercel/analytics/next"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      <Analytics />
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-4xl font-light mb-2 text-black">Parth Gujare</h1>
          <br />
          {/* <p className="text-xl text-gray-600 mb-6">Growth & Product Management at Ramp</p> */}
          <p className="text-gray-700 leading-relaxed">
            I have fun when I'm learning new things and working on hard problems. Want to build and invest in things with interesting people and ideas.
            <br />
            <span className="font-medium text-black">Based in New York, NY.</span>
          </p>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-light mb-8 text-black">Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium text-black">Product Manager, Growth</h3>
                <span className="text-sm text-gray-500">2024 - Present</span>
              </div>
              <p className="text-gray-600 mb-2">Ramp</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Building tools to help Ramp acquire more customers
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium text-black">Associate Consultant</h3>
                <span className="text-sm text-gray-500">2022 - 2024</span>
              </div>
              <p className="text-gray-600 mb-2">Bain & Company</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Learned how to be a generalist. Spent a lot of time in the Private Equity Group, analyzing potential investments across different industries.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium text-black">Investment Banking</h3>
                <span className="text-sm text-gray-500">2021 - 2021</span>
              </div>
              <p className="text-gray-600 mb-2">Jefferies</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Did a lot of financial modeling and valuation. Can use excel without a mouse.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-2xl font-light mb-8 text-black">Education</h2>
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-lg font-medium text-black">University of North Carolina at Chapel Hill</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              B.S. in Business Administration
              <br />
              B.A. in Computer Science
            </p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-light mb-6 text-black">Contact</h2>
          <div className="flex gap-6">
            <Link
              href="mailto:parth.gujare@example.com"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
            >
              <Mail className="h-4 w-4" />
              Email
            </Link>
            <Link
              href="https://linkedin.com/in/parthgujare"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
