import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Mic, Square, Download, Share } from "lucide-react";

export default function TranscriptionInterface() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioLevels, setAudioLevels] = useState([20, 35, 50, 28, 45, 32, 38]);

  const { data: actionItems } = useQuery({
    queryKey: ["/api/action-items/1"],
  });

  // Simulate recording timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  // Simulate audio visualizer
  useEffect(() => {
    const interval = setInterval(() => {
      setAudioLevels(levels => 
        levels.map(() => Math.random() * 50 + 10)
      );
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-accent/20 text-accent';
      case 'in_progress': return 'bg-secondary/20 text-secondary';
      default: return 'bg-primary/20 text-primary';
    }
  };

  return (
    <>
      <div className="lg:col-span-2">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-dark">Live Transcription</h2>
            <div className="flex items-center space-x-3">
              <span className="flex items-center text-sm text-gray-medium">
                <div className={`w-2 h-2 rounded-full mr-2 ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-gray-400'}`}></div>
                {isRecording ? `Recording: ${formatTime(recordingTime)}` : 'Ready to record'}
              </span>
              <Button
                onClick={() => setIsRecording(!isRecording)}
                className={isRecording ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-blue-700"}
              >
                {isRecording ? <Square className="mr-2" size={16} /> : <Mic className="mr-2" size={16} />}
                {isRecording ? 'Stop' : 'Start'}
              </Button>
            </div>
          </div>
          
          {/* Live Audio Visualizer */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-1 h-16">
              {audioLevels.map((height, index) => (
                <div
                  key={index}
                  className={`w-1 bg-primary rounded-full transition-all duration-200 ${isRecording ? 'animate-pulse' : ''}`}
                  style={{ height: isRecording ? `${height}px` : '10px' }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Transcript Display */}
          <div className="bg-gray-50 rounded-lg p-4 h-80 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-xs text-gray-medium font-medium bg-white px-2 py-1 rounded">12:34</span>
                <div>
                  <p className="text-sm font-medium text-dark">Sarah Johnson</p>
                  <p className="text-gray-medium">Let's review the content calendar for next month. We need to finalize the video topics and schedule the recording sessions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-xs text-gray-medium font-medium bg-white px-2 py-1 rounded">12:36</span>
                <div>
                  <p className="text-sm font-medium text-dark">Mike Chen</p>
                  <p className="text-gray-medium">Great idea. <span className="bg-accent/20 text-accent px-1 rounded font-medium">Action item: I'll prepare the topic list by Friday</span> and share it with the team for review.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-xs text-gray-medium font-medium bg-white px-2 py-1 rounded">12:38</span>
                <div>
                  <p className="text-sm font-medium text-dark">Alex Rodriguez</p>
                  <p className="text-gray-medium">Perfect. <span className="bg-secondary/20 text-secondary px-1 rounded font-medium">Action item: I'll reach out to guest speakers</span> for the podcast episodes we discussed.</p>
                </div>
              </div>
              
              {isRecording && (
                <div className="flex items-start space-x-3 opacity-75">
                  <span className="text-xs text-gray-medium font-medium bg-white px-2 py-1 rounded">{formatTime(recordingTime)}</span>
                  <div>
                    <p className="text-sm font-medium text-dark">You</p>
                    <p className="text-gray-medium animate-pulse">Transcribing...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Items Sidebar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-dark mb-4">Detected Action Items</h3>
        <div className="space-y-3">
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-dark">Prepare topic list</p>
                <p className="text-xs text-gray-medium mt-1">Assigned to: Mike Chen</p>
                <p className="text-xs text-gray-medium">Due: Friday</p>
              </div>
              <Button size="sm" variant="ghost" className="text-accent hover:text-green-700 p-1">
                ✓
              </Button>
            </div>
          </div>
          
          <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-dark">Contact guest speakers</p>
                <p className="text-xs text-gray-medium mt-1">Assigned to: Alex Rodriguez</p>
                <p className="text-xs text-gray-medium">Due: Next week</p>
              </div>
              <Button size="sm" variant="ghost" className="text-secondary hover:text-amber-700 p-1">
                ⏰
              </Button>
            </div>
          </div>
          
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-dark">Schedule recording sessions</p>
                <p className="text-xs text-gray-medium mt-1">Assigned to: Team</p>
                <p className="text-xs text-gray-medium">Due: TBD</p>
              </div>
              <Button size="sm" variant="ghost" className="text-primary hover:text-blue-700 p-1">
                +
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-dark mb-3">Quick Actions</h4>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-sm text-gray-medium hover:bg-gray-100">
              <Download className="mr-2" size={14} />
              Export action items
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm text-gray-medium hover:bg-gray-100">
              <Share className="mr-2" size={14} />
              Share with team
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
