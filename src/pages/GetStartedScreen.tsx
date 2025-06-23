
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const GetStartedScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Worker Illustration Placeholder */}
        <div className="bg-blue-100 rounded-3xl p-8 mb-8">
          <div className="bg-blue-200 rounded-full w-32 h-32 mx-auto flex items-center justify-center">
            <div className="text-6xl">👷‍♂️</div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to WorkerHire</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Find skilled professionals for your needs or showcase your expertise to earn money. 
            Connect, work, and grow together.
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={() => navigate("/user-selection")}
            className="w-full h-14 text-lg font-semibold bg-blue-600 hover:bg-blue-700"
          >
            Get Started
            <ArrowUp className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedScreen;
