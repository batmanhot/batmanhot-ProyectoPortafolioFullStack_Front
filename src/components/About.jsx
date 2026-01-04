const About = () => {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop"
                                alt="Workspace"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-purple-600/20"></div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                    </div>

                    {/* Right Column - Content */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Sobre <span className="text-gradient">Mí</span>
                        </h2>

                        <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            <p>
                                ¡Hola! Soy <span className="font-semibold text-slate-800 dark:text-slate-200">JHON's</span>,
                                un desarrollador Full Stack apasionado por crear soluciones tecnológicas que marquen la diferencia.
                            </p>

                            <p>
                                Mi viaje en la programación comenzó con la curiosidad de entender cómo funcionan las aplicaciones
                                que usamos diariamente. Desde entonces, he desarrollado una sólida experiencia en tecnologías
                                tanto de frontend como de backend, permitiéndome construir aplicaciones completas desde cero.
                            </p>

                            <p>
                                Me especializo en crear interfaces de usuario intuitivas y atractivas con <span className="font-semibold text-primary-600 dark:text-primary-400">React</span> y <span className="font-semibold text-primary-600 dark:text-primary-400">Next.js</span>,
                                mientras que en el backend trabajo con <span className="font-semibold text-primary-600 dark:text-primary-400">Node.js</span>, <span className="font-semibold text-primary-600 dark:text-primary-400">Express</span> y
                                bases de datos como <span className="font-semibold text-primary-600 dark:text-primary-400">MongoDB</span> y <span className="font-semibold text-primary-600 dark:text-primary-400">PostgreSQL</span>.
                            </p>

                            <p>
                                Lo que más me motiva de la programación es la capacidad de transformar ideas en productos
                                funcionales que resuelven problemas reales. Siempre estoy aprendiendo nuevas tecnologías
                                y mejores prácticas para mantenerme actualizado en este campo en constante evolución.
                            </p>

                            <p className="font-semibold text-slate-800 dark:text-slate-200">
                                Mi objetivo es crear código limpio, mantenible y escalable que no solo funcione bien,
                                sino que también sea un placer de leer y mantener.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">3+</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">Años de Experiencia</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">50+</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">Proyectos Completados</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">20+</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">Tecnologías</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
