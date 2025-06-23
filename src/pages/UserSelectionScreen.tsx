
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const UserSelectionScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="max-w-md mx-auto pt-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Path</h1>
          <p className="text-gray-600">How would you like to use WorkerHire?</p>
        </div>

        <div className="space-y-6">
          <Card className="p-0 overflow-hidden border-2 border-transparent hover:border-blue-200 transition-all duration-200 hover:shadow-lg">
            <Button
              onClick={() => navigate("/worker/signup")}
              className="w-full h-auto p-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
              variant="ghost"
            >
              <div className="text-center space-y-4">
                <div className="text-6xl">💪</div>
                <div>
                  <h3 className="text-xl font-bold">Start as Worker</h3>
                  <p className="text-green-100 mt-2">Showcase your skills and earn money</p>
                </div>
              </div>
            </Button>
          </Card>

          <Card className="p-0 overflow-hidden border-2 border-transparent hover:border-purple-200 transition-all duration-200 hover:shadow-lg">
            <Button
              onClick={() => navigate("/customer/signup")}
              className="w-full h-auto p-8 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
              variant="ghost"
            >
              <div className="text-center space-y-4">
                <div className="text-6xl">🏠</div>
                <div>
                  <h3 className="text-xl font-bold">Hire a Worker</h3>
                  <p className="text-purple-100 mt-2">Find skilled professionals for your needs</p>
                </div>
              </div>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserSelectionScreen;
