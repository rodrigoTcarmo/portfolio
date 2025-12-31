import { Code2, Database, Cloud, Terminal, GitBranch, Package } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["Python", "Java", "Go", "TypeScript", "C++", "Rust"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "MySQL"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    icon: Terminal,
    title: "Backend Frameworks",
    skills: ["Node.js", "Django", "Spring Boot", "FastAPI", "Express"],
  },
  {
    icon: GitBranch,
    title: "Architecture",
    skills: ["Microservices", "REST APIs", "GraphQL", "Event-Driven", "CQRS"],
  },
  {
    icon: Package,
    title: "Tools",
    skills: ["Git", "Kafka", "RabbitMQ", "Nginx", "Grafana", "Prometheus"],
  },
];

export function Skills() {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-white">
          Technical Skills
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Technologies and tools I master to build robust and scalable systems
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:shadow-green-500/20 transition-all border border-slate-700 hover:border-green-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-green-500/20 hover:text-green-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}