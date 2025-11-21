function ProjectCard({ title, description, tags, link, image }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group rounded-2xl overflow-hidden bg-slate-900/60 ring-1 ring-white/10 hover:ring-white/20 transition block">
      <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900" style={{backgroundImage: image ? `url(${image})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center'}} />
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg group-hover:text-blue-200 transition">{title}</h3>
        <p className="mt-1 text-sm text-blue-200/80">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 text-blue-100 ring-1 ring-white/10">{t}</span>
          ))}
        </div>
      </div>
    </a>
  )
}

function Projects() {
  const items = [
    {
      title: 'Interactive 3D Playground',
      description: 'A WebGL-powered demo with playful physics and motion.',
      tags: ['Three.js', 'Shaders', 'UX'],
      link: '#',
    },
    {
      title: 'SaaS Dashboard',
      description: 'Beautifully animated metrics and real-time charts.',
      tags: ['React', 'Tailwind', 'Charts'],
      link: '#',
    },
    {
      title: 'Mobile App Concept',
      description: 'Cross-platform prototype with smooth interactions.',
      tags: ['React Native', 'Design', 'Prototyping'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(56,189,248,0.05),transparent_40%),radial-gradient(600px_circle_at_100%_0%,rgba(59,130,246,0.05),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <p className="mt-3 text-blue-200/80">A glimpse into recent projects focused on usability, performance, and joy.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
