import { useQuery } from "@tanstack/react-query";
import { BarChart3 } from "lucide-react";

export default function AnalyticsDashboard() {
  const { data: insights } = useQuery({
    queryKey: ["/api/insights/1"],
  });

  const { data: analytics } = useQuery({
    queryKey: ["/api/analytics/1"],
  });

  const speakingDistribution = insights?.speakingTimeDistribution || {
    "Sarah Johnson": 45,
    "Mike Chen": 32,
    "Alex Rodriguez": 23
  };

  const weeklyMetrics = analytics?.metrics || {
    weeklyMeetings: 12,
    completedActions: 89,
    pendingActions: 23
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Meeting Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-dark mb-6">Meeting Insights</h3>
        
        {/* Speaking Time Distribution */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-dark mb-3">Speaking Time Distribution</h4>
          <div className="space-y-3">
            {Object.entries(speakingDistribution).map(([speaker, percentage]) => (
              <div key={speaker} className="flex items-center justify-between">
                <span className="text-sm text-gray-medium">{speaker}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-dark">{percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-medium">Avg. Words/Min</p>
            <p className="text-xl font-bold text-dark">{insights?.averageWordsPerMinute || 156}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-medium">Sentiment Score</p>
            <p className="text-xl font-bold text-accent">{insights?.sentimentScore || "8.7"}/10</p>
          </div>
        </div>
      </div>
      
      {/* Weekly Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-dark mb-6">Weekly Performance</h3>
        
        {/* Chart Placeholder */}
        <div className="bg-gray-50 rounded-lg p-4 h-48 flex items-center justify-center mb-6">
          <div className="text-center">
            <BarChart3 className="text-3xl text-gray-400 mb-2 mx-auto" size={48} />
            <p className="text-sm text-gray-medium">Action Items Completion Trend</p>
          </div>
        </div>
        
        {/* Performance Summary */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">{weeklyMetrics.weeklyMeetings}</p>
            <p className="text-xs text-gray-medium">Meetings</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">{weeklyMetrics.completedActions}</p>
            <p className="text-xs text-gray-medium">Completed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-secondary">{weeklyMetrics.pendingActions}</p>
            <p className="text-xs text-gray-medium">Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
}
