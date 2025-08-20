import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import {
  User,
  BookOpen,
  Calendar,
  Briefcase,
  Award,
  TrendingUp,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  Target,
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, signOut, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Redirect if not logged in
  if (!user && !loading) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-16 h-16 border-4 border-orange-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Mock data for dashboard
  const stats = [
    { label: 'Courses Enrolled', value: '3', icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Events Attended', value: '12', icon: Calendar, color: 'bg-green-500' },
    { label: 'Applications Sent', value: '8', icon: Briefcase, color: 'bg-purple-500' },
    { label: 'Certificates Earned', value: '5', icon: Award, color: 'bg-orange-500' },
  ];

  const recentActivities = [
    { type: 'course', title: 'Completed React Fundamentals', time: '2 hours ago', icon: CheckCircle },
    { type: 'event', title: 'Attended Web3 Workshop', time: '1 day ago', icon: Calendar },
    { type: 'job', title: 'Applied to Frontend Developer role', time: '3 days ago', icon: Briefcase },
    { type: 'achievement', title: 'Earned JavaScript Certificate', time: '1 week ago', icon: Award },
  ];

  const upcomingEvents = [
    { title: 'AI/ML Workshop', date: 'Jan 25, 2025', time: '4:00 PM' },
    { title: 'Career Fair 2025', date: 'Jan 30, 2025', time: '10:00 AM' },
    { title: 'Resume Review Session', date: 'Feb 5, 2025', time: '6:00 PM' },
  ];

  const learningProgress = [
    { course: 'React Development', progress: 75, color: 'bg-blue-500' },
    { course: 'Data Science with Python', progress: 45, color: 'bg-green-500' },
    { course: 'Web3 Development', progress: 20, color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/favicon.png" alt="Logo" className="h-8 w-8 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="flex items-center space-x-3">
                <img
                  src={user?.user_metadata?.avatar_url || `https://ui-avatars.com/api/?name=${user?.email}&background=f97316&color=fff`}
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">
                  {user?.user_metadata?.full_name || user?.email?.split('@')[0]}
                </span>
              </div>
              <button
                onClick={handleSignOut}
                className="p-2 text-gray-400 hover:text-gray-600"
                title="Sign Out"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.user_metadata?.full_name?.split(' ')[0] || 'Student'}! 👋
          </h2>
          <p className="text-gray-600">
            Here's what's happening with your learning journey today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Learning Progress */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Learning Progress</h3>
                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {learningProgress.map((course, index) => (
                  <div key={course.course}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{course.course}</span>
                      <span className="text-sm text-gray-500">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${course.color}`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activities */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <activity.icon className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Events</h3>
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-orange-500 pl-4">
                    <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                    <p className="text-xs text-gray-500">{event.date} at {event.time}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center justify-center">
                View All Events
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-center">
                  <BookOpen className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm font-medium text-gray-700">Browse Courses</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-center">
                  <Briefcase className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm font-medium text-gray-700">Find Jobs</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-center">
                  <Calendar className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm font-medium text-gray-700">Join Events</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-center">
                  <User className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm font-medium text-gray-700">Update Profile</span>
                </button>
              </div>
            </motion.div>

            {/* Achievement Badge */}
            <motion.div
              className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl shadow-sm p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 mr-2" />
                <h3 className="text-lg font-semibold">Achievement Unlocked!</h3>
              </div>
              <p className="text-sm opacity-90 mb-4">
                You've completed 3 courses this month. Keep up the great work!
              </p>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                View Achievements
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;