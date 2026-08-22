import {
  CheckCircle2,
  XCircle,
  Clock3,
  Trophy,
  Code2,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import CircuitBackground from "../components/CircuitBackground";
import "./CodingResult.css";

type ResultState = {
  score?: number;
  total?: number;
  passed?: number;
  failed?: number;
  timeTaken?: string;
  language?: string;
};

const CodingResult = () => {
  const location = useLocation();

  const result: ResultState = location.state || {
    score: 72,
    total: 100,
    passed: 18,
    failed: 7,
    timeTaken: "38:42",
    language: "Java",
  };

  const percentage = Math.round(
    ((result.score ?? 0) / (result.total ?? 100)) * 100
  );

  return (
    <main className="coding-result-page">
      <CircuitBackground />

      <div className="coding-result-overlay" />

      {/* HEADER */}

      <header className="coding-result-header">
        <div>
          <div className="result-brand">
            KINDLE JUNIOR <span>5.0</span>
          </div>

          <p className="result-subtitle">
            ROUND 02 · CODING ARENA
          </p>
        </div>

        <div className="result-status">
          <span className="status-dot" />
          ROUND COMPLETED
        </div>
      </header>

      {/* CONTENT */}

      <section className="coding-result-container">

        <div className="result-heading">
          <span className="result-eyebrow">
            SUBMISSION ANALYSIS
          </span>

          <h1>
            Challenge <span>Complete.</span>
          </h1>

          <p>
            Your Round 02 coding submission has been evaluated.
          </p>
        </div>

        {/* SCORE CARD */}

        <div className="score-card">

          <div className="score-left">

            <div className="score-label">
              FINAL SCORE
            </div>

            <div className="score-number">
              {result.score}
              <span>/{result.total}</span>
            </div>

            <div className="score-progress">
              <div
                className="score-progress-fill"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <div className="score-percentage">
              {percentage}% PERFORMANCE
            </div>

          </div>

          <div className="score-badge">
            <Trophy size={42} />

            <strong>
              {percentage >= 80
                ? "EXCELLENT"
                : percentage >= 60
                ? "GOOD WORK"
                : "KEEP PUSHING"}
            </strong>

            <span>
              CODING ARENA
            </span>
          </div>

        </div>

        {/* STATS */}

        <div className="result-stats">

          <div className="result-stat-card">
            <div className="stat-icon green">
              <CheckCircle2 size={21} />
            </div>

            <div>
              <span>TEST CASES PASSED</span>
              <strong>{result.passed}</strong>
            </div>
          </div>


          <div className="result-stat-card">
            <div className="stat-icon red">
              <XCircle size={21} />
            </div>

            <div>
              <span>TEST CASES FAILED</span>
              <strong>{result.failed}</strong>
            </div>
          </div>


          <div className="result-stat-card">
            <div className="stat-icon blue">
              <Clock3 size={21} />
            </div>

            <div>
              <span>TIME TAKEN</span>
              <strong>{result.timeTaken}</strong>
            </div>
          </div>


          <div className="result-stat-card">
            <div className="stat-icon purple">
              <Code2 size={21} />
            </div>

            <div>
              <span>LANGUAGE</span>
              <strong>{result.language}</strong>
            </div>
          </div>

        </div>


        {/* PROBLEM SUMMARY */}

        <div className="problem-summary">

          <div className="summary-header">
            <div>
              <span>ROUND 02</span>
              <h2>Problem Summary</h2>
            </div>

            <div className="summary-count">
              5 PROBLEMS
            </div>
          </div>


          <div className="problem-list">

            {[1, 2, 3, 4, 5].map((problem) => {

              const passed = problem <= 3;

              return (
                <div
                  className="problem-row"
                  key={problem}
                >

                  <div className="problem-number">
                    0{problem}
                  </div>

                  <div className="problem-name">
                    Coding Challenge {problem}
                  </div>

                  <div className="problem-result">
                    {passed ? (
                      <>
                        <CheckCircle2 size={16} />
                        PASSED
                      </>
                    ) : (
                      <>
                        <XCircle size={16} />
                        FAILED
                      </>
                    )}
                  </div>

                </div>
              );
            })}

          </div>

        </div>


        {/* ACTIONS */}

        <div className="result-actions">

          <Link
            to="/round-2-coding"
            className="retry-button"
          >
            <RotateCcw size={17} />
            VIEW SUBMISSION
          </Link>

          <Link
            to="/"
            className="finish-button"
          >
            FINISH ROUND
            <ArrowRight size={18} />
          </Link>

        </div>


        <div className="result-footer">
          <span>KINDLE JUNIOR 5.0</span>
          <i />
          <span>ROUND 02</span>
          <i />
          <span>CODING ARENA</span>
        </div>

      </section>
    </main>
  );
};

export default CodingResult;