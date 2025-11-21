import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30 flex items-center justify-center text-white font-bold">F</div>
            <span className="text-white font-semibold tracking-tight">Your Name</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => scrollTo('hero')} className="text-blue-100 hover:text-white transition">Home</button>
            <button onClick={() => scrollTo('projects')} className="text-blue-100 hover:text-white transition">Projects</button>
            <button onClick={() => scrollTo('about')} className="text-blue-100 hover:text-white transition">About</button>
            <button onClick={() => scrollTo('contact')} className="text-white bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded-lg transition">Contact</button>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-6 space-y-2">
            <button onClick={() => scrollTo('hero')} className="block w-full text-left text-blue-100 hover:text-white">Home</button>
            <button onClick={() => scrollTo('projects')} className="block w-full text-left text-blue-100 hover:text-white">Projects</button>
            <button onClick={() => scrollTo('about')} className="block w-full text-left text-blue-100 hover:text-white">About</button>
            <button onClick={() => scrollTo('contact')} className="block w-full text-left text-white bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-lg">Contact</button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
