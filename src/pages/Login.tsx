// Icon Helper Component
export const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

// Login Component
export const Login = ({ navigate }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
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
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303..."/>
          </svg>
          <span className="font-medium text-gray-800">
            {loading ? "Signing In..." : "Continue with Google"}
          </span>
        </button>

        <p className="mt-4 text-sm text-gray-500">
          Don't have an account?{' '}
          <span onClick={() => navigate("signup")} className="text-sky-500 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

// Signup Component
export const Signup = ({ navigate }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
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
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303..."/>
          </svg>
          <span className="font-medium text-gray-800">
            {loading ? "Creating Account..." : "Continue with Google"}
          </span>
        </button>

        <p className="mt-4 text-sm text-gray-500">
          Already have an account?{' '}
          <span onClick={() => navigate("login")} className="text-sky-500 cursor-pointer hover:underline">
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};
