import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import "./RegisterForm.css";

const RegisterForm = () => {
  // state for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // handles input changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registro:", formData);
    // we simulate the log in was successful
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 register-bg">
      <div className="register-box max-w-md w-full p-10 rounded-2xl shadow-2xl bg-white">
        <h1 className="register-title mb-8">Registrati</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            {/* name field */}
            <label htmlFor="name" className="register-label">
              Nome
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Il tuo nome"
              className="register-input"
            />
          </div>
          <div>
            {/* email field */}
            <label htmlFor="email" className="register-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Indirizzo email"
              className="register-input"
            />
          </div>
          <div>
            {/* password field */}
            <label htmlFor="password" className="register-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="register-input"
            />
          </div>
          {/* submit button */}
          <button type="submit" className="register-button">
            Registrati
          </button>
        </form>
        {/* login link */}
        <p className="register-info mt-6" style={{ textAlign: "center" }}>
          Hai già un account?{" "}
          <Link
            to="/"
            style={{
              color: "#6366f1",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Accedi
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
