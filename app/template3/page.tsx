"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react"

export default function Template6() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50 [font-family:var(--font-playfair),serif]">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/70 backdrop-blur-lg border-b border-rose-100/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-sm font-semibold text-rose-700 hover:text-rose-900">
            ← Home
          </Link>
          <h1 className="text-lg font-semibold text-gray-900">Alex Rivera</h1>
          <div className="flex gap-3">
            <a href="#" className="text-gray-500 hover:text-rose-600 transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-rose-600 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-rose-400" />
              <span className="text-sm font-semibold text-rose-600">Welcome to my portfolio</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">Full Stack Developer</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Passionate about creating elegant digital experiences. Specialized in React, Node.js, and building
              scalable applications that users love.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="border-rose-200 hover:bg-rose-50 bg-transparent">
                View My Work
              </Button>
            </div>
          </div>

          {/* Decorative shapes */}
          <div className="relative h-96 hidden md:block">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-rose-200 rounded-full blur-3xl opacity-60" />
          </div>
        </div>
      </section>

      {/* Skills Section with Soft Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100/50 hover:shadow-lg hover:shadow-blue-100/50 transition-all">
            <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mb-4 text-xl">💎</div>
            <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
            <p className="text-sm text-gray-600 leading-relaxed">React, TypeScript, Next.js, Tailwind CSS</p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100/50 hover:shadow-lg hover:shadow-purple-100/50 transition-all">
            <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center mb-4 text-xl">⚙️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Backend</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Node.js, PostgreSQL, API Design, Auth</p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100/50 hover:shadow-lg hover:shadow-orange-100/50 transition-all">
            <div className="w-12 h-12 rounded-full bg-orange-200 flex items-center justify-center mb-4 text-xl">🛠️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Tools</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Git, Docker, Vercel, AWS, GitHub</p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100/50 hover:shadow-lg hover:shadow-emerald-100/50 transition-all">
            <div className="w-12 h-12 rounded-full bg-emerald-200 flex items-center justify-center mb-4 text-xl">
              💾
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Databases</h3>
            <p className="text-sm text-gray-600 leading-relaxed">PostgreSQL, Supabase, Redis, MongoDB</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="rounded-2xl overflow-hidden bg-white border border-rose-100/50 hover:shadow-xl hover:shadow-rose-100/50 transition-all group">
            <div className="h-56 bg-gradient-to-br from-rose-100 to-pink-100 relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-rose-600 animate-pulse" />
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design System</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Reusable React component library with 50+ components and full TypeScript support.
              </p>
              <div className="mb-6 space-y-2">
                <p className="text-xs text-gray-500 font-medium">React • TypeScript • Storybook</p>
                <div className="flex gap-3 text-xs text-gray-600">
                  <span className="inline-block">50+ Components</span>
                  <span className="inline-block">95% Tests</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white">
                Learn More
              </Button>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="rounded-2xl overflow-hidden bg-white border border-purple-100/50 hover:shadow-xl hover:shadow-purple-100/50 transition-all group">
            <div className="h-56 bg-gradient-to-br from-purple-100 to-blue-100 relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-purple-600 animate-pulse" />
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Content Platform</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Full-stack SaaS with AI integrations and real-time collaboration features.
              </p>
              <div className="mb-6 space-y-2">
                <p className="text-xs text-gray-500 font-medium">Next.js • AI SDK • Supabase</p>
                <div className="flex gap-3 text-xs text-gray-600">
                  <span className="inline-block">5000+ Users</span>
                  <span className="inline-block">$50k ARR</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white">
                Learn More
              </Button>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="rounded-2xl overflow-hidden bg-white border border-amber-100/50 hover:shadow-xl hover:shadow-amber-100/50 transition-all group">
            <div className="h-56 bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-amber-600 animate-pulse" />
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Task App</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Cross-platform app with offline support and cloud synchronization features.
              </p>
              <div className="mb-6 space-y-2">
                <p className="text-xs text-gray-500 font-medium">React Native • Firebase • Redux</p>
                <div className="flex gap-3 text-xs text-gray-600">
                  <span className="inline-block">50k+ Downloads</span>
                  <span className="inline-block">4.8★ Rating</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-rose-50 to-purple-50 border border-rose-100/50 p-12 md:p-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-700">
              <p className="leading-relaxed">
                I'm a full-stack developer passionate about building beautiful, performant web applications that solve
                real problems and create meaningful user experiences.
              </p>
              <p className="leading-relaxed">
                Currently exploring AI-powered products and scalable cloud architecture. I focus on performance,
                accessibility, and thoughtful design at every layer of the application.
              </p>
              <p className="leading-relaxed">
                Always eager to collaborate on interesting projects, contribute to open-source, and mentor junior
                developers. Let's build something great together.
              </p>
            </div>
            <div className="flex items-center">
              <div className="relative w-full">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full blur-2xl opacity-40" />
                <div className="relative z-10 text-center py-8">
                  <p className="text-gray-600">Always learning, always building</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Let's Connect</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <a
            href="mailto:hello@alex.dev"
            className="group p-8 rounded-2xl bg-white border border-blue-100/50 hover:shadow-lg hover:shadow-blue-100/50 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-xs text-gray-600 font-semibold mb-2">EMAIL</p>
            <p className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">hello@alex.dev</p>
          </a>

          <a
            href="#"
            className="group p-8 rounded-2xl bg-white border border-purple-100/50 hover:shadow-lg hover:shadow-purple-100/50 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-xs text-gray-600 font-semibold mb-2">LINKEDIN</p>
            <p className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition">
              linkedin.com/in/alexrivera
            </p>
          </a>

          <a
            href="#"
            className="group p-8 rounded-2xl bg-white border border-rose-100/50 hover:shadow-lg hover:shadow-rose-100/50 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6 text-rose-600" />
            </div>
            <p className="text-xs text-gray-600 font-semibold mb-2">GITHUB</p>
            <p className="text-lg font-semibold text-gray-900 group-hover:text-rose-600 transition">
              github.com/alexrivera
            </p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-rose-100/50 py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm text-gray-600">
          <p>© 2025 Alex Rivera. All rights reserved.</p>
          <Link href="/" className="hover:text-rose-600 transition">
            View All Templates →
          </Link>
        </div>
      </footer>
    </main>
  )
}
