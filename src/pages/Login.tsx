import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
// Make sure to import your Firebase auth and googleProvider configuration
// For example: import { auth, googleProvider } from "../firebase";

const Signup = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // This function handles the Google Sign-Up process.
  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);
    try {
      // Using signInWithPopup will create a new user if they don't exist,
      // or sign them in if they do.
      // await signInWithPopup(auth, googleProvider);
      
      // For demonstration without real firebase, we'll simulate a success
      console.log("Simulating successful sign-up with Google.");
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network request

      // On successful signup, navigate to the home page.
      navigate("/Home");
    } catch (err) {
      // This will catch any errors during the sign-up process.
      setError("Sign up failed. Please try again.");
      console.error("Google Sign-Up Error:", err.message);
    } finally {
      // This will run regardless of whether the sign-up was successful or not.
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">
          Create an Account
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Join our vibrant student community, share notes, and collaborate.
        </p>

        {/* This will display an error message if the signup fails. */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleGoogleSignUp}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {/* Simple Google 'G' logo */}
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
          By continuing, you agree to The Student Spot's{" "}
          <span className="underline cursor-pointer text-gray-500">Terms of Service</span> and{" "}
          <span className="underline cursor-pointer text-gray-500">Privacy Policy</span>.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")} // Navigate to your login route
            className="text-sky-500 cursor-pointer hover:underline"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
