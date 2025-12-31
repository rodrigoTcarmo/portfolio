import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-4 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-4">
          Let's Talk?
        </h2>
        <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, opportunities or 
          simply exchanging ideas about technology and software architecture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:seu.email@exemplo.com"
            className="flex items-center gap-4 p-6 bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors border border-slate-800 hover:border-green-500"
          >
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/20">
              <Mail className="w-6 h-6 text-green-500" />
            </div>
            <div className="text-left">
              <div className="text-sm text-slate-400">Email</div>
              <div>seu.email@exemplo.com</div>
            </div>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors border border-slate-800 hover:border-green-500"
          >
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/20">
              <Linkedin className="w-6 h-6 text-green-500" />
            </div>
            <div className="text-left">
              <div className="text-sm text-slate-400">LinkedIn</div>
              <div>/in/seu-perfil</div>
            </div>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors border border-slate-800 hover:border-green-500"
          >
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/20">
              <Github className="w-6 h-6 text-green-500" />
            </div>
            <div className="text-left">
              <div className="text-sm text-slate-400">GitHub</div>
              <div>@seu-usuario</div>
            </div>
          </a>

          <div className="flex items-center gap-4 p-6 bg-slate-900 rounded-xl border border-slate-800">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/20">
              <MapPin className="w-6 h-6 text-green-500" />
            </div>
            <div className="text-left">
              <div className="text-sm text-slate-400">Location</div>
              <div>San Francisco, CA</div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <p className="text-slate-400">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}