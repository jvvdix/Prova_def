import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ROUTES } from "../../utils/constants";
import "./LoginForm.css";

const LoginForm = () => {
  // state for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  // handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password); // try to log in
      navigate(ROUTES.DASHBOARD); // redirect if successful
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 login-bg">
      <div className="login-box max-w-md w-full p-10 rounded-2xl shadow-2xl bg-white">
        <h1 className="login-title mb-8">Accedi al tuo account</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            {/* email field */}
            <label htmlFor="email" className="login-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Indirizzo email"
              className="login-input"
            />
          </div>
          <div>
            {/* password field */}
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              disabled={isLoading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="login-input"
            />
          </div>
          {/* submit button */}
          <button type="submit" disabled={isLoading} className="login-button">
            {isLoading ? "Accesso in corso..." : "Accedi"}
          </button>
        </form>

        {/* register link */}
        <p className="login-info mt-6" style={{ textAlign: "center" }}>
          Non hai un account?{" "}
          <Link
            to="/register"
            style={{
              color: "#6366f1",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Registrati
          </Link>
        </p>
        {/* fake login notice */}
        <p className="login-info mt-2">
          login fittizio: qualsiasi email e password funzioneranno!
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
