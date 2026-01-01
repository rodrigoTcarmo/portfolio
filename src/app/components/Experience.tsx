import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Nubank",
    period: "2022 - Present",
    description: "Working on large-scale cloud-native platforms using Go, Kubernetes, and AWS. I contribute to the design and operation of high-throughput EKS clusters and CI/CD platforms, focusing on scalability, reliability, cost optimization, and observability through infrastructure as code and GitOps practices.",
    skills: [
      "Go",
      "Kubernetes",
      "AWS",
      "Terraform",
      "Prometheus",
    ],

  },
  {
    role: "Site Reliability Engineer (SRE)",
    company: "Pag Seguro (UOL Group)",
    period: "2021 - 2022",
    description: "Worked on the PagSeguro brokerage platform, developing scalable backend microservices in Python and architecting cloud-native Kubernetes infrastructure on AWS.",
    skills: [
      "Python",
      "Kubernetes",
      "AWS",
      "Terraform",
      "Jenkins",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Ativa Investimentos",
    period: "2019 - 2021",
    description: "Developed and deployed backend automations using Python and Docker, created Azure CI/CD pipelines, and implemented monitoring using Dynatrace. Hands-on experience operating hybrid infrastructure, from VMware-based Windows Server data centers to cloud environments.",
    skills: [
      "Python",
      "Docker",
      "Azure",
      "Dynatrace",
      "Linux",
    ],
  },
  {
    role: "IT Support Technician",
    company: "Ativa Investimentos",
    period: "2017 - 2019",
    description: "Worked as an IT Support Technician, providing end-user and infrastructure support across multiple offices. Supported 300+ workstations, handled hardware, software, and network issues, and improved asset inventory and documentation. Also assisted with user account management and access control in enterprise environments.",
    skills: [
      "Linux",
      "Windows Server",
      "Active Directory",
      "Cisco",
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
                    <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? "md:items-end" : ""}`}>
                      <div className="flex items-center gap-2 text-orange-400">
                        <Briefcase className="w-5 h-5" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className={`flex flex-wrap gap-1.5 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-0.5 bg-orange-500/10 text-orange-300 rounded text-xs border border-orange-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-400 mb-4">
                      {exp.description}
                    </p>

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