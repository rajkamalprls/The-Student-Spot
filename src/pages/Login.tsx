// src/Login.tsx
import React, { useState } from "react";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

interface LoginProps {
  navigate: (view: string, user?: any) => void;
}

const Login: React.FC<LoginProps> = ({ navigate }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      navigate("dashboard", { email: user.email });
    } catch (err) {
      setError("Login failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Login to The Student Spot</h2>
        <p className="text-gray-600 mb-6">Continue with Google to access your dashboard</p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-3 px-6 border border-gray-300 rounded-md hover:bg-gray-100 transition disabled:opacity-50"
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.6 20H24v8h11c-2.2 5-7.3 8-11 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.2 0 6.1 1.2 8.3 3.2l6-6C33.3 5 28.9 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c11.6 0 21-9.4 21-21 0-1.3-.1-2.7-.4-4z" />
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.8 1.2 8 3l6-6C33.3 5 28.9 3 24 3 16.3 3 9.7 7.3 6.3 14.7z" />
            <path fill="#4CAF50" d="M24 45c5.2 0 9.9-1.9 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 40.6 16.2 45 24 45z" />
            <path fill="#1976D2" d="M43.6 20H24v8h11c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C44.4 36.4 48 30.7 48 24c0-1.3-.1-2.7-.4-4z" />
          </svg>
          {loading ? "Signing in..." : "Continue with Google"}
        </button>
      </div>
    </div>
  );
};

export default Login;
