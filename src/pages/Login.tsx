import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithCustomToken, signInAnonymously } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import getFirestore if you plan to use Firestore later
import { getAnalytics } from "firebase/analytics"; // Import getAnalytics

// Your web app's Firebase configuration
// This configuration has been updated with the new details you provided.
const firebaseConfig = {
  apiKey: "AIzaSyDiZXR2hqONfziBJMx2gj37h2UpcRVgrVo",
  authDomain: "rajkamal-ed54f.firebaseapp.com",
  projectId: "rajkamal-ed54f",
  storageBucket: "rajkamal-ed54f.appspot.com",
  messagingSenderId: "378857373552",
  appId: "1:378857373552:web:579e3ae2c3a1aec31199b5",
  measurementId: "G-WSE5JL5WZ6"
};

// Main App component that encapsulates the entire application
const App = () => {
  // State variables for Firebase instances and user information
  const [firebaseApp, setFirebaseApp] = useState(null);
  const [auth, setAuth] = useState(null);
  const [db, setDb] = useState(null); // Firestore instance
  const [googleProvider, setGoogleProvider] = useState(null);
  const [user, setUser] = useState(null); // Stores the authenticated user object
  const [error, setError] = useState(''); // Stores error messages
  const [loading, setLoading] = useState(false); // Indicates if an authentication process is ongoing
  const [currentPage, setCurrentPage] = useState('Login'); // Controls which page is displayed (Login, Signup, Home)
  const [isAuthReady, setIsAuthReady] = useState(false); // Indicates if Firebase Auth is initialized and ready

  // useEffect hook to initialize Firebase and set up authentication listener
  useEffect(() => {
    // Check if Firebase is already initialized to prevent re-initialization
    if (firebaseApp) return;

    try {
      // Access global variables provided by the Canvas environment
      // __app_id is still used for Firestore paths if you implement them
      const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
      const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

      // Initialize Firebase app directly with the provided firebaseConfig
      const app = initializeApp(firebaseConfig);
      setFirebaseApp(app);

      // Initialize Firebase Analytics
      // Note: For Analytics to fully function, you need to ensure
      // Google Analytics is properly set up in your Firebase project
      // and that the measurementId in firebaseConfig is correct.
      getAnalytics(app); // Initialize Analytics

      // Get Auth and Firestore instances
      const authInstance = getAuth(app);
      setAuth(authInstance);
      setDb(getFirestore(app)); // Initialize Firestore

      // Initialize Google Auth Provider
      setGoogleProvider(new GoogleAuthProvider());

      // Set up an authentication state change listener
      const unsubscribe = onAuthStateChanged(authInstance, async (currentUser) => {
        if (!isAuthReady) { // Only perform initial sign-in if not already ready
          if (initialAuthToken) {
            // Attempt to sign in with the custom token provided by the environment
            try {
              await signInWithCustomToken(authInstance, initialAuthToken);
              console.log("Signed in with custom token.");
            } catch (tokenError) {
              console.error("Error signing in with custom token:", tokenError);
              // Fallback to anonymous sign-in if custom token fails
              try {
                await signInAnonymously(authInstance);
                console.log("Signed in anonymously after token failure.");
              } catch (anonError) {
                console.error("Error signing in anonymously:", anonError);
              }
            }
          } else {
            // If no custom token, sign in anonymously
            try {
              await signInAnonymously(authInstance);
              console.log("Signed in anonymously.");
            } catch (anonError) {
              console.error("Error signing in anonymously:", anonError);
            }
          }
          setIsAuthReady(true); // Mark authentication as ready after initial check
        }

        // Update user state based on the current user
        setUser(currentUser);
        // If user is logged in, navigate to Home, otherwise stay on Login
        if (currentUser) {
          setCurrentPage('Home');
        } else {
          // If no user, default to Login page
          setCurrentPage('Login');
        }
      });

      // Cleanup subscription on component unmount
      return () => unsubscribe();
    } catch (err) {
      console.error("Firebase initialization error:", err);
      setError("Failed to initialize application. Please check your Firebase configuration and try again.");
    }
  }, [firebaseApp, isAuthReady]); // Depend on firebaseApp to ensure one-time init and isAuthReady for initial sign-in logic

  // Function to handle Google Sign-In (used for both Login and Signup)
  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);

    // Ensure auth and googleProvider are initialized before proceeding
    if (!auth || !googleProvider) {
      setError("Firebase authentication not ready. Please wait.");
      setLoading(false);
      return;
    }

    try {
      // Sign in with Google popup. Firebase handles creating a new user if one doesn't exist.
      await signInWithPopup(auth, googleProvider);
      // The onAuthStateChanged listener will handle setting the user and navigating to 'Home'
    } catch (err) {
      console.error("Google Sign-In Error:", err);
      // Check for specific error codes if needed, e.g., 'auth/popup-closed-by-user'
      if (err.code === 'auth/popup-closed-by-user') {
        setError("Sign-in process cancelled.");
      } else {
        setError("Authentication failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Function to handle user logout
  const handleLogout = async () => {
    if (auth) {
      try {
        await auth.signOut();
        setCurrentPage('Login'); // Go back to login page after logout
        setUser(null); // Clear user state
        setError(''); // Clear any previous errors
        console.log("User logged out successfully.");
      } catch (err) {
        console.error("Logout Error:", err);
        setError("Failed to log out. Please try again.");
      }
    }
  };

  // Render the Login page
  const LoginPage = () => (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">
          Welcome to <br /> <span className="text-orange-500">The Student Spot</span>
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Sign in to access your account and resources. Join our vibrant student community, share notes, and collaborate.
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading || !isAuthReady} // Disable if loading or auth not ready
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
            onClick={() => setCurrentPage('Signup')} // Navigate to Signup page
            className="text-sky-500 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );

  // Render the Signup page (new)
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
          disabled={loading || !isAuthReady} // Disable if loading or auth not ready
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
