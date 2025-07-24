import { useQuery } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const { data: personalInfo, isLoading } = useQuery({
    queryKey: ["/api/personal-info"],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! I'll get back to you soon.");
  };

  if (isLoading) {
    return (
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded animate-pulse mb-4 max-w-xs mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse max-w-md mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-medium">
            Ready to build your next mobile application? Get in touch!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-dark mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-dark">Email</p>
                    <a 
                      href={`mailto:${personalInfo?.email}`}
                      className="text-gray-medium hover:text-primary transition-colors"
                    >
                      {personalInfo?.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-dark">Phone</p>
                    <a 
                      href={`tel:${personalInfo?.phone}`}
                      className="text-gray-medium hover:text-accent transition-colors"
                    >
                      {personalInfo?.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-dark">Location</p>
                    <p className="text-gray-medium">{personalInfo?.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-dark mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <Button 
                  asChild
                  variant="outline" 
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <a href={personalInfo?.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={18} />
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline" 
                  size="sm"
                  className="border-dark text-dark hover:bg-dark hover:text-white"
                >
                  <a href={personalInfo?.github} target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-lg font-bold text-dark mb-4">Why Work With Me?</h4>
              <ul className="space-y-3 text-gray-medium">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>4+ years of mobile development expertise</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Proven track record with 20+ delivered apps</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Experience serving 50,000+ active users</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>100% on-time deployment record</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-dark mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Name</label>
                  <Input placeholder="Your name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Subject</label>
                <Input placeholder="Project inquiry" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary text-white hover:bg-blue-700">
                <Send className="mr-2" size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}