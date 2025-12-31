import profilePic from '@/assets/profile_pic.jpeg';
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pb-1 leading-normal bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Rodrigo Carmo
              </h1>
              <p className="text-2xl md:text-3xl text-slate-300 mb-6">
                Senior Software Engineer
              </p>
            </div>

            <p className="text-lg text-slate-400 leading-relaxed">
              Hi! I'm Rodrigo Carmo, a Senior Software Engineer with 8+ years of experience in backend development using Go and Python, and in cloud-native infrastructure and platform engineering with Kubernetes, Docker, AWS, Azure, and Terraform.
            </p>

            {/* Social Media & CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-orange-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-orange-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:seu.email@exemplo.com"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-orange-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <div className="flex gap-4 ml-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  View Projects
                </a>
                <button className="px-6 py-3 border border-slate-600 hover:border-orange-500 rounded-lg transition-colors inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
              </div>
            </div>

            {/* Career Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <div className="text-3xl text-orange-400 mb-1">28</div>
                <div className="text-sm text-slate-400">Age</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <div className="text-3xl text-orange-400 mb-1">8+</div>
                <div className="text-sm text-slate-400">Years of Experience</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <div className="text-3xl text-orange-400 mb-1">1k+</div>
                <div className="text-sm text-slate-400">GitHub Contributions</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <div className="text-3xl text-orange-400 mb-1">5</div>
                <div className="text-sm text-slate-400">Personal Projects</div>
              </div>
            </div>
          </div>

          {/* Right side - Profile Picture */}
          <div className="flex justify-center lg:justify-end bg-[rgba(0,0,0,0)]">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-orange-500 shadow-2xl shadow-orange-500/20">
              <img
                src={profilePic}
                alt="Rodrigo Carmo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}