const TechStack = () => {
    const techCategories = [
        {
            title: 'Frontend',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
        },
        {
            title: 'Backend',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
            technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'MySQL', 'REST APIs']
        },
        {
            title: 'Herramientas',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            technologies: ['Git', 'GitHub', 'Docker', 'AWS', 'Vite', 'Webpack', 'npm']
        }
    ]

    return (
        <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Stack <span className="text-gradient">Tecnológico</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Tecnologías y herramientas que domino para crear soluciones completas
                    </p>
                </div>

                {/* Tech Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                        >
                            {/* Category Icon & Title */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Technologies List */}
                            <div className="flex flex-wrap gap-2">
                                {category.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-4 py-2 bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStack
