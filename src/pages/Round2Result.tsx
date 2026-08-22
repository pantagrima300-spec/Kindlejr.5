import {
  CheckCircle2,
  XCircle,
  CircleHelp,
  Clock3,
  Trophy,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import CircuitBackground from "../components/CircuitBackground";
const Round1Result = () => {
  const location = useLocation();
  const result = location.state || {
    score: 0,
    total: 40,
    correct: 32,
    incorrect: 5,
    unanswered: 3,
    timeTaken: "32:18",
  };

  const percentage = Math.round(
    (result.correct / result.total) * 100
  );

  return (
    <main className="result-page">

      <CircuitBackground />

      <div className="result-overlay" />

      {/* HEADER */}

      <header className="result-header">

        <div className="result-brand">
          <span className="brand-dot" />

          <div>
            <div className="brand-small">
              IEEE STUDENT BRANCH · GRAPHIC ERA UNIVERSITY
            </div>

            <div className="brand-name">
              KINDLE JUNIOR <b>5.0</b>
            </div>
          </div>
        </div>

        <div className="result-round">
          ROUND 02 · COMPLETED
        </div>

      </header>


      {/* MAIN */}

      <section className="result-container">

        {/* TOP */}

        <div className="result-heading">

          <div className="result-icon">
            <Trophy size={30} />
          </div>

          <div>
            <div className="result-eyebrow">
              ROUND 02 · PERFORMANCE SUMMARY
            </div>

            <h1>
              Challenge <span>Complete.</span>
            </h1>

            <p>
              Your Round 02 attempt has been recorded successfully.
            </p>
          </div>

        </div>


        {/* SCORE CARD */}

        <div className="score-card">

          <div className="score-left">

            <div className="score-label">
              YOUR SCORE
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
              {percentage}% ACCURACY
            </div>

          </div>


          <div className="score-status">

            <div className="status-icon">
              <ShieldCheck size={24} />
            </div>

            <div>
              <strong>Round Submitted</strong>

              <p>
                Your responses have been securely recorded.
              </p>
            </div>

          </div>

        </div>


        {/* STAT CARDS */}

        <div className="result-stats">

          <div className="result-stat">

            <div className="stat-icon correct">
              <CheckCircle2 size={21} />
            </div>

            <div>
              <span>CORRECT</span>
              <strong>{result.correct}</strong>
            </div>

          </div>


          <div className="result-stat">

            <div className="stat-icon incorrect">
              <XCircle size={21} />
            </div>

            <div>
              <span>INCORRECT</span>
              <strong>{result.incorrect}</strong>
            </div>

          </div>


          <div className="result-stat">

            <div className="stat-icon unanswered">
              <CircleHelp size={21} />
            </div>

            <div>
              <span>UNANSWERED</span>
              <strong>{result.unanswered}</strong>
            </div>

          </div>


          <div className="result-stat">

            <div className="stat-icon time">
              <Clock3 size={21} />
            </div>

            <div>
              <span>TIME TAKEN</span>
              <strong>{result.timeTaken}</strong>
            </div>

          </div>

        </div>


        {/* INFO */}

        <div className="result-info">

          <div className="info-number">
            02
          </div>

          <div>
            <strong>Round 02 Recorded</strong>

            <p>
              Your performance has been saved. Keep this result
              for your reference before proceeding to the next stage.
            </p>
          </div>

        </div>


        {/* ACTIONS */}

        <div className="result-actions">

          <Link
            to="/"
            className="result-secondary"
          >
            <RotateCcw size={16} />
            BACK TO HOME
          </Link>


          <Link
            to="/round-3-guidelines"
            className="result-primary"
          >
            CONTINUE TO ROUND 03

            <ArrowRight size={18} />

          </Link>

        </div>


        {/* FOOTER */}

        <div className="result-footer">

          <span>ROUND 02</span>

          <i />

          <span>7 QUESTIONS</span>

          <i />

          <span>45 MINUTES</span>

        </div>

      </section>

    </main>
  );
};

export default Round1Result;