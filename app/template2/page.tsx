"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Template5() {
  return (
    <main className="min-h-screen bg-white text-black [font-family:var(--font-space-grotesk),sans-serif]">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-black z-50">
        <div className="max-w-6xl mx-auto px-8 py-8 flex justify-between items-center">
          <Link href="/" className="text-sm underline hover:opacity-70">
            ← BACK
          </Link>
          <div className="text-center">
            <p className="text-xs tracking-widest">ALEX RIVERA</p>
            <p className="text-xs tracking-widest text-gray-600">FULL STACK DEVELOPER</p>
          </div>
          <div className="w-16" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-32">
        <div className="mb-24">
          <p className="text-xs tracking-widest text-gray-600 mb-8">INTRODUCTION</p>
          <h1 className="text-7xl md:text-8xl font-bold mb-12 leading-tight">ALEX RIVERA</h1>
          <p className="text-2xl max-w-3xl mb-12 leading-loose">
            Full-stack developer building elegant digital experiences with modern web technologies. Focused on
            performance, accessibility, and thoughtful design.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl">
            Currently exploring AI-powered applications and scalable cloud architecture. Available for interesting
            projects and collaborations.
          </p>
        </div>
      </section>

      {/* Divider */}
      <section className="max-w-6xl mx-auto px-8 py-8 border-t border-black" />

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <p className="text-xs tracking-widest text-gray-600 mb-16">TECHNICAL SKILLS</p>
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-2xl font-bold mb-8 tracking-wide">FRONTEND</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              React / TypeScript / Next.js / Tailwind CSS / Framer Motion
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 tracking-wide">BACKEND</h3>
            <p className="text-lg text-gray-700 leading-relaxed">Node.js / PostgreSQL / API Design / Authentication</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 tracking-wide">TOOLS & DevOps</h3>
            <p className="text-lg text-gray-700 leading-relaxed">Git / Docker / Vercel / AWS / GitHub Actions</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 tracking-wide">DATABASES</h3>
            <p className="text-lg text-gray-700 leading-relaxed">PostgreSQL / Supabase / Redis / MongoDB</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="max-w-6xl mx-auto px-8 py-8 border-t border-black" />

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <p className="text-xs tracking-widest text-gray-600 mb-16">SELECTED WORK</p>

        {/* Project 1 */}
        <div className="mb-24 pb-24 border-b border-gray-300">
          <div className="grid md:grid-cols-3 gap-12 items-start mb-8">
            <div className="col-span-2">
              <h3 className="text-4xl font-bold mb-6">Design System</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Reusable React component library with 50+ components, full TypeScript support, and comprehensive
                documentation.
              </p>
              <p className="text-sm text-gray-600 tracking-widest mb-6">REACT • TYPESCRIPT • STORYBOOK • TAILWIND</p>
            </div>
            <div className="h-48 bg-gray-100 border border-black" />
          </div>
          <ul className="text-sm text-gray-700 space-y-2 mb-8 max-w-2xl">
            <li>• Built 50+ accessible, reusable components</li>
            <li>• Implemented comprehensive design system documentation</li>
            <li>• Achieved 95% test coverage with Jest and React Testing Library</li>
            <li>• Impact: Reduced development time by 40% across team projects</li>
          </ul>
          <Button variant="outline" size="sm" className="border-black hover:bg-black hover:text-white bg-transparent">
            VIEW PROJECT <ArrowRight className="w-3 h-3 ml-2" />
          </Button>
        </div>

        {/* Project 2 */}
        <div className="mb-24 pb-24 border-b border-gray-300">
          <div className="grid md:grid-cols-3 gap-12 items-start mb-8">
            <div className="col-span-2">
              <h3 className="text-4xl font-bold mb-6">AI Content Platform</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Full-stack SaaS application for AI-powered content generation with real-time collaboration features.
              </p>
              <p className="text-sm text-gray-600 tracking-widest mb-6">NEXT.JS • AI SDK • SUPABASE • STRIPE</p>
            </div>
            <div className="h-48 bg-gray-100 border border-black" />
          </div>
          <ul className="text-sm text-gray-700 space-y-2 mb-8 max-w-2xl">
            <li>• Architected scalable Next.js backend with AI integrations</li>
            <li>• Implemented Stripe payments and subscription management</li>
            <li>• Built real-time collaboration using WebSockets</li>
            <li>• Impact: 5000+ active users, $50k ARR</li>
          </ul>
          <Button variant="outline" size="sm" className="border-black hover:bg-black hover:text-white bg-transparent">
            VIEW PROJECT <ArrowRight className="w-3 h-3 ml-2" />
          </Button>
        </div>

        {/* Project 3 */}
        <div>
          <div className="grid md:grid-cols-3 gap-12 items-start mb-8">
            <div className="col-span-2">
              <h3 className="text-4xl font-bold mb-6">Mobile Task App</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Cross-platform mobile application with offline support and cloud synchronization.
              </p>
              <p className="text-sm text-gray-600 tracking-widest mb-6">REACT NATIVE • FIREBASE • REDUX</p>
            </div>
            <div className="h-48 bg-gray-100 border border-black" />
          </div>
          <ul className="text-sm text-gray-700 space-y-2 mb-8 max-w-2xl">
            <li>• Developed cross-platform app supporting 50k+ downloads</li>
            <li>• Implemented offline-first architecture with Firebase sync</li>
            <li>• Achieved 4.8 star rating on both App Store and Play Store</li>
            <li>• Impact: Featured in top charts on both platforms</li>
          </ul>
          <Button variant="outline" size="sm" className="border-black hover:bg-black hover:text-white bg-transparent">
            VIEW PROJECT <ArrowRight className="w-3 h-3 ml-2" />
          </Button>
        </div>
      </section>

      {/* Divider */}
      <section className="max-w-6xl mx-auto px-8 py-8 border-t border-black" />

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <p className="text-xs tracking-widest text-gray-600 mb-8">ABOUT</p>
        <div className="space-y-8 max-w-3xl">
          <p className="text-lg text-gray-700 leading-loose">
            I am a full-stack developer passionate about building beautiful, performant web applications that solve real
            problems.
          </p>
          <p className="text-lg text-gray-700 leading-loose">
            Currently exploring AI-powered products and scalable cloud architecture. Focused on performance,
            accessibility, and user experience at every level.
          </p>
          <p className="text-lg text-gray-700 leading-loose">
            Always eager to collaborate on interesting projects and mentor junior developers. Let's build something
            great together.
          </p>
        </div>
      </section>

      {/* Divider */}
      <section className="max-w-6xl mx-auto px-8 py-8 border-t border-black" />

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <p className="text-xs tracking-widest text-gray-600 mb-12">GET IN TOUCH</p>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <a href="mailto:hello@alex.dev" className="group">
              <p className="text-xs tracking-widest text-gray-600 mb-4">EMAIL</p>
              <p className="text-2xl font-bold group-hover:underline">hello@alex.dev</p>
            </a>
          </div>
          <div>
            <a href="#" className="group">
              <p className="text-xs tracking-widest text-gray-600 mb-4">LINKEDIN</p>
              <p className="text-2xl font-bold group-hover:underline">linkedin.com/in/alexrivera</p>
            </a>
          </div>
          <div>
            <a href="#" className="group">
              <p className="text-xs tracking-widest text-gray-600 mb-4">GITHUB</p>
              <p className="text-2xl font-bold group-hover:underline">github.com/alexrivera</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black">
        <div className="max-w-6xl mx-auto px-8 py-12 flex justify-between items-center text-xs tracking-widest">
          <p>© 2025 ALEX RIVERA</p>
          <Link href="/" className="hover:opacity-70">
            VIEW OTHER TEMPLATES
          </Link>
        </div>
      </footer>
    </main>
  )
}
