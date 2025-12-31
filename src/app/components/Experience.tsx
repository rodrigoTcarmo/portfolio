import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Nubank",
    period: "2021 - Present",
    description: "Technical leadership in developing microservices and APIs. Redesigned the main system architecture, resulting in 40% performance improvement. Mentoring a team of 5 developers.",
    achievements: [
      "Implementation of event-driven architecture with Kafka",
      "30% reduction in infrastructure costs",
      "Creation of internal framework for APIs",
    ],
  },
  {
    role: "Software Engineer",
    company: "Digital Innovations",
    period: "2018 - 2021",
    description: "Development of RESTful APIs and GraphQL for web and mobile applications. Implementation of CI/CD pipelines and infrastructure automation.",
    achievements: [
      "Migration from monolith to microservices",
      "Implementation of automated tests (85% coverage)",
      "SQL query optimization with 60% response time reduction",
    ],
  },
  {
    role: "Backend Developer",
    company: "StartUp XYZ",
    period: "2016 - 2018",
    description: "Backend feature development for SaaS platform. Direct work with databases, cache and performance optimization.",
    achievements: [
      "Development of real-time notification system",
      "Implementation of Redis cache",
      "Integration with multiple third-party APIs",
    ],
  },
];

export function Experience() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-white">
          Professional Experience
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          My journey building robust and scalable backend solutions
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-orange-500/20 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-[7px] md:-translate-x-1/2 mt-6 shadow-lg shadow-orange-500/50" />

                {/* Content */}
                <div className="md:w-1/2 pl-8 md:pl-0">
                  <div className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm mb-3 border border-orange-500/20">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <h3 className="text-2xl text-white mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-orange-400 mb-4">
                      <Briefcase className="w-5 h-5" />
                      <span>{exp.company}</span>
                    </div>
                    <p className="text-slate-400 mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-slate-400 text-sm flex items-start gap-2"
                        >
                          <span className="text-orange-500 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}