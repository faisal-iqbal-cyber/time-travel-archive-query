
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUp } from "lucide-react";

const skills = [
  { id: "plumber", name: "Plumber", icon: "🔧" },
  { id: "electrician", name: "Electrician", icon: "⚡" },
  { id: "carpenter", name: "Carpenter", icon: "🔨" },
  { id: "painter", name: "Painter", icon: "🎨" },
  { id: "cleaner", name: "Cleaner", icon: "🧹" },
  { id: "gardener", name: "Gardener", icon: "🌱" },
  { id: "mechanic", name: "Mechanic", icon: "🔧" },
  { id: "cook", name: "Cook", icon: "👨‍🍳" },
];

const SkillSelection = () => {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleSkillToggle = (skillId: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleContinue = () => {
    localStorage.setItem('workerSkills', JSON.stringify(selectedSkills));
    navigate("/worker/details");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800">Select Your Skills</CardTitle>
            <p className="text-gray-600">Choose the services you can provide</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.map((skill) => (
                <Card 
                  key={skill.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedSkills.includes(skill.id) 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'hover:border-gray-300'
                  }`}
                  onClick={() => handleSkillToggle(skill.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <h3 className="font-semibold text-sm">{skill.name}</h3>
                    <div className="mt-3 flex justify-center">
                      <Checkbox 
                        checked={selectedSkills.includes(skill.id)}
                        onChange={() => handleSkillToggle(skill.id)}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button 
              onClick={handleContinue}
              disabled={selectedSkills.length === 0}
              className="w-full h-12 text-lg"
            >
              Continue ({selectedSkills.length} selected)
              <ArrowUp className="ml-2 w-5 h-5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SkillSelection;
