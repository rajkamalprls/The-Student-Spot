import React, { useState, useEffect } from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithCustomToken,
  signInAnonymously,
  User
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { firebaseConfig } from './firebaseConfig'; // optionally externalize config

const Login: React.FC = () => {
  const [auth, setAuth] = useState<any>(null);
  const [provider, setProvider] = useState<any>(null);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const _auth = getAuth(app);
    const _provider = new GoogleAuthProvider();
    getAnalytics(app);
    setAuth(_auth);
    setProvider(_provider);

    onAuthStateChanged(_auth, async (currentUser) => {
      if (!isReady) {
        try {
          if (typeof __initial_auth_token !== 'undefined') {
            await signInWithCustomToken(_auth, __initial_auth_token);
          } else {
            await signInAnonymously(_auth);
          }
        } catch {
          await signInAnonymously(_auth);
        }
        setIsReady(true);
      }
      setUser(currentUser);
    });
  }, []);

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      setError(err.code === 'auth/popup-closed-by-user' ? 'Sign-in cancelled.' : 'Sign-in failed.');
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sky-100 font-sans">
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome, {user.displayName || 'Student'}!</h1>
          <p className="text-sm text-gray-600 mb-2">User ID: <span className="font-mono">{user.uid}</span></p>
          <button
            onClick={() => auth.signOut()}
            className="w-full py-2 mt-4 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        <h1 className="text-3xl font-bold mb-3 text-gray-800">
          Welcome to <span className="text-orange-500">The Student Spot</span>
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Sign in to access your account and community.
        </p>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading || !isReady}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 rounded hover:bg-gray-100"
        >
          <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center font-bold border">G</span>
          <span>{loading ? 'Signing in...' : 'Continue with Google'}</span>
        </button>
        <p className="text-xs text-gray-400 mt-6">
          By continuing, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
