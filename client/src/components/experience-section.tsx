import { useQuery } from "@tanstack/react-query";
import { Building, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const { data: experiences, isLoading } = useQuery({
    queryKey: ["/api/experiences"],
  });

  if (isLoading) {
    return (
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded animate-pulse mb-4 max-w-xs mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse max-w-md mx-auto"></div>
          </div>
          <div className="space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-light rounded-xl p-6 animate-pulse">
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
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-medium">
            Over 4 years of mobile development experience across various industries
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences?.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-32 bg-gray-300"></div>
              )}
              
              <div className="bg-gray-light rounded-xl p-6 ml-14 relative">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Building className="text-white" size={20} />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">{experience.position}</h3>
                    <div className="flex items-center space-x-4 text-gray-medium mb-2">
                      <div className="flex items-center space-x-1">
                        <Building size={16} />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-primary">
                      <Calendar size={16} />
                      <span className="font-medium">
                        {experience.startDate} - {experience.endDate || "Present"}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-medium mb-4">{experience.description}</p>
                
                <div className="space-y-2">
                  {experience.achievements?.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-gray-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}