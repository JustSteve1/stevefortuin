
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-blue font-medium mb-3">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold text-navy mb-4">
            Steve Fortuin
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6">
            Professional <span className="text-blue">Portfolio</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl">
            I'm a passionate professional dedicated to creating impactful solutions. 
            Welcome to my portfolio showcasing my projects and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-blue hover:bg-blue-dark text-white flex items-center gap-2 px-6">
              View Projects <ArrowRight size={16} />
            </Button>
            <Button variant="outline" className="border-blue text-blue hover:bg-blue/5">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
