import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Menu, X, Mail } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img 
                src="/attached_assets/IMG_5708_1753340477741.PNG" 
                alt="Muhammad Sohaib Jameel"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-dark">Muhammad Sohaib</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-medium hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="text-gray-medium hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-gray-medium hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-gray-medium hover:text-primary transition-colors"
            >
              Skills
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white hover:bg-blue-700"
            >
              <Mail className="mr-2" size={16} />
              Contact Me
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-gray-medium hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="text-left text-gray-medium hover:text-primary transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-left text-gray-medium hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="text-left text-gray-medium hover:text-primary transition-colors"
              >
                Skills
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white hover:bg-blue-700 w-full"
              >
                <Mail className="mr-2" size={16} />
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
