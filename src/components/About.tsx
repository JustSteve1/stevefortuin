import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Briefcase, Award } from "lucide-react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "UI/UX Design",
  "Responsive Design",
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <p className="text-lg mb-4 animate-fade-in">
              I've built my career on creating business & customer value with
              technology
            </p>

            <p className="text-lg mb-4 animate-fade-in">
              I have 12+ years of experience across Strategy, Technology &
              Marketing with 3 professional chapters that shape who I am today
            </p>

            <ol className="text-lg mb-4 animate-fade-in space-y-4">
              <li>
                As a Management Consultant where I worked for leading clients in
                Tech, Consumer & Financial Services to design and build B2B &
                B2C products
              </li>
              <li>
                As a Technical Program Manager where I managed the delivery of
                Agile product transformations programs at scale
              </li>
              <li>
                As digital venture founder, where I’m building Agentic apps to
                disrupt the status quo for Creatives in Sales & Marketing{" "}
              </li>
            </ol>

            <p className="text-lg mb-4 animate-fade-in">
              I’ve had the opportunity to lead delivery teams & also write code
              that solves business problems as an individual contributor. I
              enjoy using my skills to connect the dots between Product &
              Technical teams
            </p>

            <p className="text-lg mb-4 animate-fade-in">
              Beyond my career, I believe life is best lived through
              experiences. Staying balanced is important to me. I'm happiest on
              days when both left and right brains are activated - as I
              naturally lean more left, I Create with my personal portfolio to
              keep equilibrium{" "}
            </p>

            <p className="text-lg mb-4 animate-fade-in">I am always</p>
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
              <h3 className="text-xl font-semibold mb-2">Product</h3>
              <p className="text-foreground/70">
                I've designed and built b2b & b2c products for leading
                organisations in Financial Services, Consumer Goods, Retail
                Media & Technology
              </p>
              <p className="text-foreground/70">
                I've also designed and built smaller technical use-cases, like
                this website. Everything you see has been created by me.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in animate-delay-100">
            <CardContent className="pt-6">
              <div className="mb-4 bg-teal/10 p-3 rounded-full w-fit">
                <Briefcase className="text-teal h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Professional Experience
              </h3>
              <p className="text-foreground/70">
                I've worked as a Management Consultant and in a bank, both
                taught me how to build projects and manage teams
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
                This website is a personal achievement. Building something
                technical from scratch. I've created this in React, with a
                Next.js and coded most of the front-end in TypeScript. I also
                used Loveable to automate front-end code
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
