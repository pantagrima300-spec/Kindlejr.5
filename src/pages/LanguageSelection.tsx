import { useState } from "react";
import {
  ArrowRight,
  Check,
  Code2,
  Terminal,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import CircuitBackground from "../components/CircuitBackground";

type Language = "C" | "C++" | "Python" | "Java";

const languages: {
  name: Language;
  short: string;
  description: string;
}[] = [
  {
    name: "C",
    short: "C",
    description: "Procedural programming",
  },
  {
    name: "C++",
    short: "C++",
    description: "Object-oriented programming",
  },
  {
    name: "Python",
    short: "Py",
    description: "High-level programming",
  },
  {
    name: "Java",
    short: "J",
    description: "Object-oriented programming",
  },
];

const LanguageSelection = () => {
  const navigate = useNavigate();

  const [selectedLanguage, setSelectedLanguage] =
    useState<Language | null>(null);

  const handleContinue = () => {
    if (!selectedLanguage) return;

    navigate("/round-2/coding-arena", {
  state: {
    language: selectedLanguage,
  },
});
  };

  return (
    <main className="language-page">

      <CircuitBackground />

      <div className="language-overlay" />

      {/* HEADER */}
      <header className="language-header">

        <div className="language-brand">

          <span className="language-brand-dot" />

          <span>
            KINDLE JUNIOR <b>5.0</b>
          </span>

        </div>

        <div className="language-round">
          ROUND 02
        </div>

      </header>


      {/* MAIN */}
      <section className="language-container">

        <div className="language-eyebrow">
          <span />
          ROUND 02 · CODING ENVIRONMENT
        </div>


        <div className="language-title-row">

          <div>

            <h1>
              Choose your
              <span> language.</span>
            </h1>

            <p>
              Select the programming language you are
              most comfortable with. Your choice will
              be loaded into the coding environment.
            </p>

          </div>

          <div className="language-terminal-icon">
            <Terminal size={28} />
          </div>

        </div>


        {/* LANGUAGE GRID */}
        <div className="language-grid">

          {languages.map((language) => {

            const isSelected =
              selectedLanguage === language.name;

            return (
              <button
                key={language.name}
                className={`language-card ${
                  isSelected
                    ? "language-card-selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedLanguage(language.name)
                }
              >

                <div className="language-card-top">

                  <div className="language-symbol">
                    {language.short}
                  </div>

                  {isSelected && (
                    <div className="language-check">
                      <Check size={14} />
                    </div>
                  )}

                </div>

                <div className="language-card-name">
                  {language.name}
                </div>

                <div className="language-card-description">
                  {language.description}
                </div>

                <div className="language-card-arrow">
                  <ArrowRight size={15} />
                </div>

              </button>
            );
          })}

        </div>


        {/* INFO */}
        <div className="language-info">

          <div className="language-info-icon">
            <Code2 size={17} />
          </div>

          <div>
            <strong>
              Your environment will be configured
              automatically.
            </strong>

            <p>
              You will use the selected language for
              the case studies and debugging challenges.
            </p>
          </div>

        </div>


        {/* ACTION */}
        <div className="language-action">

          <div className="language-selection-status">

            <span
              className={
                selectedLanguage
                  ? "status-active"
                  : ""
              }
            />

            {selectedLanguage
              ? `${selectedLanguage} SELECTED`
              : "SELECT A LANGUAGE TO CONTINUE"}

          </div>

          <button
            className={`language-continue ${
              !selectedLanguage
                ? "language-continue-disabled"
                : ""
            }`}
            onClick={handleContinue}
            disabled={!selectedLanguage}
          >
            OPEN CODING ARENA

            <ArrowRight size={17} />
          </button>

        </div>


        {/* FOOTER */}
        <div className="language-footer">

          <span>
            C
          </span>

          <i />

          <span>
            C++
          </span>

          <i />

          <span>
            PYTHON
          </span>

          <i />

          <span>
            JAVA
          </span>

          <i />

          <span>
            MONACO ENVIRONMENT
          </span>

        </div>

      </section>

    </main>
  );
};

export default LanguageSelection;