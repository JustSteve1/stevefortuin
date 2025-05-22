
import React from 'react';

// Sample client logos - replace with actual client logos
const clientLogos = [
  {
    name: 'Client 1',
    logo: 'https://placehold.co/200x80/e9ecef/495057?text=Client+1',
  },
  {
    name: 'Client 2',
    logo: 'https://placehold.co/200x80/e9ecef/495057?text=Client+2',
  },
  {
    name: 'Client 3',
    logo: 'https://placehold.co/200x80/e9ecef/495057?text=Client+3',
  },
  {
    name: 'Client 4',
    logo: 'https://placehold.co/200x80/e9ecef/495057?text=Client+4',
  },
  {
    name: 'Client 5',
    logo: 'https://placehold.co/200x80/e9ecef/495057?text=Client+5',
  },
  {
    name: 'Client 6',
    logo: 'https://placehold.co/200x80/e9ecef/495057?text=Client+6',
  },
  {
    name: 'Client 7',
    logo: 'https://placehold.co/200x80/e9ecef/495057?text=Client+7',
  },
  {
    name: 'Client 8',
    logo: 'https://placehold.co/200x80/e9ecef/495057?text=Client+8',
  },
];

const ClientExperience = () => {
  // Duplicate logos to ensure continuous scrolling
  const scrollingLogos = [...clientLogos, ...clientLogos];
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Client Experience</h2>
        <p className="text-lg text-foreground/70 mb-10 max-w-3xl">
          I've had the pleasure of working with a diverse range of clients across various industries.
          Here are some of the organizations I've collaborated with.
        </p>
        
        <div className="relative overflow-hidden w-full py-6">
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
      </div>
    </section>
  );
};

export default ClientExperience;
