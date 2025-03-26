
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  DollarSign, 
  Users, 
  BarChart3, 
  ArrowUp, 
  MessageSquare,
  Star,
  ChevronRight,
  Video,
  ArrowUpRight
} from "lucide-react";

// Mock data for dashboard charts and statistics
const mockAppointments = [
  {
    id: 1,
    client: {
      name: "Emma Thompson",
      avatar: "https://i.pravatar.cc/300?img=32"
    },
    date: "Today, 2:00 PM",
    duration: "50 min",
    type: "Video",
    status: "upcoming"
  },
  {
    id: 2,
    client: {
      name: "John Martinez",
      avatar: "https://i.pravatar.cc/300?img=15"
    },
    date: "Today, 4:00 PM",
    duration: "50 min",
    type: "Video",
    status: "upcoming"
  },
  {
    id: 3,
    client: {
      name: "Sophia Chen",
      avatar: "https://i.pravatar.cc/300?img=20"
    },
    date: "Tomorrow, 10:00 AM",
    duration: "50 min",
    type: "In-person",
    status: "upcoming"
  },
  {
    id: 4,
    client: {
      name: "David Wilson",
      avatar: "https://i.pravatar.cc/300?img=22"
    },
    date: "Tomorrow, 3:00 PM",
    duration: "50 min",
    type: "Video",
    status: "upcoming"
  }
];

const mockStats = {
  revenue: {
    value: "$5,240",
    change: "+12%",
    trend: "up"
  },
  clients: {
    value: "27",
    change: "+3",
    trend: "up"
  },
  sessions: {
    value: "48",
    change: "+7",
    trend: "up"
  },
  rating: {
    value: "4.9",
    reviews: "32"
  }
};

const mockClients = [
  {
    id: 1,
    name: "Emma Thompson",
    avatar: "https://i.pravatar.cc/300?img=32",
    lastSession: "Today",
    nextSession: "May 15, 2023",
    status: "Active",
    sessions: 8
  },
  {
    id: 2,
    name: "John Martinez",
    avatar: "https://i.pravatar.cc/300?img=15",
    lastSession: "Apr 30, 2023",
    nextSession: "Today",
    status: "Active",
    sessions: 12
  },
  {
    id: 3,
    name: "Sophia Chen",
    avatar: "https://i.pravatar.cc/300?img=20",
    lastSession: "Apr 28, 2023",
    nextSession: "Tomorrow",
    status: "Active",
    sessions: 5
  },
  {
    id: 4,
    name: "David Wilson",
    avatar: "https://i.pravatar.cc/300?img=22",
    lastSession: "Apr 25, 2023",
    nextSession: "Tomorrow",
    status: "Active",
    sessions: 15
  },
  {
    id: 5,
    name: "Alex Rodriguez",
    avatar: "https://i.pravatar.cc/300?img=25",
    lastSession: "Apr 20, 2023",
    nextSession: "May 18, 2023",
    status: "Active",
    sessions: 3
  }
];

const mockMessages = [
  {
    id: 1,
    client: {
      name: "Emma Thompson",
      avatar: "https://i.pravatar.cc/300?img=32"
    },
    message: "Hi Dr. Wilson, I wanted to ask about the homework exercises you recommended last session.",
    time: "10:30 AM",
    unread: true
  },
  {
    id: 2,
    client: {
      name: "John Martinez",
      avatar: "https://i.pravatar.cc/300?img=15"
    },
    message: "Thank you for the session yesterday. The techniques are already helping.",
    time: "Yesterday",
    unread: true
  },
  {
    id: 3,
    client: {
      name: "Sophia Chen",
      avatar: "https://i.pravatar.cc/300?img=20"
    },
    message: "Do you have any resources on mindfulness you could share?",
    time: "2 days ago",
    unread: false
  }
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Dashboard</h1>
          <p className="text-slate-600">Welcome back, Dr. Wilson</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">
                Monthly Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <DollarSign className="h-6 w-6 text-slate-400 mr-2" />
                  <div className="text-2xl font-bold">{mockStats.revenue.value}</div>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  {mockStats.revenue.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">
                Active Clients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-slate-400 mr-2" />
                  <div className="text-2xl font-bold">{mockStats.clients.value}</div>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  {mockStats.clients.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">
                Monthly Sessions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-slate-400 mr-2" />
                  <div className="text-2xl font-bold">{mockStats.sessions.value}</div>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  {mockStats.sessions.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">
                Client Rating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-400 fill-yellow-400 mr-2" />
                  <div className="text-2xl font-bold">{mockStats.rating.value}</div>
                </div>
                <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200">
                  {mockStats.rating.reviews} reviews
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Appointments */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <CardDescription>Your schedule for the next few days</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>View Calendar</span>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={appointment.client.avatar} />
                          <AvatarFallback>
                            {appointment.client.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-slate-900">{appointment.client.name}</p>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <span>{appointment.date}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>{appointment.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="bg-mindnest-50 text-mindnest-700 border-mindnest-200">
                          {appointment.type === "Video" ? (
                            <Video className="h-3 w-3 mr-1" />
                          ) : null}
                          {appointment.type}
                        </Badge>
                        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full mt-2">
                    View All Appointments
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Messages */}
          <div>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Messages</CardTitle>
                  <CardDescription>
                    You have {mockMessages.filter(m => m.unread).length} unread messages
                  </CardDescription>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockMessages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`p-3 rounded-lg hover:bg-slate-50 transition-colors ${
                        message.unread ? "bg-mindnest-50" : ""
                      }`}
                    >
                      <div className="flex gap-3 mb-2">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={message.client.avatar} />
                          <AvatarFallback>
                            {message.client.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <p className="font-medium text-slate-900">{message.client.name}</p>
                            <div className="flex items-center">
                              <span className="text-xs text-slate-500">{message.time}</span>
                              {message.unread && (
                                <div className="ml-2 w-2 h-2 rounded-full bg-mindnest-600"></div>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 line-clamp-2">{message.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full mt-2">
                    Open Inbox
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Clients */}
        <Card>
          <CardHeader>
            <CardTitle>Active Clients</CardTitle>
            <CardDescription>
              Recent activity and upcoming sessions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-slate-500 border-b border-slate-200">
                    <th className="p-3 font-medium">Client</th>
                    <th className="p-3 font-medium">Status</th>
                    <th className="p-3 font-medium">Last Session</th>
                    <th className="p-3 font-medium">Next Session</th>
                    <th className="p-3 font-medium">Total Sessions</th>
                    <th className="p-3 font-medium sr-only">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockClients.map((client) => (
                    <tr key={client.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={client.avatar} />
                            <AvatarFallback>
                              {client.name.split(" ").map((n) => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium text-slate-900">{client.name}</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                          {client.status}
                        </Badge>
                      </td>
                      <td className="p-3 text-slate-700">{client.lastSession}</td>
                      <td className="p-3 text-slate-700">{client.nextSession}</td>
                      <td className="p-3 text-slate-700">{client.sessions}</td>
                      <td className="p-3">
                        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-center">
              <Button variant="outline">
                View All Clients
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
