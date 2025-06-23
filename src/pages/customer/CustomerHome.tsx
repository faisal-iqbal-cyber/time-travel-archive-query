
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { id: "plumber", name: "Plumber", icon: "🔧", color: "bg-blue-100" },
  { id: "electrician", name: "Electrician", icon: "⚡", color: "bg-yellow-100" },
  { id: "carpenter", name: "Carpenter", icon: "🔨", color: "bg-amber-100" },
  { id: "painter", name: "Painter", icon: "🎨", color: "bg-purple-100" },
  { id: "cleaner", name: "Cleaner", icon: "🧹", color: "bg-green-100" },
  { id: "gardener", name: "Gardener", icon: "🌱", color: "bg-emerald-100" },
  { id: "mechanic", name: "Mechanic", icon: "🔧", color: "bg-gray-100" },
  { id: "cook", name: "Cook", icon: "👨‍🍳", color: "bg-orange-100" },
];

const CustomerHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Find Workers</h1>
          <p className="text-gray-600">Choose a service category</p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <Card 
              key={service.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
              onClick={() => navigate(`/customer/browse/${service.id}`)}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-800">{service.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <Card>
            <CardContent className="p-4">
              <div className="text-center text-gray-500 py-8">
                <p>No recent activity</p>
                <p className="text-sm">Your hiring history will appear here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomerHome;
