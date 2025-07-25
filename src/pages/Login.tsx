import React, { useState } from 'react';
// We will assume the Dashboard component is imported from another file
// For example: import Dashboard from './Dashboard'; 

// --- Icon Helper Component ---
// A small utility to render SVG icons easily, used by the Dashboard.
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
      // The Dashboard component is rendered here when the view state is 'dashboard'
      return <Dashboard user={currentView.user} navigate={navigate} />;
    case 'login':
    default:
      return <Login navigate={navigate} />;
  }
};

// --- Login Component ---
const Login = ({ navigate }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handles the simulated Google Sign-In process.
  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      // In a real app, you would use Firebase here:
      // const result = await signInWithPopup(auth, googleProvider);
      // const user = result.user;
      
      console.log("Simulating successful sign-in with Google.");
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

      // On successful sign-in, navigate to the dashboard with mock user data.
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
const Signup = ({ navigate }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handles the simulated Google Sign-Up process.
  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);
    try {
      console.log("Simulating successful sign-up with Google.");
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // On successful sign-up, navigate to the dashboard with mock user data.
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


// --- Dashboard Component (Placeholder) ---
// This is a placeholder to show where the real Dashboard component would be rendered.
// The actual component is now in a separate file.
const Dashboard = ({ user, navigate }) => {
    // The actual implementation is in the `dashboard-component` artifact.
    // This is just to make this file runnable on its own.
    const getUsername = (email) => {
        if (!email) return "User";
        const namePart = email.split('@')[0];
        return namePart.replace(/[._-]/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    };
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">Welcome, {getUsername(user?.email)}</h1>
            <p className="text-lg text-gray-600 mt-2">Dashboard content would be here.</p>
            <button
                onClick={() => navigate('login')}
                className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
            >
              Logout
            </button>
        </div>
    );
};


export default App;
