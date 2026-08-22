import { useState } from "react";
import {
  ArrowLeft,
  LockKeyhole,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import CircuitBackground from "../components/CircuitBackground";

const Login = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loginKey, setLoginKey] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    if (!userId.trim() || !password.trim() || !loginKey.trim()) {
      setError("Please enter your User ID, Password and Login Key.");
      return;
    }

    if (loginKey.length !== 6) {
      setError("Login Key must contain 6 digits.");
      return;
    }
    navigate("/round-1-guidelines");
  };

  return (
    <main className="login-page">

      <CircuitBackground />

      <div className="login-overlay" />

      <div className="login-top">

        <Link to="/" className="back-button">
          <ArrowLeft size={15} />
          BACK
        </Link>

        <div className="login-event">
          <span />
          KINDLE JUNIOR <b>5.0</b>
        </div>

      </div>
      <section className="login-container">

        <form
          className="login-card"
          onSubmit={handleLogin}
        >

          <div className="login-icon">
            <ShieldCheck size={25} />
          </div>


          <div className="login-eyebrow">
            ROUND 01 · PARTICIPANT ACCESS
          </div>


          <h1>
            Welcome <span>Back.</span>
          </h1>


          <p className="login-description">
            Enter the credentials provided to you
            to access Round 01.
          </p>
          <div className="input-group">

            <label>
              USER ID
            </label>

            <div className="input-wrapper">

              <UserRound size={16} />

              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter your User ID"
              />

            </div>

          </div>
          <div className="input-group">

            <label>
              PASSWORD
            </label>

            <div className="input-wrapper">

              <LockKeyhole size={16} />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />

            </div>

          </div>
          <div className="input-group">

            <div className="label-row">

              <label>
                LOGIN KEY
              </label>

              <span>
                CODE PROVIDED AT THE TIME OF EVENT
              </span>

            </div>

            <div className="input-wrapper">

              <ShieldCheck size={16} />

              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={loginKey}
                onChange={(e) =>
                  setLoginKey(
                    e.target.value.replace(/\D/g, "")
                  )
                }
                placeholder="Enter 6-digit OTP"
              />

            </div>

          </div>


          {/* ERROR */}
          {error && (
            <div className="login-error">
              {error}
            </div>
          )}


          {/* LOGIN */}
          <button
            type="submit"
            className="login-button"
          >
            ENTER ROUND 01

            <span>
              →
            </span>
          </button>


          <div className="login-security">
            <ShieldCheck size={12} />
            SECURE PARTICIPANT ACCESS
          </div>

        </form>


        {/* BOTTOM INFO */}
        <div className="login-meta">

          <span>ROUND 01</span>

          <i />

          <span>40 QUESTIONS</span>

          <i />

          <span>40 MINUTES</span>

        </div>

      </section>

    </main>
  );
};

export default Login;