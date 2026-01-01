"use client";

import profilePic from '@/assets/profile_pic.jpeg';
import cv from '@/assets/Rodrigo Carmo - Senior Software Engineer.pdf';
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function Hero() {
  const scrollToExperience = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              Hi! I'm Rodrigo Carmo, a Senior Software Engineer with 9 years of professional experience. I specialize in backend development with Go and Python, as well as cloud-native infrastructure and platform engineering using Kubernetes, Docker, AWS, Azure, and Terraform.
            </p>

            {/* Social Media & CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://github.com/rodrigoTcarmo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-orange-600 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rodrigotcarmo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-orange-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:rod.carmo@outlook.com"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-orange-600 transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="#experience"
                onClick={scrollToExperience}
                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                View Experience
              </a>
              <a
                href={cv}
                download="Rodrigo Carmo - Senior Software Engineer.pdf"
                className="px-6 py-3 border border-slate-600 hover:border-orange-500 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>

            {/* Career Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {[
                { value: "28", label: "Age" },
                { value: "9", label: "Years of Experience" },
                { value: "1k+", label: "GitHub Contributions" },
                { value: "2+", label: "Personal Projects" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:-translate-y-1 hover:scale-105 hover:bg-slate-800 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 cursor-default group"
                >
                  <div className="text-3xl text-orange-400 mb-1 group-hover:text-orange-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
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