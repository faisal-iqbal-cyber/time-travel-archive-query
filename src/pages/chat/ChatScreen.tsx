
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp } from "lucide-react";

const mockMessages = [
  { id: 1, sender: "worker", message: "Hello! I'm available for the plumbing work.", time: "10:30 AM" },
  { id: 2, sender: "customer", message: "Great! When can you start?", time: "10:32 AM" },
  { id: 3, sender: "worker", message: "I can start tomorrow morning. What's the exact issue?", time: "10:35 AM" },
  { id: 4, sender: "customer", message: "Kitchen sink is leaking and the water pressure is low.", time: "10:40 AM" },
];

const ChatScreen = () => {
  const { recipientId } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(mockMessages);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: "customer",
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="max-w-md mx-auto w-full h-full flex flex-col">
        {/* Chat Header */}
        <Card className="rounded-none border-b">
          <CardHeader className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-lg">👨‍🔧</span>
              </div>
              <div>
                <CardTitle className="text-lg">Ahmed Hassan</CardTitle>
                <p className="text-sm text-green-600">Online</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "customer" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl ${
                  message.sender === "customer"
                    ? "bg-blue-500 text-white"
                    : "bg-white border"
                }`}
              >
                <p className="text-sm">{message.message}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === "customer" ? "text-blue-100" : "text-gray-500"
                }`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <Card className="rounded-none border-t">
          <CardContent className="p-4">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <ArrowUp className="w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChatScreen;
