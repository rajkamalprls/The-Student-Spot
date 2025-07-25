import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // You can access user data via result.user
      navigate("/Home");
    } catch (err: any) {
      console.error("Google Sign-In Error:", err.message);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">
          Welcome to <br />
          <span className="text-orange-500">The Student Spot</span>
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Sign in to access your account and resources. Join our vibrant student community, share notes, and collaborate.
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className={`w-full flex items-center justify-center gap-3 py-3 px-6 border border-gray-300 rounded-md transition duration-200 ${
            loading ? "bg-gray-200 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
          aria-label="Sign in with Google"
        >
          <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center font-bold border border-gray-300">
            G
          </span>
          <span className="font-medium text-gray-800">
            {loading ? "Signing in..." : "Continue with Google"}
          </span>
        </button>

        <p className="text-xs text-gray-400 mt-6">
          By continuing, you agree to The Student Spot's{" "}
          <span className="underline cursor-pointer text-gray-500">Terms of Service</span> and{" "}
          <span className="underline cursor-pointer text-gray-500">Privacy Policy</span>.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-sky-500 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
