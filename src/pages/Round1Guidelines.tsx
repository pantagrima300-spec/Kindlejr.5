import {
  ArrowRight,
  Clock3,
  Code2,
  FileQuestion,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router-dom";
import CircuitBackground from "../components/CircuitBackground";

const Round1Guidelines = () => {
  return (
    <main className="guidelines-page">

      <CircuitBackground />

      <div className="guidelines-overlay" />

      {/* TOP BAR */}

      <header className="guidelines-top">

        <div className="guidelines-brand">
          <div className="guidelines-brand-mark">
            <ShieldCheck size={17} />
          </div>

          <div>
            <strong>IEEE STUDENT BRANCH</strong>
            <span>GRAPHIC ERA UNIVERSITY</span>
          </div>
        </div>


        <div className="guidelines-event">
          KINDLE JUNIOR <b>5.0</b>
        </div>

      </header>


      {/* CONTENT */}

      <section className="guidelines-container">

        <div className="guidelines-heading">

          <span className="guidelines-eyebrow">
            ROUND 01 · BEFORE YOU BEGIN
          </span>

          <h1>
            Know the
            <span> Rules.</span>
          </h1>

          <p>
            Read the following instructions carefully before
            starting your coding challenge.
          </p>

        </div>


        {/* GUIDELINES CARD */}

        <div className="guidelines-card">

          {/* CARD HEADER */}

          <div className="guidelines-card-header">

            <div>

              <span>
                KINDLE JUNIOR 5.0
              </span>

              <h2>
                ROUND 01
              </h2>

            </div>

            <div className="round-number">
              01
            </div>

          </div>


          {/* GUIDELINES GRID */}

          <div className="guidelines-grid">

            <div className="guideline-item">

              <div className="guideline-icon">
                <FileQuestion size={19} />
              </div>

              <div>
                <strong>20 Questions</strong>

                <p>
                  You will answer 20 multiple-choice
                  questions.
                </p>
              </div>

            </div>


            <div className="guideline-item">

              <div className="guideline-icon">
                <Clock3 size={19} />
              </div>

              <div>
                <strong>10 Minutes</strong>

                <p>
                  You have a total of 10 minutes
                  to complete the round.
                </p>
              </div>

            </div>


            <div className="guideline-item">

              <div className="guideline-icon">
                <Code2 size={19} />
              </div>

              <div>
                <strong>Programming Domains</strong>

                <p>
                  Questions will cover C, python 
                  and basic aptitude

                </p>
              </div>

            </div>


            <div className="guideline-item">

              <div className="guideline-icon">
                <Clock3 size={19} />
              </div>

              <div>
                <strong>30 seconds Per Question</strong>

                <p>
                  The round is designed around
                  approximately 30 seconds per question.
                </p>
              </div>

            </div>

          </div>


          {/* WARNING */}

          <div className="guidelines-warning">

            <ShieldCheck size={17} />

            <div>

              <strong>
                Read Carefully
              </strong>

              <p>
                Once submitted, answers may not be changed.
                Manage your time wisely.
              </p>

            </div>

          </div>


          {/* FOOTER */}

          <div className="guidelines-card-footer">

            <div className="question-domains">
              C · PYTHON 
            </div>

            <Link
              to="/round-1"
              className="proceed-button"
            >
              <span>
                PROCEED TO ROUND 01
              </span>

              <ArrowRight size={17} />
            </Link>

          </div>

        </div>


        {/* BOTTOM META */}

        <div className="guidelines-meta">

          <span>PARTICIPANT ACCESS</span>

          <i />

          <span>ROUND 01</span>

          <i />

          <span>20QUESTIONS</span>

          <i />

          <span>10 MINUTES</span>

        </div>

      </section>

    </main>
  );
};

export default Round1Guidelines;