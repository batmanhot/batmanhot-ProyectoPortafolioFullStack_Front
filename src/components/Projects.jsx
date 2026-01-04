const Projects = () => {
    const projects = [
        {
            title: 'Sistema de Gestión de Servicios',
            description: 'Aplicación full-stack para gestión de servicios técnicos con dashboard administrativo, sistema de usuarios y auditoría completa.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
            github: 'https://github.com/yourusername/project1',
            demo: 'https://demo-project1.com'
        },
        {
            title: 'E-commerce Platform',
            description: 'Plataforma de comercio electrónico con carrito de compras, pasarela de pagos, panel de administración y gestión de inventario.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop',
            technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
            github: 'https://github.com/yourusername/project2',
            demo: 'https://demo-project2.com'
        },
        {
            title: 'Task Management App',
            description: 'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y sistema de prioridades.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
            technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
            github: 'https://github.com/yourusername/project3',
            demo: 'https://demo-project3.com'
        },
        {
            title: 'Weather Dashboard',
            description: 'Dashboard meteorológico con pronósticos extendidos, mapas interactivos y alertas personalizadas usando APIs externas.',
            image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop',
            technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
            github: 'https://github.com/yourusername/project4',
            demo: 'https://demo-project4.com'
        },
        {
            title: 'Blog Platform',
            description: 'Plataforma de blogging con editor de texto enriquecido, sistema de comentarios, categorías y búsqueda avanzada.',
            image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop',
            technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
            github: 'https://github.com/yourusername/project5',
            demo: 'https://demo-project5.com'
        },
        {
            title: 'Fitness Tracker',
            description: 'Aplicación para seguimiento de ejercicios, nutrición y progreso físico con gráficos y estadísticas detalladas.',
            image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop',
            technologies: ['React Native', 'Node.js', 'MongoDB', 'Chart.js'],
            github: 'https://github.com/yourusername/project6',
            demo: 'https://demo-project6.com'
        }
    ]

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Mis <span className="text-gradient">Proyectos</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Una selección de proyectos que demuestran mis habilidades y experiencia
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">
                                    {project.description}
                                </p>

                                {/* Technology Badges */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
