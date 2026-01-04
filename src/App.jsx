import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setDarkMode(true)
            document.documentElement.classList.add('dark')
        }
    }, [])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if (!darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main>
                <Hero />
                <TechStack />
                <Projects />
                <About />
                <Contact />
            </main>
            <footer className="bg-slate-100 dark:bg-slate-800 py-6 text-center">
                <p className="text-slate-600 dark:text-slate-400">
                    © {new Date().getFullYear()} JHON's. Todos los derechos reservados.
                </p>
            </footer>
        </div>
    )
}

export default App
