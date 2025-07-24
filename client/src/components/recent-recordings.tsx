import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Play, Download, Share, Calendar, Clock, Users, FileText } from "lucide-react";

export default function RecentRecordings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const { data: recordings, isLoading } = useQuery({
    queryKey: ["/api/recordings/1"],
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Team Meeting': return 'bg-primary/10 text-primary';
      case 'Client Call': return 'bg-secondary/10 text-secondary';
      case 'Brainstorming': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return `Today, ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    } else if (date.toDateString() === yesterday.toDateString()) {
      return `Yesterday, ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
      });
    }
  };

  if (isLoading) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-8 bg-gray-200 rounded animate-pulse mb-8"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-light border border-gray-200 rounded-xl p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const filteredRecordings = recordings?.filter((recording: any) => {
    const matchesSearch = recording.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || recording.type === filterType;
    return matchesSearch && matchesType;
  }) || [];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl font-bold text-dark">Recent Recordings</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search recordings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Team Meeting">Team Meetings</SelectItem>
                <SelectItem value="Client Call">Client Calls</SelectItem>
                <SelectItem value="Brainstorming">Brainstorming</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {filteredRecordings.map((recording: any) => (
            <div key={recording.id} className="bg-gray-light border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-dark">{recording.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(recording.type)}`}>
                      {recording.type}
                    </span>
                    <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">
                      {recording.actionItemsCount || 0} Action Items
                    </span>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-medium">
                    <span className="flex items-center">
                      <Calendar className="mr-1" size={14} />
                      {formatDate(recording.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1" size={14} />
                      {recording.duration} minutes
                    </span>
                    <span className="flex items-center">
                      <Users className="mr-1" size={14} />
                      {recording.participants} participants
                    </span>
                    <span className="flex items-center">
                      <FileText className="mr-1" size={14} />
                      {recording.wordCount?.toLocaleString()} words
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="ghost" size="sm">
                    <Play size={16} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download size={16} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredRecordings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-medium">No recordings found matching your criteria.</p>
          </div>
        )}
        
        {filteredRecordings.length > 0 && (
          <div className="mt-8 text-center">
            <Button variant="outline">
              Load More Recordings
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
