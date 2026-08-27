import { useEffect, useMemo, useState } from "react";
import {
  Clock3,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import CircuitBackground from "../components/CircuitBackground";

type Question = {
  id: number;
  language: "C" | "C++" | "Python" | "Java" | "JavaScript";
  question: string;
  options: string[];
  answer: number;
};


const QUESTION_BANK: Question[] = [
  {
    id: 1,
    language: "C",
    question: "If a train travels 60 km in 1 hour, how far will it travel in 3 hours at the same speed?",
    options: ["120 km", "180 km", "200 km", "90 km"],
    answer: 1,
  },
  {
    id: 2,
    language: "C",
    question: "What comes next in the series: 2, 4, 8, 16, __?",
    options: ["18", "24", "32", "20"],
    answer: 2,
  },
  {
    id: 3,
    language: "C",
    question: "If 5 workers can build a wall in 10 days, how many days will 10 workers take?",
    options: ["20 days", "5 days", "10 days", "2 days"],
    answer: 1,
  },
  {
    id: 4,
    language: "C",
    question: "A shopkeeper sells an item for Rs.120 which cost him Rs.100. What is his profit percentage?",
    options: ["10%", "15%", "20%", "25%"],
    answer: 2,
  },
  {
    id: 5,
    language: "C",
    question: "Find the odd one out: Apple, Banana, Carrot, Mango",
    options: ["Apple", "Banana", "Carrot", "Mango"],
    answer: 2,
  },
  {
    id: 6,
    language: "C",
    question: "If today is Monday, what day will it be after 10 days?",
    options: ["Wednesday", "Thursday", "Friday", "Tuesday"],
    answer: 1,
  },
  {
    id: 7,
    language: "C",
    question: "Which of the following is used to declare an integer variable in C?",
    options: ["int x;", "integer x;", "var x;", "num x;"],
    answer: 0,
  },
  {
    id: 8,
    language: "C",
    question: "Which symbol is used to end a statement in C?",
    options: [":", ";", ".", ","],
    answer: 1,
  },
  {
    id: 9,
    language: "C",
    question: "What is the correct format specifier for printing an integer using printf in C?",
    options: ["%d", "%f", "%s", "%c"],
    answer: 0,
  },
  {
    id: 10,
    language: "C",
    question: "Which header file is required to use printf() and scanf() in C?",
    options: ["stdlib.h", "stdio.h", "string.h", "math.h"],
    answer: 1,
  },
  {
    id: 11,
    language: "C",
    question: 'What will be the output of: printf("%d", 5+3);',
    options: ["53", "8", "5+3", "Error"],
    answer: 1,
  },
  {
    id: 12,
    language: "C",
    question: "Which loop is guaranteed to execute at least once in C?",
    options: ["for loop", "while loop", "do-while loop", "none of these"],
    answer: 2,
  },
  {
    id: 13,
    language: "C",
    question: "What is the size of an 'int' data type typically in C (on most systems)?",
    options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
    answer: 2,
  },
  {
    id: 14,
    language: "Python",
    question: "Which of the following is used to print output in Python?",
    options: ["echo()", "print()", "printf()", "cout"],
    answer: 1,
  },
  {
    id: 15,
    language: "Python",
    question: "How do you write a comment in Python?",
    options: ["// comment", "/* comment */", "# comment", "comment"],
    answer: 2,
  },
  {
    id: 16,
    language: "Python",
    question: "Which data type is the value True in Python?",
    options: ["int", "bool", "str", "float"],
    answer: 1,
  },
  {
    id: 17,
    language: "Python",
    question: "What is the correct file extension for Python files?",
    options: [".pt", ".pyt", ".py", ".pyth"],
    answer: 2,
  },
  {
    id: 18,
    language: "Python",
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "func", "define"],
    answer: 1,
  },
  {
    id: 19,
    language: "Python",
    question: 'What will len("Hello") return in Python?',
    options: ["4", "5", "6", "Error"],
    answer: 1,
  },
  {
    id: 20,
    language: "Python",
    question: "Which operator is used for exponentiation (power) in Python?",
    options: ["^", "**", "//", "%"],
    answer: 1,
  },
];

/* =========================================================
   SHUFFLE
========================================================= */

const shuffleQuestions = (questions: Question[]) => {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
};


/* =========================================================
   ROUND 1
========================================================= */

const Round1 = () => {
  const navigate = useNavigate();

  /*
   * Questions are shuffled ONCE when Round 1 starts.
   */
  const questions = useMemo(
    () => shuffleQuestions(QUESTION_BANK),
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  /*
   * Stores:
   * questionId -> selected option
   */
  const [answers, setAnswers] = useState<
    Record<number, number>
  >({});

  /*
   * 30 seconds for EVERY question.
   */
  const [timeLeft, setTimeLeft] = useState(30);

  const [showSubmit, setShowSubmit] = useState(false);

  /*
   * Prevents multiple automatic submissions.
   */
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = questions[currentIndex];

  /* =======================================================
     RESET TIMER FOR EVERY NEW QUESTION
  ======================================================= */

  useEffect(() => {
    setTimeLeft(30);
  }, [currentIndex]);


  /* =======================================================
     30 SECOND TIMER
  ======================================================= */

  useEffect(() => {
    if (submitted || showSubmit) return;

    if (timeLeft <= 0) {
      handleNextQuestion(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    timeLeft,
    currentIndex,
    submitted,
    showSubmit,
  ]);


  /* =======================================================
     SELECT ANSWER
  ======================================================= */

  const selectAnswer = (optionIndex: number) => {
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: optionIndex,
    }));
  };


  /* =======================================================
     NEXT QUESTION
  ======================================================= */

  const handleNextQuestion = (
    automatic = false
  ) => {
    if (currentIndex >= questions.length - 1) {
      setShowSubmit(true);
      return;
    }

    setCurrentIndex((previous) => previous + 1);
    setTimeLeft(30);
  };


  /* =======================================================
     FINAL SUBMISSION
  ======================================================= */

  const submitQuiz = () => {
    if (submitted) return;

    setSubmitted(true);

    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    questions.forEach((question) => {
      const selected = answers[question.id];

      if (selected === undefined) {
        unanswered++;
      } else if (selected === question.answer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    /*
     * 30 seconds × completed questions
     *
     * This represents the maximum time spent
     * across questions already visited.
     */
    const completedQuestions =
      currentIndex + 1;

    const totalTime =
      completedQuestions * 30 -
      timeLeft;

    const minutes = Math.floor(
      totalTime / 60
    );

    const seconds = totalTime % 60;

    const timeTaken =
      `${String(minutes).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}`;

    navigate("/round-1-result", {
      state: {
        score: correct,
        total: questions.length,
        correct,
        incorrect,
        unanswered,
        timeTaken,
      },
    });
  };


  /* =======================================================
     TIMER COLOR
  ======================================================= */

  const timerDanger = timeLeft <= 10;

  const progress =
    ((30 - timeLeft) / 30) * 100;


  return (
    <main className="round-page">

      <CircuitBackground />

      <div className="round-overlay" />


      {/* ===================================================
          HEADER
      =================================================== */}

      <header className="round-header">

        <div className="round-brand">

          <span className="round-brand-dot" />

          <div>
            <div className="round-brand-small">
              KINDLE JUNIOR
            </div>

            <div className="round-brand-name">
              5.0
            </div>
          </div>

        </div>


        <div className="round-title">
          ROUND 01 · RAPID FIRE
        </div>


        <div
          className={`round-timer ${
            timerDanger ? "timer-danger" : ""
          }`}
        >

          <Clock3 size={17} />

          <div>
            <span>TIME LEFT</span>

            <strong>
              00:{String(timeLeft).padStart(2, "0")}
            </strong>
          </div>

        </div>

      </header>


      {/* ===================================================
          MAIN
      =================================================== */}

      <section className="round-container">


        {/* QUESTION META */}

        <div className="question-meta">

          <div>

            <span className="question-label">
              QUESTION
            </span>

            <strong>
              {String(currentIndex + 1).padStart(
                2,
                "0"
              )}
              <small>
                / {String(questions.length).padStart(2, "0")}
              </small>
            </strong>

          </div>


          <div className="question-language">
            {currentQuestion.language}
          </div>

        </div>


        {/* PROGRESS */}

        <div className="question-progress">

          <div
            style={{
              width: `${
                ((currentIndex + 1) /
                  questions.length) *
                100
              }%`,
            }}
          />

        </div>


        {/* =================================================
            QUESTION CARD
        ================================================= */}

        <div className="question-card">

          <div className="question-card-top">

            <span>
              CHALLENGE {currentIndex + 1}
            </span>

            <span>
              30 SEC
            </span>

          </div>


          <h1>
            {currentQuestion.question}
          </h1>


          {/* OPTIONS */}

          <div className="options-container">

            {currentQuestion.options.map(
              (option, index) => {

                const selected =
                  answers[currentQuestion.id] ===
                  index;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      selectAnswer(index)
                    }
                    className={`option-card ${
                      selected
                        ? "option-selected"
                        : ""
                    }`}
                  >

                    <span className="option-number">
                      {String.fromCharCode(
                        65 + index
                      )}
                    </span>

                    <span className="option-text">
                      {option}
                    </span>

                    {selected && (
                      <CheckCircle2
                        size={18}
                        className="option-check"
                      />
                    )}

                  </button>
                );
              }
            )}

          </div>


          {/* TIMER BAR */}

          <div className="question-timer-bar">

            <div
              className={
                timerDanger
                  ? "timer-progress-danger"
                  : ""
              }
              style={{
                width: `${progress}%`,
              }}
            />

          </div>


          {/* NEXT */}

          <div className="question-action">

            <div className="rapid-note">

              <AlertTriangle size={14} />

              <span>
                Time-out automatically moves to
                the next question.
              </span>

            </div>


            <button
              className="next-question-button"
              onClick={() =>
                handleNextQuestion(false)
              }
            >

              {currentIndex ===
              questions.length - 1
                ? "SUBMIT ROUND"
                : "NEXT QUESTION"}

              <ChevronRight size={18} />

            </button>

          </div>

        </div>


        {/* BOTTOM INFO */}

        <div className="round-footer">

          <span>
            {currentIndex + 1} OF{" "}
            {questions.length} QUESTIONS
          </span>

          <i />

          <span>
            30 SECONDS EACH
          </span>

          <i />

          <span>
            NO BACKTRACKING
          </span>

        </div>

      </section>


      {/* ===================================================
          SUBMIT MODAL
      =================================================== */}

      {showSubmit && (

        <div className="submit-modal-backdrop">

          <div className="submit-modal">

            <div className="submit-modal-icon">
              <AlertTriangle size={25} />
            </div>

            <div className="submit-modal-label">
              ROUND 01 · SUBMISSION
            </div>

            <h2>
              Submit your attempt?
            </h2>

            <p>
              Once submitted, your answers cannot
              be changed. Your score will be calculated
              immediately.
            </p>


            <div className="submit-summary">

              <div>
                <span>QUESTIONS</span>
                <strong>
                  {questions.length}
                </strong>
              </div>

              <div>
                <span>ANSWERED</span>
                <strong>
                  {
                    Object.keys(answers).length
                  }
                </strong>
              </div>

              <div>
                <span>REMAINING</span>
                <strong>
                  {Math.max(
                    0,
                    questions.length -
                      Object.keys(answers).length
                  )}
                </strong>
              </div>

            </div>


            <div className="submit-modal-actions">

              {!submitted && (
                <button
                  className="cancel-submit"
                  onClick={() =>
                    setShowSubmit(false)
                  }
                >
                  GO BACK
                </button>
              )}

              <button
                className="confirm-submit"
                onClick={submitQuiz}
              >
                CONFIRM SUBMISSION
                <ChevronRight size={17} />
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
};

export default Round1;