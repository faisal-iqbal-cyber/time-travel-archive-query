
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HireRequest = () => {
  const { workerId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    description: "",
    estimatedHours: "",
    preferredDate: "",
    preferredTime: "",
    urgency: "normal"
  });

  const worker = {
    name: "Ahmed Hassan",
    rate: 500,
    skills: ["Plumber", "Electrician"],
    image: "👨‍🔧"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert("Hire request sent successfully!");
    navigate("/customer/home");
  };

  const estimatedCost = formData.estimatedHours ? 
    parseInt(formData.estimatedHours) * worker.rate : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Worker Summary */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">{worker.image}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{worker.name}</h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {worker.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-blue-600 font-semibold mt-1">₹{worker.rate}/hr</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hire Request Form */}
        <Card>
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  placeholder="Describe the work you need done..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="estimatedHours">Estimated Hours</Label>
                <Input
                  id="estimatedHours"
                  name="estimatedHours"
                  type="number"
                  value={formData.estimatedHours}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 3"
                  min="1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date</Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <Input
                    id="preferredTime"
                    name="preferredTime"
                    type="time"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Urgency Level</Label>
                <div className="flex space-x-2">
                  {["normal", "urgent", "emergency"].map((level) => (
                    <Button
                      key={level}
                      type="button"
                      variant={formData.urgency === level ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFormData(prev => ({...prev, urgency: level}))}
                      className="capitalize"
                    >
                      {level}
                    </Button>
                  ))}
                </div>
              </div>

              {estimatedCost > 0 && (
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Estimated Cost</span>
                      <span className="text-2xl font-bold text-blue-600">
                        ₹{estimatedCost}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {formData.estimatedHours} hours × ₹{worker.rate}/hr
                    </p>
                  </CardContent>
                </Card>
              )}

              <Button type="submit" className="w-full h-12 text-lg">
                Send Hire Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HireRequest;
