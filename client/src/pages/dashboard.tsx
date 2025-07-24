import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";
import { useQuery } from "@tanstack/react-query";

export default function Dashboard() {
  const { data: education } = useQuery({
    queryKey: ["/api/education"],
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">About Me</h2>
            <p className="text-lg text-gray-medium max-w-3xl mx-auto">
              I'm a passionate mobile developer dedicated to creating exceptional user experiences 
              through innovative Flutter applications. With a strong foundation in computer science 
              and hands-on experience across diverse projects, I bring both technical expertise 
              and creative problem-solving to every challenge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4+</span>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Years Experience</h3>
              <p className="text-gray-medium">Professional mobile development across multiple platforms</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">20+</span>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Apps Delivered</h3>
              <p className="text-gray-medium">Successfully launched applications serving thousands of users</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">98%</span>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Success Rate</h3>
              <p className="text-gray-medium">On-time delivery with zero rollback incidents</p>
            </div>
          </div>
          
          {/* Education */}
          {education && education.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-dark text-center mb-8">Education</h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-dark">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-gray-medium text-sm mt-2 md:mt-0">
                        {edu.startDate} - {edu.endDate} • {edu.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      <footer className="bg-dark text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">MS</span>
                </div>
                <span className="text-lg font-bold text-white">Muhammad Sohaib</span>
              </div>
              <p className="text-sm">Senior Mobile Application Developer specializing in Flutter, Dart, and cross-platform solutions.</p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Mobile App Development</li>
                <li>Flutter & Dart</li>
                <li>iOS & Android</li>
                <li>API Integration</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">Technologies</h4>
              <ul className="space-y-2 text-sm">
                <li>Flutter & Dart</li>
                <li>Swift & SwiftUI</li>
                <li>Kotlin & Java</li>
                <li>Firebase & AWS</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Muhammad Sohaib Jameel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
