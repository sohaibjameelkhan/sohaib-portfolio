import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { FileText, TableIcon, MessageSquare, Trello } from "lucide-react";

export default function AdvancedAnalytics() {
  const { data: analytics } = useQuery({
    queryKey: ["/api/analytics/1"],
  });

  const metrics = analytics?.metrics || {
    timeSavedHours: 32.5,
    contentCreated: 147,
    weeklyMeetings: 12,
    completedActions: 89,
    pendingActions: 23
  };

  const teamPerformance = [
    { name: "Sarah Johnson", initials: "SJ", score: 92, color: "primary" },
    { name: "Mike Chen", initials: "MC", score: 87, color: "accent" },
    { name: "Alex Rodriguez", initials: "AR", score: 95, color: "secondary" }
  ];

  const mostDiscussedTopics = ["Content Strategy", "Video Production", "Analytics"];
  const actionItemTypes = [
    { type: "Content Creation", percentage: 45 },
    { type: "Research", percentage: 28 },
    { type: "Outreach", percentage: 27 }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">Advanced Analytics & Impact Measurement</h2>
          <p className="text-lg text-gray-medium max-w-3xl mx-auto">
            Track your meeting effectiveness, action item completion rates, and content creation productivity with comprehensive analytics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Productivity Metrics */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-dark mb-6">Productivity Impact</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-medium">Time Saved</span>
                <span className="text-lg font-bold text-accent">{metrics.timeSavedHours} hrs</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-medium">Content Created</span>
                <span className="text-lg font-bold text-primary">{metrics.contentCreated} pieces</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '73%' }}></div>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-medium">Action Completion</span>
                <span className="text-lg font-bold text-secondary">{analytics?.completionRate || "94.2"}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-secondary h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                <p className="text-sm font-medium text-accent">↗ 23% increase in productivity</p>
                <p className="text-xs text-gray-medium mt-1">Compared to last month</p>
              </div>
            </div>
          </div>
          
          {/* Team Performance */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-dark mb-6">Team Performance</h3>
            
            <div className="space-y-4">
              {teamPerformance.map((member) => (
                <div key={member.name} className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-${member.color}/10 rounded-full flex items-center justify-center`}>
                    <span className={`text-sm font-bold text-${member.color}`}>{member.initials}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-dark">{member.name}</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-1.5">
                        <div 
                          className={`bg-${member.color} h-1.5 rounded-full transition-all duration-300`}
                          style={{ width: `${member.score}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-medium">{member.score}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm font-medium text-dark">Team Average</p>
                <p className="text-xl font-bold text-primary">91.3%</p>
                <p className="text-xs text-accent">+5.7% from last week</p>
              </div>
            </div>
          </div>
          
          {/* Content Insights */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-dark mb-6">Content Insights</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-medium">Most Discussed Topics</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {mostDiscussedTopics.map((topic, index) => {
                    const colors = ['bg-primary/10 text-primary', 'bg-accent/10 text-accent', 'bg-secondary/10 text-secondary'];
                    return (
                      <span key={topic} className={`${colors[index]} text-xs px-2 py-1 rounded-full`}>
                        {topic}
                      </span>
                    );
                  })}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-medium">Meeting Sentiment</p>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-accent">😊</span>
                    ))}
                    <span className="text-gray-300">😐</span>
                  </div>
                  <span className="text-sm font-medium text-dark">{analytics?.productivityScore || "8.4"}/10</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-medium">Action Item Types</p>
                <div className="space-y-2 mt-2">
                  {actionItemTypes.map((item) => (
                    <div key={item.type} className="flex items-center justify-between">
                      <span className="text-xs text-gray-medium">{item.type}</span>
                      <span className="text-xs font-medium">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Export & Sharing Options */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-dark mb-6">Export & Integration</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="bg-primary text-white hover:bg-blue-700 p-6 h-auto flex-col space-y-2">
              <FileText size={24} />
              <span className="text-sm">Export PDF Report</span>
            </Button>
            
            <Button className="bg-accent text-white hover:bg-green-700 p-6 h-auto flex-col space-y-2">
              <TableIcon size={24} />
              <span className="text-sm">Export to Excel</span>
            </Button>
            
            <Button className="bg-secondary text-white hover:bg-amber-700 p-6 h-auto flex-col space-y-2">
              <MessageSquare size={24} />
              <span className="text-sm">Send to Slack</span>
            </Button>
            
            <Button className="bg-purple-600 text-white hover:bg-purple-700 p-6 h-auto flex-col space-y-2">
              <Trello size={24} />
              <span className="text-sm">Create Trello Cards</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
