
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockWorkers = [
  {
    id: 1,
    name: "Ahmed Hassan",
    skills: ["Plumber", "Electrician"],
    rate: 500,
    rating: 4.8,
    location: "Lahore",
    experience: 5,
    available: true,
    image: "👨‍🔧"
  },
  {
    id: 2,
    name: "Muhammad Ali",
    skills: ["Plumber"],
    rate: 400,
    rating: 4.6,
    location: "Karachi",
    experience: 3,
    available: true,
    image: "👷‍♂️"
  },
  {
    id: 3,
    name: "Hassan Sheikh",
    skills: ["Plumber", "Carpenter"],
    rate: 600,
    rating: 4.9,
    location: "Islamabad",
    experience: 8,
    available: false,
    image: "👨‍🔧"
  },
];

const ServiceBrowsing = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const filteredWorkers = mockWorkers.filter(worker => 
    worker.skills.some(skill => 
      skill.toLowerCase().includes(category?.toLowerCase() || "")
    )
  );

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 capitalize">{category} Workers</h1>
          <p className="text-gray-600">{filteredWorkers.length} workers available</p>
        </div>

        <div className="space-y-4">
          {filteredWorkers.map((worker) => (
            <Card key={worker.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{worker.image}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{worker.name}</h3>
                        <p className="text-sm text-gray-600">{worker.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-600">₹{worker.rate}/hr</p>
                        <div className="flex items-center">
                          <span className="text-yellow-500">⭐</span>
                          <span className="text-sm ml-1">{worker.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {worker.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        {worker.experience} years exp.
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => navigate(`/customer/worker/${worker.id}`)}
                        >
                          View Profile
                        </Button>
                        <Button 
                          size="sm"
                          disabled={!worker.available}
                          onClick={() => navigate(`/customer/hire/${worker.id}`)}
                        >
                          {worker.available ? "Hire Now" : "Unavailable"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBrowsing;
