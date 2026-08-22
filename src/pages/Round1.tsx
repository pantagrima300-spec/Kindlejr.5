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
    question: "Which symbol is used to access the address of a variable in C?",
    options: ["*", "&", "#", "@"],
    answer: 1,
  },
  {
    id: 2,
    language: "C",
    question: "Which function is used to allocate memory dynamically in C?",
    options: ["alloc()", "malloc()", "create()", "new()"],
    answer: 1,
  },
  {
    id: 3,
    language: "C",
    question: "Which of the following is NOT a storage class in C?",
    options: ["auto", "static", "register", "dynamic"],
    answer: 3,
  },
  {
    id: 4,
    language: "C",
    question: "What is the index of the first element of an array in C?",
    options: ["0", "1", "-1", "Depends on compiler"],
    answer: 0,
  },
  {
    id: 5,
    language: "C",
    question: "Which operator is used for logical AND?",
    options: ["&", "&&", "|", "||"],
    answer: 1,
  },

  {
    id: 6,
    language: "C++",
    question: "Which feature allows the same function name with different parameters?",
    options: [
      "Inheritance",
      "Encapsulation",
      "Function overloading",
      "Abstraction",
    ],
    answer: 2,
  },
  {
    id: 7,
    language: "C++",
    question: "Which keyword is used to create an object dynamically?",
    options: ["malloc", "alloc", "new", "create"],
    answer: 2,
  },
  {
    id: 8,
    language: "C++",
    question: "Which container follows FIFO order?",
    options: ["Stack", "Queue", "Set", "Map"],
    answer: 1,
  },
  {
    id: 9,
    language: "C++",
    question: "Which STL container stores unique sorted elements?",
    options: ["vector", "queue", "set", "stack"],
    answer: 2,
  },
  {
    id: 10,
    language: "C++",
    question: "Which concept allows a derived class to redefine a base class method?",
    options: [
      "Overloading",
      "Overriding",
      "Compilation",
      "Templating",
    ],
    answer: 1,
  },

  {
    id: 11,
    language: "Python",
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "define", "def", "func"],
    answer: 2,
  },
  {
    id: 12,
    language: "Python",
    question: "Which data type is immutable?",
    options: ["List", "Dictionary", "Set", "Tuple"],
    answer: 3,
  },
  {
    id: 13,
    language: "Python",
    question: "What does len([1, 2, 3]) return?",
    options: ["2", "3", "4", "Error"],
    answer: 1,
  },
  {
    id: 14,
    language: "Python",
    question: "Which symbol is used for exponentiation in Python?",
    options: ["^", "**", "//", "%%"],
    answer: 1,
  },
  {
    id: 15,
    language: "Python",
    question: "What is the output of bool(0)?",
    options: ["True", "False", "0", "None"],
    answer: 1,
  },
  {
    id: 16,
    language: "Python",
    question: "Which keyword is used to handle exceptions?",
    options: ["catch", "error", "try", "handle"],
    answer: 2,
  },
  {
    id: 17,
    language: "Python",
    question: "Which method adds an element to the end of a list?",
    options: ["push()", "insert()", "append()", "add()"],
    answer: 2,
  },
  {
    id: 18,
    language: "Python",
    question: "Which collection stores key-value pairs?",
    options: ["List", "Tuple", "Dictionary", "Set"],
    answer: 2,
  },

  {
    id: 19,
    language: "Java",
    question: "Which keyword is used to inherit a class in Java?",
    options: ["implements", "extends", "inherits", "super"],
    answer: 1,
  },
  {
    id: 20,
    language: "Java",
    question: "Which method is the entry point of a Java program?",
    options: [
      "start()",
      "run()",
      "main()",
      "execute()",
    ],
    answer: 2,
  },
  {
    id: 21,
    language: "Java",
    question: "Which keyword prevents a class from being inherited?",
    options: ["static", "private", "final", "const"],
    answer: 2,
  },
  {
    id: 22,
    language: "Java",
    question: "Which data structure stores unique elements?",
    options: ["ArrayList", "HashSet", "Array", "String"],
    answer: 1,
  },
  {
    id: 23,
    language: "Java",
    question: "Which keyword is used to create an object?",
    options: ["class", "object", "new", "create"],
    answer: 2,
  },
  {
    id: 24,
    language: "Java",
    question: "Which concept means hiding implementation details?",
    options: [
      "Inheritance",
      "Abstraction",
      "Overloading",
      "Compilation",
    ],
    answer: 1,
  },

  {
    id: 25,
    language: "JavaScript",
    question: "Which keyword declares a block-scoped variable?",
    options: ["var", "let", "define", "variable"],
    answer: 1,
  },
  {
    id: 26,
    language: "JavaScript",
    question: "What does typeof null return?",
    options: ["null", "object", "undefined", "boolean"],
    answer: 1,
  },
  {
    id: 27,
    language: "JavaScript",
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "add()", "append()", "insert()"],
    answer: 0,
  },
  {
    id: 28,
    language: "JavaScript",
    question: "Which operator checks both value and type?",
    options: ["==", "=", "===", "!="],
    answer: 2,
  },
  {
    id: 29,
    language: "JavaScript",
    question: "Which method creates a new array by transforming each element?",
    options: ["filter()", "map()", "reduce()", "find()"],
    answer: 1,
  },
  {
    id: 30,
    language: "JavaScript",
    question: "Which keyword is used to declare a constant?",
    options: ["constant", "static", "const", "final"],
    answer: 2,
  },

  {
    id: 31,
    language: "C++",
    question: "What is the average time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    answer: 1,
  },
  {
    id: 32,
    language: "Python",
    question: "Which algorithm uses divide and conquer?",
    options: [
      "Bubble Sort",
      "Merge Sort",
      "Linear Search",
      "Counting",
    ],
    answer: 1,
  },
  {
    id: 33,
    language: "Java",
    question: "Which data structure follows LIFO?",
    options: ["Queue", "Stack", "Heap", "Graph"],
    answer: 1,
  },
  {
    id: 34,
    language: "C",
    question: "Which data structure is commonly used for BFS?",
    options: ["Stack", "Queue", "Heap", "Array"],
    answer: 1,
  },
  {
    id: 35,
    language: "C++",
    question: "Which data structure is commonly used for DFS?",
    options: ["Queue", "Stack", "HashMap", "Heap"],
    answer: 1,
  },
  {
    id: 36,
    language: "Python",
    question: "What is the time complexity of accessing an element by index in a Python list?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
    answer: 2,
  },
  {
    id: 37,
    language: "JavaScript",
    question: "Which method executes a function for every array element?",
    options: ["forEach()", "map()", "filter()", "every()"],
    answer: 0,
  },
  {
    id: 38,
    language: "Java",
    question: "Which data structure provides key-value mapping?",
    options: ["HashMap", "Stack", "Queue", "Array"],
    answer: 0,
  },
  {
    id: 39,
    language: "C++",
    question: "Which sorting algorithm has average O(n log n) complexity?",
    options: [
      "Bubble Sort",
      "Selection Sort",
      "Merge Sort",
      "Linear Search",
    ],
    answer: 2,
  },
  {
    id: 40,
    language: "Python",
    question: "Which keyword exits a loop immediately?",
    options: ["stop", "exit", "break", "return"],
    answer: 2,
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