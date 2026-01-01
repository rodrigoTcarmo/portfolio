import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Nankion",
    status: "Done",
    description: "A Go CLI tool that parses OFX (Open Financial Exchange) bank statements and syncs them to Notion databases. Perfect for personal finance tracking and automating bank statement management.",
    tech: ["Go", "Notion API", "OFX", "CLI"],
    image: "https://thetechblink.com/wp-content/uploads/2025/06/notion_logo.jpg",
    github: "https://github.com/rodrigoTcarmo/nankion",
  },
  {
    title: "ForgedCat",
    status: "In Progress",
    description: "A modular and scalable CI/CD platform integrated with GitHub and built on Tekton Pipelines.",
    tech: ["Go", "Kubernetes", "CI/CD", "Tekton", "GitHub API"],
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*wo3QT530IgEeB2RFYFU_aQ.png",
    github: "https://github.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-white">
          Featured Projects
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Some of the main projects I've developed
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-orange-500/20 transition-all group border border-slate-800 hover:border-orange-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl text-white">
                    {project.title}
                  </h3>
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                  <span
                    className={`px-3 py-1 rounded-full text-sm border ${project.status === "Done"
                      ? "bg-green-500/10 text-green-400 border-green-500/20"
                      : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-slate-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm border border-orange-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-orange-500 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}