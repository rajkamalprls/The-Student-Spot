import React, { useState } from 'react';

// --- Icon Helper Component ---
// A small utility to render SVG icons easily.
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

// --- Main App Component ---
// This component acts as a router, controlling which page is displayed.
const App = () => {
  // State to manage the current view ('login', 'signup', 'dashboard') and the user data.
  const [currentView, setCurrentView] = useState({ view: 'login', user: null });

  // Function to navigate between views. It can also pass user data.
  const navigate = (view, userData = null) => {
    setCurrentView({ view: view, user: userData });
  };

  // Render the appropriate component based on the current view state.
  switch (currentView.view) {
    case 'signup':
      return <Signup navigate={navigate} />;
    case 'dashboard':
      return <Dashboard user={currentView.user} navigate={navigate} />;
    case 'login':
    default:
      return <Login navigate={navigate} />;
  }
};

// --- Login Component ---
// This is the initial page the user sees.
const Login = ({ navigate }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handles the simulated Google Sign-In process.
  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      // In a real app, you would integrate Firebase authentication here.
      console.log("Simulating successful sign-in with Google.");
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate a network request

      // After successful login, navigate to the dashboard.
      // We pass mock user data to the dashboard component.
      navigate("dashboard", { email: "student.name@example.com" });
    } catch (err) {
      setError("Login failed. Please try again.");
      console.error("Google Sign-In Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">
          Welcome Back to <br /> <span className="text-orange-500">The Student Spot</span>
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Sign in to access your account and resources.
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {/* Google 'G' logo SVG */}
          <svg className="w-5 h-5" viewBox="0 0 48 48">
             <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.802 9.92C34.553 6.186 29.658 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
             <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.841-5.841C34.553 6.186 29.658 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
             <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
             <path fill="#1976D2" d="M43.611 20.083H24v8h11.303c-.792 2.237-2.231 4.16-4.082 5.571l6.19 5.238C44.438 36.372 48 30.656 48 24c0-1.341-.138-2.65-.389-3.917z"></path>
          </svg>
          <span className="font-medium text-gray-800">
            {loading ? "Signing In..." : "Continue with Google"}
          </span>
        </button>

        <p className="mt-4 text-sm text-gray-500">
          Don't have an account?{" "}
          <span onClick={() => navigate("signup")} className="text-sky-500 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

// --- Signup Component ---
// A separate page for creating a new account.
const Signup = ({ navigate }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);
    try {
      console.log("Simulating successful sign-up with Google.");
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // After successful sign-up, navigate to the dashboard.
      navigate("dashboard", { email: "new.user@example.com" });
    } catch (err) {
      setError("Sign-up failed. Please try again.");
      console.error("Google Sign-Up Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
     <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">
          Create an Account at <br /> <span className="text-orange-500">The Student Spot</span>
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Get started by creating an account with Google.
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleGoogleSignUp}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48">
             <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.802 9.92C34.553 6.186 29.658 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
             <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.841-5.841C34.553 6.186 29.658 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
             <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
             <path fill="#1976D2" d="M43.611 20.083H24v8h11.303c-.792 2.237-2.231 4.16-4.082 5.571l6.19 5.238C44.438 36.372 48 30.656 48 24c0-1.341-.138-2.65-.389-3.917z"></path>
          </svg>
          <span className="font-medium text-gray-800">
            {loading ? "Creating Account..." : "Continue with Google"}
          </span>
        </button>

        <p className="mt-4 text-sm text-gray-500">
          Already have an account?{" "}
          <span onClick={() => navigate("login")} className="text-sky-500 cursor-pointer hover:underline">
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

// --- Dashboard Component ---
// The page displayed after a successful login or sign-up.
const Dashboard = ({ user, navigate }) => {
    const [activeTab, setActiveTab] = useState('dashboard');

    // Extracts a user-friendly name from the email address.
    const getUsername = (email) => {
        if (!email) return "User";
        const namePart = email.split('@')[0];
        return namePart.replace(/[._-]/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    };

    const username = getUsername(user?.email);

    // Renders the content for the currently active tab.
    const renderTabContent = () => {
        switch (activeTab) {
            case 'courses':
                return <div className="p-6 bg-white rounded-lg shadow-inner"><h2 className="text-2xl font-semibold text-gray-700">My Courses</h2><p className="mt-2 text-gray-600">Your enrolled courses will appear here.</p></div>;
            case 'grades':
                return <div className="p-6 bg-white rounded-lg shadow-inner"><h2 className="text-2xl font-semibold text-gray-700">My Grades</h2><p className="mt-2 text-gray-600">Your grades will be shown here.</p></div>;
            case 'profile':
                return <div className="p-6 bg-white rounded-lg shadow-inner"><h2 className="text-2xl font-semibold text-gray-700">My Profile</h2><p className="mt-2 text-gray-600">Email: {user?.email}</p></div>;
            case 'dashboard':
            default:
                return <div className="p-6 bg-white rounded-lg shadow-inner"><h2 className="text-2xl font-semibold text-gray-700">Dashboard Overview</h2><p className="mt-2 text-gray-600">Welcome to your dashboard!</p></div>;
        }
    };

    // A reusable button component for the tabs.
    const TabButton = ({ id, label, iconPath }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === id 
                ? 'bg-orange-500 text-white shadow-md' 
                : 'text-gray-600 hover:bg-orange-100 hover:text-orange-600'
            }`}
        >
            <Icon path={iconPath} className="w-5 h-5" />
            <span className="text-left">{label}</span>
        </button>
    );

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-3">
                        <span className="text-xl font-bold text-orange-500">The Student Spot</span>
                        <div className="flex items-center gap-4">
                            <span className="hidden sm:block text-gray-700">Welcome, <span className="font-semibold">{username}</span></span>
                            <button
                                onClick={() => navigate('login')}
                                className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300 text-sm"
                            >
                                <Icon path="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" className="w-5 h-5" />
                                <span className="hidden sm:inline">Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <aside className="lg:col-span-1">
                        <div className="bg-white p-3 rounded-lg shadow-lg flex flex-row lg:flex-col gap-2">
                           <TabButton id="dashboard" label="Dashboard" iconPath="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3.75A2.25 2.25 0 0018 1.5H6A2.25 2.25 0 003.75 3zM3.75 14.25V18a2.25 2.25 0 002.25 2.25h12A2.25 2.25 0 0020.25 18v-3.75m-16.5 0h16.5" />
                           <TabButton id="courses" label="Courses" iconPath="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                           <TabButton id="grades" label="Grades" iconPath="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-2.072-1.037m19.624 0l2.072-1.037M12 18.172l-6.84-3.419m13.68 0l-6.84 3.42" />
                           <TabButton id="profile" label="Profile" iconPath="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </div>
                    </aside>

                    <div className="lg:col-span-3">
                        {renderTabContent()}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
