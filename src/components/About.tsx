
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Briefcase, Award } from 'lucide-react';

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", 
  "Node.js", "Tailwind CSS", "UI/UX Design", "Responsive Design"
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <p className="text-lg mb-4 animate-fade-in">
              I'm a dedicated professional with a passion for creating elegant solutions to complex problems. 
              With a background in technology and design, I bring a unique perspective to every project I undertake.
            </p>
            <p className="text-lg mb-4 animate-fade-in animate-delay-100">
              My journey began with a fascination for how technology can transform ideas into reality. 
              This led me to pursue expertise in various technologies and methodologies, 
              always with a focus on creating meaningful experiences.
            </p>
            <p className="text-lg animate-fade-in animate-delay-200">
              When I'm not working, you can find me exploring new technologies, contributing to open-source projects, 
              or seeking inspiration through travel and connecting with creative communities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-background px-3 py-1 rounded-full text-sm border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="animate-fade-in">
            <CardContent className="pt-6">
              <div className="mb-4 bg-teal/10 p-3 rounded-full w-fit">
                <Code className="text-teal h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-foreground/70">
                Creating modern, responsive websites and applications with a focus on performance and user experience.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in animate-delay-100">
            <CardContent className="pt-6">
              <div className="mb-4 bg-teal/10 p-3 rounded-full w-fit">
                <Briefcase className="text-teal h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Experience</h3>
              <p className="text-foreground/70">
                Working with diverse teams to deliver high-quality solutions across various industries and technologies.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in animate-delay-200">
            <CardContent className="pt-6">
              <div className="mb-4 bg-teal/10 p-3 rounded-full w-fit">
                <Award className="text-teal h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Achievements</h3>
              <p className="text-foreground/70">
                Recognized for excellence in project delivery, innovation, and contribution to the tech community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
