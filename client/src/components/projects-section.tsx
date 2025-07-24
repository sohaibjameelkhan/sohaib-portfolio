import { useQuery } from "@tanstack/react-query";
import { Smartphone, Calendar, MapPin, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["/api/projects"],
  });

  if (isLoading) {
    return (
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded animate-pulse mb-4 max-w-xs mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse max-w-md mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-16 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-medium">
            Mobile applications that have made a real impact for users and businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Smartphone className="text-primary" size={24} />
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-medium">
                    <Calendar size={14} />
                    <span>{project.year}</span>
                    {project.country && (
                      <>
                        <MapPin size={14} />
                        <span>{project.country}</span>
                      </>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-dark mb-3">{project.name}</h3>
                <p className="text-gray-medium mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  {project.achievements?.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Star className="text-accent mt-0.5 flex-shrink-0" size={14} />
                      <span className="text-sm text-gray-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies && project.technologies.length > 3 && (
                    <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  <ExternalLink className="mr-2" size={16} />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary text-white hover:bg-blue-700">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}