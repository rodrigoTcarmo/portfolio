import { Cloud, Code, Activity, Database } from "lucide-react";

const skillCategories = [
  {
    icon: Cloud,
    title: "Cloud-Native & Platform Engineering",
    primary: ["Kubernetes", "Docker", "AWS", "Azure"],
    secondary: ["Terraform", "GitOps", "CI/CD", "Jenkins", "Tekton"],
    expertise: ["Cluster architecture", "Scalability", "Cost optimization", "Reliability"],
  },
  {
    icon: Code,
    title: "Backend & Distributed Systems",
    primary: ["Go", "Python"],
    secondary: ["REST APIs", "Microservices", "Event-driven systems"],
    expertise: ["SQS", "SNS", "RabbitMQ"],
  },
  {
    icon: Activity,
    title: "Observability & Reliability",
    primary: ["Prometheus", "Grafana", "CloudWatch", "Dynatrace"],
    secondary: ["Monitoring", "Alerting", "Logging", "Tracing"],
    expertise: ["Performance analysis", "Predictive analysis", "Cost optimization"],
  },
  {
    icon: Database,
    title: "Data & Persistence",
    primary: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch"],
    secondary: ["S3", "DynamoDB", "Redis", "EFS"],
    expertise: ["Data modeling", "Indexing", "Sharding", "Replication"],
  },
];

export function Skills() {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-white font-bold">
          Technical Skills
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Core competencies and technologies I use to build robust, scalable systems
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                {/* Header */}
                <div className="relative flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Primary Skills - Most prominent */}
                {category.primary.length > 0 && (
                  <div className="relative mb-4">
                    <div className="flex flex-wrap gap-2">
                      {category.primary.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 bg-orange-500/15 text-orange-400 rounded-lg text-sm font-medium border border-orange-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Secondary Skills - Supporting technologies */}
                {category.secondary.length > 0 && (
                  <div className="relative mb-4">
                    <div className="flex flex-wrap gap-2">
                      {category.secondary.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 bg-slate-700/50 text-slate-300 rounded-lg text-sm border border-slate-600/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expertise Areas - Conceptual skills */}
                {category.expertise.length > 0 && (
                  <div className="relative pt-4 border-t border-slate-700/50">
                    <div className="flex flex-wrap gap-2">
                      {category.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-sm text-slate-400 flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}