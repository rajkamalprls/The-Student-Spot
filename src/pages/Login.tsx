import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    onAuthStateChanged, 
    signOut,
    signInWithCustomToken,
    signInAnonymously
} from 'firebase/auth';

// --- Firebase Configuration ---
// IMPORTANT: In a real application, you would get this from your Firebase project settings.
// For this example, we'll use the global variable provided by the environment.
const firebaseConfig = typeof __firebase_config !== 'undefined' 
    ? JSON.parse(__firebase_config) 
    : { apiKey: "your-api-key", authDomain: "your-auth-domain", projectId: "your-project-id" };

// --- Initialize Firebase and Authentication ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// --- SVG Icon for Google ---
const GoogleIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 9.196C34.976 5.822 29.864 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039L38.804 9.196C34.976 5.822 29.864 4 24 4C16.636 4 10.273 8.118 6.306 14.691z"></path>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C41.383 36.641 44 31.033 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
    </svg>
);

// --- Login Component ---
// This component is shown when the user is not logged in.
const LoginScreen = ({ handleGoogleSignIn, loading, error }) => (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
            Welcome Back
        </h1>
        <p className="text-gray-600 mb-8">
            Sign in with Google to continue to your dashboard.
        </p>

        {error && <p className="bg-red-100 text-red-700 text-sm rounded-md p-3 mb-4">{error}</p>}

        <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-105 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
            <GoogleIcon />
            <span>{loading ? "Signing in..." : "Continue with Google"}</span>
        </button>

        <p className="text-xs text-gray-400 mt-8">
            By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
    </div>
);

// --- Home Component ---
// This component is shown when the user is logged in.
const HomeScreen = ({ user, handleSignOut }) => (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
        <img 
            src={user.photoURL || `https://placehold.co/100x100/EBF8FF/3182CE?text=${user.displayName.charAt(0)}`} 
            alt="Profile" 
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-200"
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x100/EBF8FF/3182CE?text=${user.displayName.charAt(0)}`; }}
        />
        <h1 className="text-2xl font-bold text-gray-800">
            Welcome, {user.displayName}!
        </h1>
        <p className="text-gray-600 mb-6">{user.email}</p>
        
        <button
            onClick={handleSignOut}
            className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors duration-200"
        >
            Sign Out
        </button>
    </div>
);


// --- Main App Component ---
export default function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Start with loading true to wait for auth state
    const [error, setError] = useState("");

    // Effect to listen for authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                // If no user, try to sign in with custom token or anonymously
                try {
                    const token = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
                    if (token) {
                        await signInWithCustomToken(auth, token);
                        // onAuthStateChanged will run again with the new user
                    } else {
                        // If no token, sign in anonymously or leave as null
                        // For this example, we'll just set the user to null
                        setUser(null);
                    }
                } catch (err) {
                     console.error("Anonymous/Custom Sign-In Error:", err);
                     setUser(null);
                }
            }
            setLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    // Function to handle Google Sign-In
    const handleGoogleSignIn = async () => {
        setError("");
        setLoading(true);
        try {
            await signInWithPopup(auth, googleProvider);
            // onAuthStateChanged will handle setting the user state
        } catch (err) {
            setError("Login failed. Please try again.");
            console.error("Google Sign-In Error:", err.message);
            setLoading(false); // Stop loading on error
        }
    };

    // Function to handle Sign-Out
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setUser(null); // Clear user state immediately
        } catch (err) {
            console.error("Sign Out Error:", err);
            setError("Failed to sign out.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans p-4">
            {loading ? (
                // Simple loading spinner
                <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            ) : user ? (
                <HomeScreen user={user} handleSignOut={handleSignOut} />
            ) : (
                <LoginScreen 
                    handleGoogleSignIn={handleGoogleSignIn} 
                    loading={loading} 
                    error={error} 
                />
            )}
        </div>
    );
}
