import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Placeholder submit – can be wired to backend later
      await new Promise((r) => setTimeout(r, 900))
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_0%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(700px_circle_at_80%_100%,rgba(56,189,248,0.06),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s work together</h2>
          <p className="mt-3 text-blue-200/80">Tell me about your project, timeline, and goals. I’ll get back to you shortly.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-xl">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="px-4 py-3 rounded-lg bg-white/10 ring-1 ring-white/10 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email address" required className="px-4 py-3 rounded-lg bg-white/10 ring-1 ring-white/10 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me a bit about your idea" rows={5} required className="px-4 py-3 rounded-lg bg-white/10 ring-1 ring-white/10 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button disabled={loading || sent} className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold transition">
            {sent ? 'Message sent ✅' : loading ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
