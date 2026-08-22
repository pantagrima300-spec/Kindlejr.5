import { useState } from "react";
import {
  Bug,
  CheckCircle2,
  Clock3,
  Play,
  Send,
  Terminal,
  AlertTriangle,
} from "lucide-react";
import CircuitBackground from "../components/CircuitBackground";

const ComputerIsLying = () => {

  const [tested, setTested] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="battlefield-page">

      <CircuitBackground />

      <div className="battlefield-overlay" />

      {/* HEADER */}
      <header className="battlefield-header">

        <div className="battlefield-brand">
          <span className="battlefield-dot" />
          KINDLE JUNIOR <b>5.0</b>
        </div>

        <div className="battlefield-round">
          ROUND 03 · BATTLEFIELD 02
        </div>

      </header>

      <section className="battlefield-container">

        {/* HERO */}
        <div className="battlefield-top">

          <div>

            <div className="battlefield-eyebrow">
              <Bug size={14} />
              THE COMPUTER IS LYING
            </div>

            <h1>
              Find the
              <span> hidden flaw.</span>
            </h1>

            <p>
              The program works perfectly on ordinary inputs.
              That's exactly why you shouldn't trust it.
            </p>

          </div>

          <div className="battlefield-timer">

            <Clock3 size={18} />

            <div>
              <span>TIME REMAINING</span>
              <strong>30:00</strong>
            </div>

          </div>

        </div>

        {/* WARNING */}
        <div className="battlefield-notice danger">

          <AlertTriangle size={18} />

          <div>

            <strong>
              THE PROGRAM IS LYING TO YOU.
            </strong>

            <span>
              Your job is to make it fail.
            </span>

          </div>

        </div>

        <div className="battlefield-layout">

          {/* PROBLEM */}
          <div className="battlefield-problem">

            <div className="battlefield-section-label">
              MISSION BRIEF
            </div>

            <h2>
              Break the Program
            </h2>

            <p>
              You have been given a program that appears to
              produce correct results for standard inputs.
            </p>

            <p>
              Somewhere inside the implementation is a hidden
              flaw. Find the input that exposes it and explain
              why the program fails.
            </p>

            <div className="battlefield-requirements">

              <div>
                <Bug size={15} />
                Create creative test cases
              </div>

              <div>
                <Bug size={15} />
                Find the failing input
              </div>

              <div>
                <Bug size={15} />
                Trace the root cause
              </div>

              <div>
                <Bug size={15} />
                Explain the failure
              </div>

            </div>

          </div>

          {/* TERMINAL */}
          <div className="battlefield-workspace">

            <div className="workspace-header">

              <div>
                <span>PROGRAM</span>
                <strong>mystery.cpp</strong>
              </div>

              <div className="workspace-status">
                ● RUNNING
              </div>

            </div>

            <div className="lying-terminal">

              <div className="terminal-title">
                <Terminal size={14} />
                TEST TERMINAL
              </div>

              <div className="terminal-output">
                <div>&gt; ./mystery</div>

                <div className="terminal-muted">
                  Enter test input:
                </div>

                <input
                  className="terminal-input"
                  placeholder="Enter your test case..."
                />

                {tested && (
                  <div className="terminal-error">
                    ⚠ Unexpected behaviour detected.
                  </div>
                )}

              </div>

            </div>

            <div className="workspace-actions">

              <button
                className="workspace-run"
                onClick={() => setTested(true)}
              >
                <Play size={15} />
                RUN TEST
              </button>

              <button
                className="workspace-submit"
                onClick={() => setSubmitted(true)}
              >
                <Send size={15} />
                EXPOSE BUG
              </button>

            </div>

          </div>

        </div>

        {submitted && (
          <div className="battlefield-success">

            <CheckCircle2 size={20} />

            <div>
              <strong>BUG REPORT SUBMITTED</strong>

              <span>
                Your investigation has been recorded.
              </span>
            </div>

          </div>
        )}

      </section>

    </main>
  );
};

export default ComputerIsLying;