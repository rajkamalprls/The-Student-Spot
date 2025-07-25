import React, { useState, useEffect } from 'react';

// Main App Component - Handles routing between Login and Signup
const App = () => {
  // State to manage the current view ('login' or 'signup')
  const [currentView, setCurrentView] = useState('login');

  // Function to switch between views
  const navigate = (view) => {
    setCurrentView(view);
  };

  // Conditionally render the component based on the current view
  switch (currentView) {
    case 'signup':
      return <Signup navigate={navigate} />;
    case 'home':
       // A simple placeholder for the home page after login/signup
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to The Student Spot!</h1>
            <p className="text-lg text-gray-600 mt-2">You have successfully signed in.</p>
            <button
              onClick={() => navigate('login')}
              className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      );
    case 'login':
    default:
      return <Login navigate={navigate} />;
  }
};

// Login Component
const Login = ({ navigate }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // This function handles the Google Sign-In process.
  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      // Here you would typically use:
      // await signInWithPopup(auth, googleProvider);
      
      // For demonstration, we'll simulate a successful sign-in
      console.log("Simulating successful sign-in with Google.");
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network request

      // On successful sign-in, navigate to a protected route or home page.
      navigate("home");
    } catch (err) {
      // This will catch any errors during the sign-in process.
      setError("Login failed. Please try again.");
      console.error("Google Sign-In Error:", err);
    } finally {
      // This will run regardless of success or failure.
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

        {/* This will display an error message if the login fails. */}
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

        <p className="text-xs text-gray-400 mt-6">
          By continuing, you agree to The Student Spot's{" "}
          <span className="underline cursor-pointer text-gray-500">Terms of Service</span> and{" "}
          <span className="underline cursor-pointer text-gray-500">Privacy Policy</span>.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("signup")} // Navigate to the signup view
            className="text-sky-500 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

// Signup Component
const Signup = ({ navigate }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // This function handles the Google Sign-Up process.
  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);
    try {
      // Using signInWithPopup will create a new user if they don't exist.
      // await signInWithPopup(auth, googleProvider);
      
      // For demonstration, simulate a successful sign-up
      console.log("Simulating successful sign-up with Google.");
      await new Promise(resolve => setTimeout(resolve, 1500));

      // On successful signup, navigate to the home page.
      navigate("home");
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

        <p className="text-xs text-gray-400 mt-6">
          By signing up, you agree to The Student Spot's{" "}
          <span className="underline cursor-pointer text-gray-500">Terms of Service</span> and{" "}
          <span className="underline cursor-pointer text-gray-500">Privacy Policy</span>.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("login")} // Navigate to the login view
            className="text-sky-500 cursor-pointer hover:underline"
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default App;
