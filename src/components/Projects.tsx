
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Link } from 'lucide-react';

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js, featuring a responsive design and seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'web',
    link: '#'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A clean, minimal portfolio website template for creative professionals, featuring smooth animations and optimized performance.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: 'web',
    link: '#'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity application designed to help teams manage tasks and projects efficiently with real-time updates.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    category: 'app',
    link: '#'
  },
  {
    id: 4,
    title: 'Dashboard UI',
    description: 'A comprehensive dashboard interface with data visualization, user management, and analytics components.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['React', 'Chart.js', 'Material UI'],
    category: 'ui',
    link: '#'
  }
];

// Category filters
const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web Development' },
  { value: 'app', label: 'Applications' },
  { value: 'ui', label: 'UI Design' }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Projects</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button 
              key={category.value}
              variant={activeCategory === category.value ? "default" : "outline"}
              className={activeCategory === category.value ? "bg-teal" : "border-teal text-foreground/70"}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                    <Badge key={index} variant="outline" className="bg-teal/5 text-teal border-teal/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-teal flex items-center gap-2 p-0 hover:bg-transparent hover:text-teal-dark">
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
