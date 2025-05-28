import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Link } from "lucide-react";

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Aura",
    description: "Agentic App, automating workflows for Sales & Marketing",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Supabase",
      "Tailwind CSS",
      "Google ",
    ],
    category: "web",
    link: "#",
  },
  {
    id: 2,
    title: "Prometheus",
    description: "Agentic App for Real-time data analytics",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Google Cloud", "Github", "OpenAI", "Google BigQuery", "n8n"],
    category: "web",
    link: "#",
  },
  {
    id: 3,
    title: "The Modernists",
    description: "Digital Membership key for clubs, events and experiences.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Python", "React", "Figma", "Tailwind CSS", "OpenAI"],
    category: "app",
    link: "#",
  },
  {
    id: 4,
    title: "925",
    description: "Fashion x AI ",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Google", "React", "next.js", "Tailwind CSS", "Supabase", "Figma"],
    category: "ui",
    link: "#",
  },
];

// Category filters
const categories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Development" },
  { value: "app", label: "Applications" },
  { value: "ui", label: "UI Design" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Projects</h2>

        <div className="flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={
                activeCategory === category.value ? "default" : "outline"
              }
              className={
                activeCategory === category.value
                  ? "bg-teal"
                  : "border-teal text-foreground/70"
              }
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="project-card animate-fade-in">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-teal/5 text-teal border-teal/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="text-teal flex items-center gap-2 p-0 hover:bg-transparent hover:text-teal-dark"
                >
                  View Project <ArrowRight size={14} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-teal hover:bg-teal-dark">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
