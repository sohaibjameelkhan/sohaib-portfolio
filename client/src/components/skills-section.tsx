import { useQuery } from "@tanstack/react-query";
import { Code, Database, Wrench, Globe } from "lucide-react";

const categoryIcons = {
  "Mobile Development": Code,
  "Development Tools": Wrench,
  "Backend & APIs": Database,
  "Integration & Services": Globe,
};

export default function SkillsSection() {
  const { data: skills, isLoading } = useQuery({
    queryKey: ["/api/skills"],
  });

  if (isLoading) {
    return (
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded animate-pulse mb-4 max-w-xs mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse max-w-md mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-light rounded-xl p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-16 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-medium">
            Technologies and tools I work with to build exceptional mobile applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills?.map((skillGroup) => {
            const IconComponent = categoryIcons[skillGroup.category as keyof typeof categoryIcons] || Code;
            
            return (
              <div key={skillGroup.id} className="bg-gray-light rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="text-primary" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-dark">{skillGroup.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items?.map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-white text-gray-medium px-3 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
            <h3 className="text-xl font-bold text-dark mb-4">Professional Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-gray-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">20+</div>
                <div className="text-gray-medium">Apps Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
                <div className="text-gray-medium">Active Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}