import { GraduationCap, Award, Globe, MapPin, Calendar } from "lucide-react";

interface EducationItem {
    title: string;
    institution: string;
    location: string;
    year: string;
    grade?: string;
    icon: typeof GraduationCap;
    featured?: boolean;
}

const educationItems: EducationItem[] = [
    {
        icon: GraduationCap,
        title: "Bachelor's Degree in Information Systems",
        institution: "University Estácio de Sá",
        location: "Rio de Janeiro, RJ - Brazil",
        year: "2020",
        featured: true,
    },
    {
        icon: Award,
        title: "Kubernetes Administrator Course (CKA Preparation)",
        institution: "Udemy",
        location: "Online",
        year: "2024",
    },
    {
        icon: Award,
        title: "Linux Systems Administrator",
        institution: "4Linux",
        location: "Online",
        year: "2021",
    },
    {
        icon: Award,
        title: "Python Programming Course",
        institution: "Alura",
        location: "Online",
        year: "2020",
    },
    {
        icon: Award,
        title: "Network Administrator Course",
        institution: "Udemy",
        location: "Online",
        year: "2016",
    },
    {
        icon: Globe,
        title: "English Language Exchange – Canada",
        institution: "Kaplan International English",
        location: "Toronto, ON",
        year: "2017",
    },
    {
        icon: Globe,
        title: "English Language Exchange – United States",
        institution: "Kaplan International English",
        location: "Miami, FL",
        year: "2015",
    },
];

export function Education() {
    const featuredItem = educationItems.find(item => item.featured);
    const otherItems = educationItems.filter(item => !item.featured);

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-black from-slate-950 via-slate-900 to-slate-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-center mb-4 text-white font-bold">
                    Education & Certifications
                </h2>
                <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
                    My academic background and continuous learning journey
                </p>

                {/* Featured Education - Bachelor's Degree */}
                {featuredItem && (
                    <div className="mb-6">
                        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 border-2 border-orange-500/50 shadow-xl shadow-orange-500/10 overflow-hidden">
                            {/* Background gradient decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                                <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-500/30 flex-shrink-0">
                                    <GraduationCap className="w-8 h-8 text-orange-500" />
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">
                                            Featured
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                        {featuredItem.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm text-slate-300">
                                        <span className="font-medium">{featuredItem.institution}</span>
                                        <span className="text-slate-600 hidden sm:block">•</span>
                                        <span className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4 text-slate-500" />
                                            {featuredItem.location}
                                        </span>
                                        <span className="text-slate-600 hidden sm:block">•</span>
                                        <span className="flex items-center gap-1.5 text-orange-400 font-medium">
                                            <Calendar className="w-4 h-4" />
                                            {featuredItem.year}
                                        </span>
                                        {featuredItem.grade && (
                                            <>
                                                <span className="text-slate-600 hidden sm:block">•</span>
                                                <span className="text-orange-400 font-semibold">
                                                    {featuredItem.grade}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Other Education Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {otherItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-orange-500/30 transition-all hover:shadow-lg hover:shadow-orange-500/10 group"
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center border border-orange-500/20 flex-shrink-0">
                                        <Icon className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="space-y-1.5 text-xs text-slate-400">
                                    <div className="font-medium text-slate-300">
                                        {item.institution}
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3 text-slate-500" />
                                            {item.location}
                                        </span>
                                        <span className="flex items-center gap-1 text-orange-400 font-medium">
                                            <Calendar className="w-3 h-3" />
                                            {item.year}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
