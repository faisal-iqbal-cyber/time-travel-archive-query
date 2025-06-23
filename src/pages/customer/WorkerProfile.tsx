
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WorkerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock worker data
  const worker = {
    id: 1,
    name: "Ahmed Hassan",
    skills: ["Plumber", "Electrician"],
    rate: 500,
    rating: 4.8,
    location: "Lahore",
    experience: 5,
    available: true,
    image: "👨‍🔧",
    bio: "Experienced plumber and electrician with 5+ years of professional experience. Specializing in residential and commercial repairs.",
    reviews: [
      { id: 1, client: "Sara Khan", rating: 5, comment: "Excellent work! Fixed my kitchen plumbing perfectly." },
      { id: 2, client: "Ali Ahmed", rating: 4, comment: "Professional and timely service." }
    ],
    sampleWork: ["🔧", "⚡", "🚿"] // Mock images
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-4xl">{worker.image}</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{worker.name}</h1>
                <p className="text-gray-600">{worker.location}</p>
                <div className="flex items-center justify-center mt-2">
                  <span className="text-yellow-500">⭐</span>
                  <span className="ml-1 font-semibold">{worker.rating}</span>
                  <span className="text-gray-500 ml-1">({worker.reviews.length} reviews)</span>
                </div>
              </div>
              <div className="flex justify-center">
                <Badge 
                  variant={worker.available ? "default" : "secondary"}
                  className="px-3 py-1"
                >
                  {worker.available ? "Available" : "Busy"}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills & Rate */}
        <Card>
          <CardHeader>
            <CardTitle>Skills & Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Services</p>
                <div className="flex flex-wrap gap-2">
                  {worker.skills.map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Hourly Rate</span>
                <span className="font-bold text-blue-600">₹{worker.rate}/hr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Experience</span>
                <span className="font-semibold">{worker.experience} years</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{worker.bio}</p>
          </CardContent>
        </Card>

        {/* Sample Work */}
        <Card>
          <CardHeader>
            <CardTitle>Sample Work</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {worker.sampleWork.map((work, index) => (
                <div key={index} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{work}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reviews */}
        <Card>
          <CardHeader>
            <CardTitle>Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {worker.reviews.map((review) => (
                <div key={review.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold">{review.client}</span>
                    <div className="flex items-center">
                      <span className="text-yellow-500">⭐</span>
                      <span className="ml-1 text-sm">{review.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => navigate(`/chat/${worker.id}`)}
          >
            Message
          </Button>
          <Button 
            className="flex-1"
            disabled={!worker.available}
            onClick={() => navigate(`/customer/hire/${worker.id}`)}
          >
            {worker.available ? "Hire Now" : "Unavailable"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkerProfile;
