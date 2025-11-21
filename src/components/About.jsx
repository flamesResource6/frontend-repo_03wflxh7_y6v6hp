function About() {
  return (
    <section id="about" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_100%,rgba(34,197,94,0.05),transparent_40%),radial-gradient(600px_circle_at_100%_100%,rgba(99,102,241,0.05),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Hi, I’m Your Name</h2>
            <p className="mt-4 text-blue-200/80 leading-relaxed">
              I’m a creative developer and designer who loves blending technology with playful interactions. My work focuses on performance, accessibility, and crafting memorable experiences.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
                <p className="text-3xl font-bold text-white">6+</p>
                <p className="text-blue-200/70 text-sm">Years experience</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
                <p className="text-3xl font-bold text-white">25+</p>
                <p className="text-blue-200/70 text-sm">Projects shipped</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
                <p className="text-3xl font-bold text-white">10x</p>
                <p className="text-blue-200/70 text-sm">Attention to detail</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
                <p className="text-3xl font-bold text-white">∞</p>
                <p className="text-blue-200/70 text-sm">Curiosity</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-blue-400/20 to-cyan-400/10 ring-1 ring-white/10 p-2">
              <div className="w-full h-full rounded-xl bg-slate-900/60 ring-1 ring-white/10 flex items-center justify-center text-blue-100">
                Your portrait here
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
