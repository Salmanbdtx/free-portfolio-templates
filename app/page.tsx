"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const templates = [
  {
    name: "Template 1",
    title: "Minimal & Clean",
    description:
      "Elegant, spacious, and organized - perfect for a professional first impression.",
    href: "/template1",
    icon: "✨",
  },
  {
    name: "Template 2",
    title: "Minimalist Brutalist",
    description:
      "Stark, typography-focused design with bold structure and clean lines.",
    href: "/template2",
    icon: "⚫",
  },
  {
    name: "Template 3",
    title: "Elegant & Soft",
    description:
      "Soft pastels, rounded corners, and delicate interactions for a refined feel.",
    href: "/template3",
    icon: "✨",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-background to-secondary/30 [font-family:var(--font-poppins),sans-serif]">
      <div className="max-w-6xl mx-auto px-4 py-24 sm:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-linear-to-r from-primary via-primary to-blue-600 bg-clip-text text-transparent">
              Portfolio Templates
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore three beautifully designed portfolio templates. All showcase
            the same content with different visual styles and layouts.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Templates made by{" "}
            <Link
              href="https://lotfijebali.dev?utm_source=free+portfolio+templates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Lotfi Jebali
            </Link>
          </p>
        </div>

        {/* Template Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {templates.map((template, idx) => (
            <Card
              key={idx}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="text-4xl mb-4">{template.icon}</div>
                <CardTitle>{template.title}</CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={template.href}>
                  <Button className="w-full">View Template →</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-20 p-8 rounded-lg bg-card border">
          <h2 className="text-2xl font-bold mb-4">
            Same Content, Three Different Layouts
          </h2>
          <p className="text-muted-foreground mb-4">
            Each template presents the same portfolio content (hero, skills,
            projects, about, and contact) in a unique visual style. Explore all
            three to see how design choices can dramatically transform the
            presentation without changing the underlying content. Perfect for
            showcasing your work with different aesthetic approaches!
          </p>
        </div>

        {/* Attribution */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Templates made by{" "}
            <Link
              href="https://lotfijebali.dev?utm_source=free+portfolio+templates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Lotfi Jebali
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
