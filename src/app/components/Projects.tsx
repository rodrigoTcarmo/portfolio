import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Scalable E-commerce API",
    description: "Complete backend system for e-commerce with microservices, payment processing, inventory management and recommendation system. Supports over 10k requests per second.",
    tech: ["Go", "PostgreSQL", "Redis", "Kafka", "Docker"],
    image: "https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwY29kZSUyMHNlcnZlcnxlbnwxfHx8fDE3NjcwNjAwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Real-Time Analytics Platform",
    description: "Real-time data processing system with ETL pipelines, aggregations and visualizations. Processes millions of events daily with sub-second latency.",
    tech: ["Python", "Apache Spark", "Elasticsearch", "AWS", "Airflow"],
    image: "https://images.unsplash.com/photo-1647098111478-fe6aaaf0bcf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY3MDYwMDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "API Gateway & Auth Service",
    description: "Centralized gateway for API management with rate limiting, JWT authentication, OAuth2, and monitoring. Includes granular role-based permissions system.",
    tech: ["Node.js", "TypeScript", "MongoDB", "Redis", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNjcwNTg2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-white">
          Featured Projects
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Some of the main projects I've developed, demonstrating expertise in systems architecture and backend
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-green-500/20 transition-all group border border-slate-800 hover:border-green-500"
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
                <h3 className="text-2xl mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm border border-green-500/20"
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
                    className="flex items-center gap-2 text-slate-300 hover:text-green-500 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-green-500 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
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