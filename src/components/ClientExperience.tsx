import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

// Sample client logos - replace with your actual client logos
// To use your own logos, place them in src/assets/clients/ folder and update these paths
const clientLogos = [
  {
    name: "Client 1",
    // Once you add your images, use paths like: import client1 from '../assets/clients/client1.png'
    logo: "src/lib/logos/OpenAI.png",
  },
  {
    name: "Client 2",
    logo: "src/lib/logos/Google-Logo.wine.png",
  },
  {
    name: "Client 3",
    logo: "src/lib/logos/cursor.jpeg",
  },
  {
    name: "Client 4",
    logo: "src/lib/logos/github.jpeg",
  },
  {
    name: "Client 5",
    logo: "src/lib/logos/n8n.png",
  },
  {
    name: "Client 6",
    logo: "src/lib/logos/supabase.png",
  },
  {
    name: "Client 7",
    logo: "src/lib/logos/verecel.png",
  },
  {
    name: "Client 8",
    logo: "src/lib/logos/meta.jpg",
  },
];

const ClientExperience = () => {
  // Duplicate logos to ensure continuous scrolling
  const scrollingLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading"></h2>
        <p className="text-lg text-foreground/70 mb-10 max-w-3xl mx-auto text-center">
          I've worked on
        </p>

        <ScrollArea className="w-full overflow-hidden">
          <div className="relative w-full py-6">
            <div className="animate-scroll flex gap-8">
              {scrollingLogos.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="min-w-[160px] h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default ClientExperience;
