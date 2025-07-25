import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithCustomToken, signInAnonymously } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import getFirestore if you plan to use Firestore later
import { getAnalytics } from "firebase/analytics"; // Import getAnalytics

// Your web app's Firebase configuration
// This configuration will be populated by the Canvas environment's __firebase_config
const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');

// Main App component that encapsulates the entire application
const App = () => {
  // State variables for Firebase instances and user information
  const [firebaseApp, setFirebaseApp] = useState<any>(null);
  const [auth, setAuth] = useState<any>(null);
  const [db, setDb] = useState<any>(null); // Firestore instance
  const [googleProvider, setGoogleProvider] = useState<any>(null);
  const [user, setUser] = useState<any>(null); // Stores the authenticated user object
  const [error, setError] = useState<string>(''); // Stores error messages
  const [loading, setLoading] = useState<boolean>(false); // Indicates if an authentication process is ongoing
  const [currentPage, setCurrentPage] = useState<string>('Login'); // Controls which page is displayed (Login, Signup, Home)
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false); // Indicates if Firebase Auth is initialized and ready

  // useEffect hook to initialize Firebase and set up authentication listener
  useEffect(() => {
    // Prevent re-initialization if Firebase is already set up
    if (firebaseApp) return;

    try {
      // Access global variables provided by the Canvas environment
      const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

      // Initialize Firebase app directly with the provided firebaseConfig
      const app = initializeApp(firebaseConfig);
      setFirebaseApp(app);

      // Initialize Firebase Analytics (optional, but good practice if configured)
      getAnalytics(app);

      // Get Auth and Firestore instances
      const authInstance = getAuth(app);
      setAuth(authInstance);
      setDb(getFirestore(app)); // Initialize Firestore

      // Initialize Google Auth Provider
      setGoogleProvider(new GoogleAuthProvider());

      // Set up an authentication state change listener
      const unsubscribe = onAuthStateChanged(authInstance, async (currentUser) => {
        // Only perform initial sign-in if not already ready
        if (!isAuthReady) {
          try {
            if (initialAuthToken) {
              await signInWithCustomToken(authInstance, initialAuthToken);
              console.log("Signed in with custom token.");
            } else {
              await signInAnonymously(authInstance);
              console.log("Signed in anonymously.");
            }
          } catch (authError) {
            console.error("Error during initial authentication:", authError);
            setError("Failed to authenticate. Please try again.");
            // Fallback to anonymous sign-in if custom token fails or other errors
            try {
              await signInAnonymously(authInstance);
            } catch (anonError) {
              console.error("Error signing in anonymously as fallback:", anonError);
            }
          } finally {
            setIsAuthReady(true); // Mark authentication as ready after initial check
          }
        }

        // Update user state based on the current user
        setUser(currentUser);
        // If user is logged in, navigate to Home, otherwise stay on Login
        if (currentUser) {
          setCurrentPage('Home');
        } else {
          setCurrentPage('Login'); // If no user, default to Login page
        }
      });

      // Cleanup subscription on component unmount
      return () => unsubscribe();
    } catch (err: any) {
      console.error("Firebase initialization error:", err);
      setError("Failed to initialize application. Please check your Firebase configuration and try again.");
    }
  }, [firebaseApp, isAuthReady]); // Depend on firebaseApp to ensure one-time init and isAuthReady for initial sign-in logic

  // Function to handle user logout
  const handleLogout = async () => {
    if (auth) {
      try {
        await auth.signOut();
        setCurrentPage('Login'); // Go back to login page after logout
        setUser(null); // Clear user state
        setError(''); // Clear any previous errors
        console.log("User logged out successfully.");
      } catch (err: any) {
        console.error("Logout Error:", err);
        setError("Failed to log out. Please try again.");
      }
    }
  };

  /**
   * Handles Google Sign-In.
   * Uses signInWithPopup to authenticate with Google.
   * Firebase handles creating a new user if one doesn't exist.
   */
  const handleGoogleSignIn = async () => {
    setError(''); // Clear any previous errors
    setLoading(true); // Set loading state to true

    // Ensure auth and googleProvider are initialized before proceeding
    if (!auth || !googleProvider) {
      setError("Firebase authentication not ready. Please wait.");
      setLoading(false);
      return;
    }

    try {
      // Attempt to sign in with Google using a popup window
      await signInWithPopup(auth, googleProvider);
      // If successful, onAuthStateChanged listener in App.tsx will handle navigation to 'Home'
    } catch (err: any) {
      console.error("Google Sign-In Error:", err);
      // Provide user-friendly error messages based on Firebase error codes
      if (err.code === 'auth/popup-closed-by-user') {
        setError("Sign-in process cancelled.");
      } else if (err.code === 'auth/network-request-failed') {
        setError("Network error. Please check your internet connection.");
      } else {
        setError("Authentication failed. Please try again.");
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Render the Login page (now embedded directly)
  const LoginPage = () => (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">
          Welcome to <br /> <span className="text-orange-500">The Student Spot</span>
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Sign in to access your account and resources. Join our vibrant student community, share notes, and collaborate.
        </p>

        {/* Display error message if any */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          // Disable button if loading, if auth is not ready, or if auth/provider are null
          disabled={loading || !isAuthReady || !auth || !googleProvider}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
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
          <span className="underline cursor-pointer text-gray-500 hover:text-sky-500">Terms of Service</span> and{" "}
          <span className="underline cursor-pointer text-gray-500 hover:text-sky-500">Privacy Policy</span>.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Don’t have an account?{" "}
          <span
            onClick={() => setCurrentPage('Signup')} // Use onNavigate prop to switch to Signup page
            className="text-sky-500 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );

  // Placeholder for SignupPage - you would create a separate Signup.tsx
  const SignupPage = () => (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">
          Join <span className="text-orange-500">The Student Spot</span>
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Create your account to get started. Share notes, collaborate on projects, and connect with other students.
        </p>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {/* Google Sign-Up Button (reusing handleGoogleSignIn) */}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading || !isAuthReady || !auth || !googleProvider}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
        >
          <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center font-bold border border-gray-300">
            G
          </span>
          <span className="font-medium text-gray-800">
            {loading ? "Signing up..." : "Continue with Google"}
          </span>
        </button>

        <p className="text-xs text-gray-400 mt-6">
          By signing up, you agree to The Student Spot's{" "}
          <span className="underline cursor-pointer text-gray-500 hover:text-sky-500">Terms of Service</span> and{" "}
          <span className="underline cursor-pointer text-gray-500 hover:text-sky-500">Privacy Policy</span>.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => setCurrentPage('Login')} // Navigate to Login page
            className="text-sky-500 cursor-pointer hover:underline"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );

  // Render the Home page
  const HomePage = () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sky-100 px-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome, <span className="text-orange-500">{user?.displayName || user?.email || 'Student'}</span>!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          You are now logged in to The Student Spot.
        </p>
        <p className="text-sm text-gray-600 mb-8">
          User ID: <span className="font-mono text-gray-800 break-all">{user?.uid || 'N/A'}</span>
        </p>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          onClick={handleLogout}
          className="w-full py-3 px-6 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Logout
        </button>
      </div>
    </div>
  );

  // Main render logic based on currentPage state
  return (
    <>
      {/* Tailwind CSS CDN for styling */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Google Fonts - Inter for a modern look */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>

      {/* Conditionally render Login, Signup, or Home page */}
      {currentPage === 'Login' && <LoginPage />}
      {currentPage === 'Signup' && <SignupPage />}
      {currentPage === 'Home' && <HomePage />}
    </>
  );
};

// Export the App component as default
export default App;
