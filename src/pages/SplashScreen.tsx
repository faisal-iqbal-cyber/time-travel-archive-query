
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wrench } from "lucide-react";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/get-started");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <div className="bg-white rounded-full p-6 mb-8 mx-auto w-24 h-24 flex items-center justify-center shadow-2xl animate-pulse">
          <Wrench className="w-12 h-12 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">WorkerHire</h1>
        <p className="text-blue-100 text-lg">Connecting Skills with Opportunities</p>
        <div className="mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
