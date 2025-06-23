
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const WorkerDashboard = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [activeTab, setActiveTab] = useState("pending");

  const mockRequests = [
    { id: 1, client: "Ahmed Ali", service: "Plumbing", status: "pending", rate: 500, location: "Lahore" },
    { id: 2, client: "Sara Khan", service: "Electrical", status: "in-progress", rate: 600, location: "Karachi" },
    { id: 3, client: "Hassan Sheikh", service: "Carpentry", status: "completed", rate: 800, location: "Islamabad" },
  ];

  const filteredRequests = mockRequests.filter(req => 
    activeTab === "pending" ? req.status === "pending" :
    activeTab === "progress" ? req.status === "in-progress" :
    req.status === "completed"
  );

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Profile Summary */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">👷‍♂️</span>
              </div>
              <div>
                <CardTitle className="text-xl">Muhammad Hassan</CardTitle>
                <p className="text-gray-600">Plumber, Electrician</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="ml-2 text-sm text-gray-600">(4.8)</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Label htmlFor="availability">Available for Work</Label>
              <Switch
                id="availability"
                checked={isAvailable}
                onCheckedChange={setIsAvailable}
              />
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">24</div>
              <div className="text-sm text-gray-600">Jobs Done</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">₹12,500</div>
              <div className="text-sm text-gray-600">This Month</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">4.8</div>
              <div className="text-sm text-gray-600">Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Job Requests */}
        <Card>
          <CardHeader>
            <CardTitle>Job Requests</CardTitle>
            <div className="flex space-x-1">
              {["pending", "progress", "completed"].map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab(tab)}
                  className="capitalize"
                >
                  {tab === "progress" ? "In Progress" : tab}
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredRequests.map((request) => (
                <Card key={request.id} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{request.client}</h4>
                        <p className="text-sm text-gray-600">{request.service}</p>
                        <p className="text-sm text-gray-500">{request.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₹{request.rate}/hr</p>
                        <Badge variant={
                          request.status === "pending" ? "secondary" :
                          request.status === "in-progress" ? "default" : "outline"
                        }>
                          {request.status}
                        </Badge>
                      </div>
                    </div>
                    {request.status === "pending" && (
                      <div className="flex space-x-2 mt-3">
                        <Button size="sm" className="flex-1">Accept</Button>
                        <Button size="sm" variant="outline" className="flex-1">Decline</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkerDashboard;
