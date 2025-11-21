import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] md:h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-24 md:pb-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-blue-100 ring-1 ring-white/15 backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance work
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
            Building delightful digital experiences
          </h1>
          <p className="mt-4 md:mt-6 text-blue-100/90 text-lg md:text-xl leading-relaxed">
            I’m a creative developer crafting interactive websites, apps, and playful experiments. Let’s turn ideas into remarkable products.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
