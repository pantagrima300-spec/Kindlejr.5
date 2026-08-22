import {
  ArrowRight,
  Bug,
  Clock3,
  Code2,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";
import { Link } from "react-router-dom";
import CircuitBackground from "../components/CircuitBackground";

const Round2Guidelines = () => {
  return (
    <main className="round2-guidelines-page">
      <CircuitBackground />

      <div className="round2-guidelines-overlay" />

      {/* HEADER */}
      <header className="round2-header">
        <Link to="/round-1-result" className="round2-back">
          ← BACK
        </Link>

        <div className="round2-brand">
          <span className="round2-brand-dot" />

          <div>
            <span>KINDLE JUNIOR</span>
            <strong>5.0</strong>
          </div>
        </div>

        <div className="round2-header-label">
          ROUND 02
        </div>
      </header>

      {/* MAIN */}
      <section className="round2-guidelines-container">

        {/* INTRO */}
        <div className="round2-intro">

          <div className="round2-eyebrow">
            <span />
            ROUND 02 · ADVANCED CHALLENGE
          </div>

          <h1>
            Think.
            <span> Debug.</span>
            <br />
            Build.
          </h1>

          <p>
            Round 02 takes you beyond theoretical knowledge.
            Analyse real-world situations, identify problems,
            and turn your logic into solutions.
          </p>

        </div>


        {/* OVERVIEW CARDS */}
        <div className="round2-overview-grid">

          {/* CASE STUDY */}
          <article className="round2-feature-card">

            <div className="round2-card-top">

              <div className="round2-feature-icon case-icon">
                <BrainCircuit size={23} />
              </div>

              <span className="round2-card-number">
                01
              </span>

            </div>

            <div className="round2-card-label">
              CASE STUDY
            </div>

            <h2>
              Analyse the
              <span> Problem.</span>
            </h2>

            <p>
              Solve two real-world programming scenarios
              by analysing the requirements and proposing
              the most appropriate solution.
            </p>

            <div className="round2-card-meta">

              <div>
                <Clock3 size={15} />
                <span>10 MIN / QUESTION</span>
              </div>

              <strong>
                02 QUESTIONS
              </strong>

            </div>

          </article>


          {/* DEBUGGING */}
          <article className="round2-feature-card">

            <div className="round2-card-top">

              <div className="round2-feature-icon debug-icon">
                <Bug size={23} />
              </div>

              <span className="round2-card-number">
                02
              </span>

            </div>

            <div className="round2-card-label">
              DEBUGGING CHALLENGE
            </div>

            <h2>
              Find the
              <span> Bug.</span>
            </h2>

            <p>
              Identify and fix logical, syntactical,
              or runtime issues hidden inside five
              programming problems.
            </p>

            <div className="round2-card-meta">

              <div>
                <Clock3 size={15} />
                <span>05 MIN / QUESTION</span>
              </div>

              <strong>
                05 QUESTIONS
              </strong>

            </div>

          </article>

        </div>


        {/* TOTAL TIME */}
        <div className="round2-time-card">

          <div className="round2-time-icon">
            <Clock3 size={21} />
          </div>

          <div className="round2-time-content">

            <span>
              TOTAL ASSESSMENT TIME
            </span>

            <strong>
              45 <small>MINUTES</small>
            </strong>

          </div>

          <div className="round2-time-breakdown">

            <span>
              02 × 10 MIN
            </span>

            <i />

            <span>
              05 × 5 MIN
            </span>

          </div>

        </div>


        {/* RULES */}
        <div className="round2-rules">

          <div className="round2-rules-heading">

            <ShieldCheck size={18} />

            <span>
              BEFORE YOU BEGIN
            </span>

          </div>

          <div className="round2-rules-grid">

            <div>
              <strong>01</strong>
              <p>
                Questions are sequential and
                cannot be revisited once you move ahead.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <p>
                Each question has its own timer.
                Time-out automatically moves you forward.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <p>
                Submit your response before
                the timer reaches zero.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <p>
                Do not use unauthorised external
                resources or collaborate with others.
              </p>
            </div>

          </div>

        </div>


        {/* NEXT STAGE */}
        <div className="round2-next-stage">

          <div>
            <span>
              AFTER THE 45-MINUTE ASSESSMENT
            </span>

            <h3>
              Choose your coding language.
            </h3>

            <p>
              C · C++ · Python · Java
            </p>
          </div>

          <Code2 size={30} />

        </div>


        {/* ACTION */}
        <div className="round2-action">

          <div className="round2-action-note">
            <span />
            READY TO TAKE ON ROUND 02?
          </div>

          <Link
            to="/round-2/language"
            className="round2-start-button"
          >
            START ROUND 02

            <ArrowRight size={18} />
          </Link>

        </div>


        {/* FOOTER */}
        <div className="round2-footer">

          <span>
            KINDLE JUNIOR 5.0
          </span>

          <i />

          <span>
            ROUND 02
          </span>

          <i />

          <span>
            45 MINUTES
          </span>

        </div>

      </section>
    </main>
  );
};

export default Round2Guidelines;