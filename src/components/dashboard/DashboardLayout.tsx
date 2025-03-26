
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { 
  Home, 
  Calendar, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  ChevronRight,
  Bell,
  UserCircle
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: Home },
    { path: "/dashboard/appointments", label: "Appointments", icon: Calendar },
    { path: "/dashboard/clients", label: "Clients", icon: Users },
    { path: "/dashboard/documents", label: "Documents", icon: FileText },
    { path: "/dashboard/settings", label: "Settings", icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 h-screen fixed">
        <div className="p-6 border-b border-slate-100">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold bg-gradient-to-r from-mindnest-600 to-mindnest-800 bg-clip-text text-transparent">
              MindNest
            </span>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-mindnest-50 text-mindnest-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
                {isActive(item.path) && (
                  <ChevronRight className="h-4 w-4 ml-auto" />
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center px-4 py-3">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src="https://i.pravatar.cc/300?img=8" />
              <AvatarFallback className="bg-mindnest-100 text-mindnest-800">
                JW
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">
                Dr. James Wilson
              </p>
              <p className="text-xs text-slate-500 truncate">
                james.wilson@example.com
              </p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            className="w-full justify-start mt-2 text-slate-600 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign out
          </Button>
        </div>
      </aside>

      {/* Sidebar - Mobile */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={toggleSidebar}></div>
        <aside
          className={`absolute top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-semibold bg-gradient-to-r from-mindnest-600 to-mindnest-800 bg-clip-text text-transparent">
                MindNest
              </span>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-mindnest-50 text-mindnest-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                  onClick={toggleSidebar}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.label}
                  {isActive(item.path) && (
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          <div className="p-4 border-t border-slate-200">
            <div className="flex items-center px-4 py-3">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src="https://i.pravatar.cc/300?img=8" />
                <AvatarFallback className="bg-mindnest-100 text-mindnest-800">
                  JW
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">
                  Dr. James Wilson
                </p>
                <p className="text-xs text-slate-500 truncate">
                  james.wilson@example.com
                </p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              className="w-full justify-start mt-2 text-slate-600 hover:text-red-600 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign out
            </Button>
          </div>
        </aside>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Topbar */}
        <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
          <div className="flex h-16 items-center justify-between px-4 md:px-6">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="md:hidden mr-2"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-lg font-semibold text-slate-900">
                Therapist Dashboard
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>

              <div className="hidden sm:flex items-center">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://i.pravatar.cc/300?img=8" />
                  <AvatarFallback className="bg-mindnest-100 text-mindnest-800">
                    JW
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6 h-[calc(100vh-4rem)] overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
