
import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "login" | "signup";
}

const AuthModal = ({ isOpen, onClose, defaultTab = "login" }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">(defaultTab);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isTherapist, setIsTherapist] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with:", { email, password });
    // Handle login logic here
    // For demo purposes, we'll just close the modal
    onClose();
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up with:", { name, email, password, isTherapist });
    // Handle signup logic here
    // For demo purposes, we'll just close the modal
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden rounded-2xl">
        <DialogHeader className="pt-6 px-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-semibold">
              {activeTab === "login" ? "Welcome back" : "Create account"}
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription>
            {activeTab === "login" 
              ? "Sign in to your MindNest account" 
              : "Join MindNest to connect with therapists"}
          </DialogDescription>
        </DialogHeader>

        <Tabs 
          defaultValue={activeTab} 
          value={activeTab} 
          onValueChange={(value) => setActiveTab(value as "login" | "signup")}
          className="w-full"
        >
          <div className="px-6">
            <TabsList className="grid grid-cols-2 w-full mb-6">
              <TabsTrigger value="login">Log in</TabsTrigger>
              <TabsTrigger value="signup">Sign up</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="login" className="m-0">
            <form onSubmit={handleLogin} className="p-6 pt-2 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-login">Email</Label>
                <Input 
                  id="email-login" 
                  type="email" 
                  placeholder="your@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password-login">Password</Label>
                  <a href="#" className="text-xs text-mindnest-600 hover:text-mindnest-800">
                    Forgot password?
                  </a>
                </div>
                <Input 
                  id="password-login" 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Log in</Button>
              <div className="text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <button 
                  type="button"
                  onClick={() => setActiveTab("signup")}
                  className="text-mindnest-600 hover:text-mindnest-800"
                >
                  Sign up
                </button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="m-0">
            <form onSubmit={handleSignup} className="p-6 pt-2 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name-signup">Full Name</Label>
                <Input 
                  id="name-signup" 
                  type="text" 
                  placeholder="Your Name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-signup">Email</Label>
                <Input 
                  id="email-signup" 
                  type="email" 
                  placeholder="your@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-signup">Password</Label>
                <Input 
                  id="password-signup" 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="therapist" 
                  checked={isTherapist}
                  onCheckedChange={(checked) => setIsTherapist(checked as boolean)}
                />
                <label
                  htmlFor="therapist"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I'm a mental health professional
                </label>
              </div>
              <Button type="submit" className="w-full">Create account</Button>
              <div className="text-center text-sm text-slate-500">
                Already have an account?{" "}
                <button 
                  type="button"
                  onClick={() => setActiveTab("login")}
                  className="text-mindnest-600 hover:text-mindnest-800"
                >
                  Log in
                </button>
              </div>
            </form>
          </TabsContent>
        </Tabs>

        <div className="p-6 bg-slate-50 border-t border-slate-200">
          <p className="text-xs text-center text-slate-500">
            By continuing, you agree to MindNest's <a href="/terms" className="text-mindnest-600 hover:text-mindnest-800">Terms of Service</a> and <a href="/privacy" className="text-mindnest-600 hover:text-mindnest-800">Privacy Policy</a>.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
