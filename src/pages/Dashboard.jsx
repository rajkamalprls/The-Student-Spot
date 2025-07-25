import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { BellIcon, UserIcon, BriefcaseIcon, CalendarIcon, BookOpenIcon } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome back, Rajkamal!</h1>
        <div className="flex space-x-4 items-center">
          <BellIcon className="w-6 h-6" />
          <UserIcon className="w-6 h-6" />
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-4 gap-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardContent className="p-4">
                <p className="font-medium text-lg">Profile Completion</p>
                <p className="text-2xl font-bold mt-2">85%</p>
                <Button variant="outline" className="mt-4">Complete Profile</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="font-medium text-lg">Applications</p>
                <p className="text-2xl font-bold mt-2">3 Submitted</p>
                <Button variant="outline" className="mt-4">View Applications</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="font-medium text-lg">NCAT Rank</p>
                <p className="text-2xl font-bold mt-2">AIR 157</p>
                <Button variant="outline" className="mt-4">View Leaderboard</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="opportunities">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card>
              <CardContent className="p-4">
                <BriefcaseIcon className="mb-2" />
                <p className="font-bold">Zomato Campus Program</p>
                <p className="text-sm text-muted">Apply by July 28, 2025</p>
                <Button className="mt-4">Apply Now</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <BriefcaseIcon className="mb-2" />
                <p className="font-bold">EY Virtual Experience</p>
                <p className="text-sm text-muted">Self-paced</p>
                <Button className="mt-4">Explore</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="events">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card>
              <CardContent className="p-4">
                <CalendarIcon className="mb-2" />
                <p className="font-bold">Canva Workshop</p>
                <p className="text-sm text-muted">July 27, 2025</p>
                <Button className="mt-4">Register</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <CalendarIcon className="mb-2" />
                <p className="font-bold">Freelancing 101</p>
                <p className="text-sm text-muted">August 1, 2025</p>
                <Button className="mt-4">Join</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="community">
          <div className="space-y-4 mt-4">
            <Card>
              <CardContent className="p-4">
                <p className="font-bold text-lg">Join Our Platforms</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><a href="https://chat.whatsapp.com/LxA5xaAdlKp3nvZmIGxLcp" target="_blank" className="text-blue-600 underline">WhatsApp Community</a></li>
                  <li><a href="https://t.me/thestudentspot" target="_blank" className="text-blue-600 underline">Telegram</a></li>
                  <li><a href="https://www.instagram.com/the_studentspot" target="_blank" className="text-blue-600 underline">Instagram</a></li>
                  <li><a href="https://www.linkedin.com/company/thestudentspot" target="_blank" className="text-blue-600 underline">LinkedIn</a></li>
                  <li><a href="https://youtube.com/@thestudentspot" target="_blank" className="text-blue-600 underline">YouTube</a></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
