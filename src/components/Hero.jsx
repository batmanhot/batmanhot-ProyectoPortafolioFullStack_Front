const Hero = () => {
    const scrollToProjects = () => {
        const element = document.getElementById('projects')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleDownloadCV = () => {
        // Placeholder for CV download - replace with actual CV file
        alert('Funcionalidad de descarga de CV - Por favor agrega tu archivo CV en la carpeta public/')
    }

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
        >
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center">
                    {/* Animated greeting */}
                    <div className="mb-6 animate-float">
                        <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                            👋 ¡Hola! Bienvenido a mi portafolio
                        </span>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        Soy{' '}
                        <span className="text-gradient">
                            JHON's
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-4 font-semibold">
                        Desarrollador Full Stack
                    </p>

                    {/* Value proposition */}
                    <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Construyo aplicaciones web robustas y escalables desde la base de datos hasta la interfaz de usuario,
                        combinando diseño moderno con código limpio y eficiente.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={scrollToProjects}
                            className="group px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
                        >
                            Ver mis proyectos
                            <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>

                        <button
                            onClick={handleDownloadCV}
                            className="px-8 py-4 bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-400 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Descargar CV
                        </button>
                    </div>

                    {/* Scroll indicator */}
                    <div className="mt-16 animate-bounce">
                        <svg
                            className="w-6 h-6 mx-auto text-slate-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
