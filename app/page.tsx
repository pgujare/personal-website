import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-4xl font-light mb-2">Parth Gujare</h1>
          <p className="text-xl text-gray-600 mb-6">Product Manager at Ramp</p>
          <p className="text-gray-700 leading-relaxed">
            Building financial products that help businesses grow. Previously at Bain & Company and investment banking.
            Passionate about startups and solving complex problems.{" "}
            <span className="font-medium">Currently in New York, NY.</span>
          </p>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-light mb-8">Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium">Product Manager</h3>
                <span className="text-sm text-gray-500">Present</span>
              </div>
              <p className="text-gray-600 mb-2">Ramp</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Leading product development for financial infrastructure solutions
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium">Strategy Consultant</h3>
                <span className="text-sm text-gray-500">2020–2023</span>
              </div>
              <p className="text-gray-600 mb-2">Bain & Company</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Advised Fortune 500 companies on strategic initiatives and digital transformation
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium">Investment Banking Analyst</h3>
                <span className="text-sm text-gray-500">2018–2020</span>
              </div>
              <p className="text-gray-600 mb-2">Jefferies</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Executed M&A transactions and capital raising for mid-market companies
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-2xl font-light mb-8">Education</h2>
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-lg font-medium">University of North Carolina at Chapel Hill</h3>
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
          <h2 className="text-2xl font-light mb-6">Contact</h2>
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
