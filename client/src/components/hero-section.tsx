import { useQuery } from "@tanstack/react-query";
import { MapPin, Mail, Phone, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const { data: personalInfo, isLoading } = useQuery({
    queryKey: ["/api/personal-info"],
  });

  if (isLoading) {
    return (
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-12 bg-gray-200 rounded animate-pulse mb-4"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse max-w-2xl mx-auto mb-8"></div>
            <div className="h-32 bg-gray-200 rounded animate-pulse max-w-4xl mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-dark mb-4">{personalInfo?.name}</h1>
          <h2 className="text-2xl text-primary mb-6">{personalInfo?.title}</h2>
          <p className="text-lg text-gray-medium max-w-4xl mx-auto leading-relaxed mb-8">
            {personalInfo?.summary}
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="flex items-center space-x-2 text-gray-medium">
              <MapPin size={18} />
              <span>{personalInfo?.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-medium">
              <Mail size={18} />
              <a href={`mailto:${personalInfo?.email}`} className="hover:text-primary transition-colors">
                {personalInfo?.email}
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-medium">
              <Phone size={18} />
              <a href={`tel:${personalInfo?.phone}`} className="hover:text-primary transition-colors">
                {personalInfo?.phone}
              </a>
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-4">
            <Button 
              asChild
              className="bg-primary hover:bg-blue-700 text-white"
            >
              <a href={personalInfo?.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2" size={18} />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <a href={personalInfo?.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={18} />
                GitHub
              </a>
            </Button>
            
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
              <Download className="mr-2" size={18} />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
