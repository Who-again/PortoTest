"use client"

import { ReactTyped } from "react-typed";


import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Globe } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="container mx-auto flex min-h-[100vh] max-w-4xl items-center justify-center px-4 py-12">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Who again?
              </span>
            </h1>
            <p className="mx-auto max-w-[600px] text-base text-muted-foreground sm:text-lg md:text-xl">
              I'm a {" "}
              <ReactTyped
                  strings={[
                    "Web Developer",
                    "Software Engineer",
                    "UI/UX Designer",
                    "Game Developer",
                  ]}
                  typeSpeed={40}
                  loop
                  backDelay={1000}
                  backSpeed={15}
                  className="font-bold text-dark dark:text-white"
                />
            </p>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="w-full sm:w-auto" onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }}>
              <Mail className="mr-2 h-4 w-4" />
              Get in touch
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent" onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }}>
              <Github className="mr-2 h-4 w-4" />
              View GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto max-w-6xl px-4 py-12 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">My history</h2>
            <p className="text-muted-foreground">Learn more about my background and what drives me</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground sm:text-base">
                It all started when i was only a boy, tinkering with computer programs and making random projects as a hobby,eventually i made my first game on Roblox using Lua.
              </p>
              <p className="text-sm text-muted-foreground sm:text-base">
                And today, I now study at SMK TI Global to pursue better knowledge.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold sm:text-xl">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs sm:text-sm">
                  React
                </Badge>
                <Badge variant="secondary" className="text-xs sm:text-sm">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="text-xs sm:text-sm">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="text-xs sm:text-sm">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="text-xs sm:text-sm">
                  Tailwind CSS
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="container mx-auto max-w-4xl px-4 py-12 md:py-24">
        <div className="mx-auto max-w-2xl space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Get In Touch</h2>
            <p className="text-muted-foreground">
              Have a project in mind? Let's work together to bring your ideas to life.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              <span className="truncate">nexusklad@gmail.com</span>
            </Button>
            <Button variant="outline" size="lg" className="w-full bg-transparent sm:w-auto">
              <Github className="mr-2 h-4 w-4" />
              github.com/Who-again
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
