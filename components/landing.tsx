"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Landing() {
  const [features] = useState([
    { id: 1, title: 'Next.js', description: 'A free and open-source landing page template for your SaaS business, built with Next.js, TypeScript, Shadcn UI, and Tailwind CSS.' },
    { id: 2, title: 'React', description: 'A free and open-source landing page template for your SaaS business, built with Next.js, TypeScript, Shadcn UI, and Tailwind CSS.' },
    { id: 3, title: 'Tailwind CSS', description: 'A free and open-source landing page template for your SaaS business, built with Next.js, TypeScript, Shadcn UI, and Tailwind CSS.' },
    { id: 4, title: 'TypeScript', description: 'A free and open-source landing page template for your SaaS business, built with Next.js, TypeScript, Shadcn UI, and Tailwind CSS.' },
    { id: 5, title: 'Shadcn UI', description: 'A free and open-source landing page template for your SaaS business, built with Next.js, TypeScript, Shadcn UI, and Tailwind CSS.' },
    { id: 6, title: 'ESLint', description: 'A free and open-source landing page template for your SaaS business, built with Next.js, TypeScript, Shadcn UI, and Tailwind CSS.' },
  ])

  return (
    <div>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 text-center">
        <div className="container px-4 md:px-6">
          <h1 className="mt-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Easiest Way To Get{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Funding <br/>And Connections
            </span>{' '}
            For Your Research.
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl">
            A free and non-profit service which helps you get connected.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="text-sm font-medium text-purple-600 mb-2">Features</div>
            <h2 className="text-3xl font-bold">Unlock Your Full Potential</h2>
            <p className="mt-4 text-gray-500 max-w-[800px] mx-auto">
              A free and open-source landing page template for your SaaS business, built with Next.js, TypeScript, Shadcn
              UI, and Tailwind CSS.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                    <svg
                      className=" h-6 w-6"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
