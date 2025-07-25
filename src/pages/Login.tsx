import React, { useState } from "react";
import { auth, googleProvider } from "./firebase"; // Make sure this is correctly configured
import { signInWithPopup } from "firebase/auth";

// --- Icon Helper ---
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

// --- Main App Component ---
const App = () => {
  const [currentView, setCurrentView] = useState<"login" | "signup" | "dashboard">("login");
  const [user, setUser] = useState<{ email: string } | null>(null);

  const navigate = (view: "login" | "signup" | "dashboard", userData: any = null) => {
    setCurrentView(view);
    if (userData) setUser(userData);
  };

  switch (currentView) {
    case "signup":
      return <Signup navigate={navigate} />;
    case "dashboard":
      return <Dashboard user={user} navigate={navigate} />;
    default:
      return <Login navigate={navigate} />;
  }
};

// --- Login Component ---
const Login = ({ navigate }: { navigate: Function }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      navigate("dashboard", { email: user.email });
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
          Welcome to <br /> <span className="text-orange-500">The Student Spot</span>
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Sign in to access your account and resources.
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200 disabled:opacity-50"
        >
          {/* Google Logo */}
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.6 20H24v8h11c-2.2 5-7.3 8-11 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.2 0 6.1 1.2 8.3 3.2l6-6C33.3 5 28.9 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c11.6 0 21-9.4 21-21 0-1.3-.1-2.7-.4-4z" />
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.8 1.2 8 3l6-6C33.3 5 28.9 3 24 3 16.3 3 9.7 7.3 6.3 14.7z" />
            <path fill="#4CAF50" d="M24 45c5.2 0 9.9-1.9 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 40.6 16.2 45 24 45z" />
            <path fill="#1976D2" d="M43.6 20H24v8h11c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C44.4 36.4 48 30.7 48 24c0-1.3-.1-2.7-.4-4z" />
          </svg>
          <span>{loading ? "Signing in..." : "Continue with Google"}</span>
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
const Signup = ({ navigate }: { navigate: Function }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      navigate("dashboard", { email: user.email });
    } catch (err) {
      setError("Signup failed. Please try again.");
      console.error("Google Sign-Up Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">
          Create an Account <br /> <span className="text-orange-500">The Student Spot</span>
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Get started by signing up with Google.
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleGoogleSignUp}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200 disabled:opacity-50"
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            {/* Same Google logo */}
            <path fill="#FFC107" d="..." />
            <path fill="#FF3D00" d="..." />
            <path fill="#4CAF50" d="..." />
            <path fill="#1976D2" d="..." />
          </svg>
          <span>{loading ? "Creating Account..." : "Continue with Google"}</span>
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
const Dashboard = ({ user, navigate }: { user: any, navigate: Function }) => {
  const username = user?.email?.split("@")[0].replace(/[._-]/g, " ") ?? "User";
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Welcome, {username}</h1>
      <p className="text-lg text-gray-600 mt-2">You are now signed in!</p>
      <button
        onClick={() => navigate("login")}
        className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600"
      >
        Logout
      </button>
    </div>
  );
};

export default App;
