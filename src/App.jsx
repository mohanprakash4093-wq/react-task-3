import { useState } from "react";
import "./App.css";

// Employee details – List Rendering
const employees = [
  {
    id: 1,
    name: "Mohan",
    email: "mohan@gmail.com",
    age: 23,
    city: "Chennai",
    role: "React Developer",
  },
  {
    id: 2,
    name: "Arun",
    email: "arun@gmail.com",
    age: 24,
    city: "Bangalore",
    role: "UI Designer",
  },
  {
    id: 3,
    name: "Kumar",
    email: "kumar@gmail.com",
    age: 25,
    city: "Coimbatore",
    role: "Frontend Developer",
  },
  {
    id: 4,
    name: "Priya",
    email: "priya@gmail.com",
    age: 22,
    city: "Madurai",
    role: "Web Developer",
  },
  {
    id: 5,
    name: "Divya",
    email: "divya@gmail.com",
    age: 26,
    city: "Salem",
    role: "Software Engineer",
  },
];

// Login Component
function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    onLogin(email);
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">🔐</div>

        <h1>Welcome Back!</h1>
        <p className="login-subtitle">
          Please login to access your dashboard.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Email ID</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button">
            Login Now →
          </button>
        </form>

        <p className="login-footer">
          Employee Management System
        </p>
      </div>
    </div>
  );
}

// Home Component
function Home({ userEmail, onLogout }) {
  return (
    <div className="dashboard">
      <header className="navbar">
        <h2>Employee Dashboard</h2>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </header>

      <main className="dashboard-content">
        <section className="welcome-banner">
          <h1>Hello, Welcome! 👋</h1>
          <p>Welcome to your Employee Management Dashboard.</p>
          <p className="logged-email">
            Logged in as: {userEmail}
          </p>
        </section>

        <div className="section-heading">
          <h2>Our Employees</h2>
          <p>Meet our talented team members.</p>
        </div>

        <div className="employee-container">
          {employees.map((employee) => (
            <div className="employee-card" key={employee.id}>
              <div className="avatar">
                {employee.name.charAt(0)}
              </div>

              <h3>{employee.name}</h3>

              <div className="employee-info">
                <p><strong>Email:</strong> {employee.email}</p>
                <p><strong>Age:</strong> {employee.age}</p>
                <p><strong>City:</strong> {employee.city}</p>
                <p><strong>Role:</strong> {employee.role}</p>
              </div>

              <span className="employee-status">
                Active
              </span>
            </div>
          ))}
        </div>

        <footer className="dashboard-footer">
          © 2026 Employee Management System | Built with React
        </footer>
      </main>
    </div>
  );
}

// Main App Component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  function handleLogin(email) {
    setUserEmail(email);
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUserEmail("");
  }

  // Conditional Rendering
  return (
    <div className="app">
      {isLoggedIn ? (
        <Home
          userEmail={userEmail}
          onLogout={handleLogout}
        />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;