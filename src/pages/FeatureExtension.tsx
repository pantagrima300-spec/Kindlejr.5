import { useState } from "react";
import {
  CheckCircle2,
  Clock3,
  FileCode2,
  Upload,
  Play,
  Send,
  AlertTriangle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import CircuitBackground from "../components/CircuitBackground";

const FeatureExtension = () => {
  const navigate = useNavigate();

  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

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
          ROUND 03 · BATTLEFIELD 01
        </div>

      </header>

      {/* MAIN */}
      <section className="battlefield-container">

        {/* TOP */}
        <div className="battlefield-top">

          <div>

            <div className="battlefield-eyebrow">
              <FileCode2 size={14} />
              FEATURE EXTENSION
            </div>

            <h1>
              Build on
              <span> what exists.</span>
            </h1>

            <p>
              You have inherited an existing software project.
              Understand the system, extend it with the requested
              feature, and make sure nothing else breaks.
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
        <div className="battlefield-notice">

          <AlertTriangle size={18} />

          <div>
            <strong>DO NOT START CODING BLINDLY.</strong>

            <span>
              Read the existing implementation before modifying it.
            </span>
          </div>

        </div>

        {/* CONTENT */}
        <div className="battlefield-layout">

          {/* LEFT */}
          <div className="battlefield-problem">

            <div className="battlefield-section-label">
              MISSION BRIEF
            </div>

            <h2>
              Add a Search Feature
            </h2>

            <p>
              The current application contains a contact list.
              Users can add and view contacts, but there is no
              way to search through the existing records.
            </p>

            <p>
              Your task is to implement a search feature that
              allows users to find contacts efficiently without
              breaking the existing functionality.
            </p>

            <div className="battlefield-requirements">

              <div>
                <CheckCircle2 size={15} />
                Search by name
              </div>

              <div>
                <CheckCircle2 size={15} />
                Handle empty searches
              </div>

              <div>
                <CheckCircle2 size={15} />
                Handle special characters
              </div>

              <div>
                <CheckCircle2 size={15} />
                Preserve existing features
              </div>

            </div>

            {/* EVALUATION */}
            <div className="battlefield-evaluation">

              <div className="battlefield-section-label">
                EVALUATION
              </div>

              <div className="evaluation-row">
                <span>Functional Correctness</span>
                <b>40 pts</b>
              </div>

              <div className="evaluation-row">
                <span>Edge Case Handling</span>
                <b>20 pts</b>
              </div>

              <div className="evaluation-row">
                <span>Integration & Consistency</span>
                <b>20 pts</b>
              </div>

              <div className="evaluation-row">
                <span>Speed & Efficiency</span>
                <b>20 pts</b>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="battlefield-workspace">

            <div className="workspace-header">

              <div>
                <span>PROJECT</span>
                <strong>contact-manager</strong>
              </div>

              <div className="workspace-status">
                ● READY
              </div>

            </div>

            <div className="workspace-files">

              <div className="file-active">
                <FileCode2 size={15} />
                App.js
              </div>

              <div>
                <FileCode2 size={15} />
                contacts.js
              </div>

              <div>
                <FileCode2 size={15} />
                utils.js
              </div>

            </div>

            <div className="code-placeholder">

              <div className="code-line">
                <span>01</span>
                <code>function ContactManager() {"{"}</code>
              </div>

              <div className="code-line">
                <span>02</span>
                <code>  const contacts = [];</code>
              </div>

              <div className="code-line">
                <span>03</span>
                <code>  // TODO: implement search</code>
              </div>

              <div className="code-line">
                <span>04</span>
                <code>{"}"}</code>
              </div>

            </div>

            <div className="workspace-actions">

              <button className="workspace-run">
                <Play size={15} />
                RUN
              </button>

              <button
                className="workspace-submit"
                onClick={handleSubmit}
              >
                <Send size={15} />
                SUBMIT
              </button>

            </div>

          </div>

        </div>

        {/* SUBMITTED */}
        {submitted && (
          <div className="battlefield-success">

            <CheckCircle2 size={20} />

            <div>
              <strong>SUBMISSION RECEIVED</strong>
              <span>
                Your Feature Extension solution has been submitted.
              </span>
            </div>

          </div>
        )}

      </section>

    </main>
  );
};

export default FeatureExtension;