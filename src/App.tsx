
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import GetStartedScreen from "./pages/GetStartedScreen";
import UserSelectionScreen from "./pages/UserSelectionScreen";
import WorkerSignup from "./pages/worker/WorkerSignup";
import SkillSelection from "./pages/worker/SkillSelection";
import WorkerDetailForm from "./pages/worker/WorkerDetailForm";
import WorkerDashboard from "./pages/worker/WorkerDashboard";
import CustomerSignup from "./pages/customer/CustomerSignup";
import CustomerHome from "./pages/customer/CustomerHome";
import ServiceBrowsing from "./pages/customer/ServiceBrowsing";
import WorkerProfile from "./pages/customer/WorkerProfile";
import HireRequest from "./pages/customer/HireRequest";
import FeedbackScreen from "./pages/customer/FeedbackScreen";
import ChatScreen from "./pages/chat/ChatScreen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/get-started" element={<GetStartedScreen />} />
          <Route path="/user-selection" element={<UserSelectionScreen />} />
          
          {/* Worker Flow */}
          <Route path="/worker/signup" element={<WorkerSignup />} />
          <Route path="/worker/skills" element={<SkillSelection />} />
          <Route path="/worker/details" element={<WorkerDetailForm />} />
          <Route path="/worker/dashboard" element={<WorkerDashboard />} />
          
          {/* Customer Flow */}
          <Route path="/customer/signup" element={<CustomerSignup />} />
          <Route path="/customer/home" element={<CustomerHome />} />
          <Route path="/customer/browse/:category" element={<ServiceBrowsing />} />
          <Route path="/customer/worker/:id" element={<WorkerProfile />} />
          <Route path="/customer/hire/:workerId" element={<HireRequest />} />
          <Route path="/customer/feedback/:requestId" element={<FeedbackScreen />} />
          
          {/* Chat */}
          <Route path="/chat/:recipientId" element={<ChatScreen />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
