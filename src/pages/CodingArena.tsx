import { useEffect, useMemo, useState } from "react";
import Editor from "@monaco-editor/react";
import {
  Play,
  Send,
  Clock3,
  ChevronDown,
  CheckCircle2,
  XCircle,
  Terminal,
  Code2,
  FileText,
  RotateCcw,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Bug,
  Network,
  Search,
  GitBranch,
  AlertTriangle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import CircuitBackground from "../components/CircuitBackground";

type Language = "C" | "C++" | "Python" | "Java";

type QuestionType = "CASE STUDY" | "DEBUGGING";

type Question = {
  id: number;
  type: QuestionType;
  title: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  tags: string[];
  statement: string[];
  input: string;
  output: string;
  constraints: string[];
  starter: Record<Language, string>;
};

const starterCodes: Record<Language, string> = {
  C: `#include <stdio.h>

int main() {
    // Write your solution here

    return 0;
}`,

  "C++": `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Write your solution here

    return 0;
}`,

  Python: `def solve():
    # Write your solution here
    pass


if __name__ == "__main__":
    solve()`,

  Java: `import java.util.*;

public class Main {

    public static void main(String[] args) {
        // Write your solution here
    }
}`,
};

/* ============================================================
   QUESTIONS
============================================================ */

const questions: Question[] = [
  {
    id: 1,
    type: "CASE STUDY",
    title: "Network Outage Rerouting",
    difficulty: "MEDIUM",
    tags: ["GRAPH", "SHORTEST PATH", "DSA"],

    statement: [
      "A network consists of several interconnected nodes. During an outage, one or more connections between nodes may become unavailable.",
      "Your task is to determine an alternative route from the source node to the destination while minimizing the total path cost.",
      "If the original route becomes unavailable, your algorithm should dynamically find the best available route.",
    ],

    input: `N M
u v w
...
S D`,

    output:
      "Print the minimum cost of the available route from S to D.",

    constraints: [
      "1 ≤ N ≤ 10⁵",
      "1 ≤ M ≤ 2 × 10⁵",
      "Edge weights are positive.",
      "A valid route may not always exist.",
    ],

    starter: starterCodes,
  },

  {
    id: 2,
    type: "CASE STUDY",
    title: "Emergency Delivery Network",
    difficulty: "MEDIUM",
    tags: ["GRAPH", "DIJKSTRA", "PRIORITY QUEUE"],

    statement: [
      "An emergency delivery system connects multiple locations through roads with different travel times.",
      "An ambulance starts from a source location and needs to reach a hospital as quickly as possible.",
      "Some roads may become unavailable. Find the shortest available route after considering the active roads.",
    ],

    input: `N M
u v time
...
S D`,

    output:
      "Print the minimum travel time from S to D. Print -1 if the destination is unreachable.",

    constraints: [
      "1 ≤ N ≤ 10⁵",
      "1 ≤ M ≤ 2 × 10⁵",
      "1 ≤ time ≤ 10⁶",
      "All travel times are positive.",
    ],

    starter: starterCodes,
  },

  {
    id: 3,
    type: "DEBUGGING",
    title: "The Vanishing Element",
    difficulty: "EASY",
    tags: ["ARRAY", "LOOP", "DEBUGGING"],

    statement: [
      "The following program is supposed to find the largest element in an array.",
      "It works for some inputs but produces incorrect results for others.",
      "Find and fix the logical error.",
    ],

    input: `5
4 9 2 7 6`,

    output: `9`,

    constraints: [
      "Array contains at least one element.",
      "Elements may be negative.",
      "Do not change the overall approach.",
    ],

    starter: {
      C: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    int a[n];

    for(int i = 0; i < n; i++)
        scanf("%d", &a[i]);

    int maximum = 0;

    for(int i = 0; i < n; i++) {
        if(a[i] < maximum)
            maximum = a[i];
    }

    printf("%d", maximum);

    return 0;
}`,

      "C++": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);

    for(int &x : a)
        cin >> x;

    int maximum = 0;

    for(int i = 0; i < n; i++) {
        if(a[i] < maximum)
            maximum = a[i];
    }

    cout << maximum;

    return 0;
}`,

      Python: `n = int(input())
a = list(map(int, input().split()))

maximum = 0

for x in a:
    if x < maximum:
        maximum = x

print(maximum)`,

      Java: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] a = new int[n];

        for(int i = 0; i < n; i++)
            a[i] = sc.nextInt();

        int maximum = 0;

        for(int i = 0; i < n; i++) {
            if(a[i] < maximum)
                maximum = a[i];
        }

        System.out.println(maximum);
    }
}`,
    },
  },

  {
    id: 4,
    type: "DEBUGGING",
    title: "Infinite Search",
    difficulty: "MEDIUM",
    tags: ["BINARY SEARCH", "LOOP", "DEBUGGING"],

    statement: [
      "The program performs binary search on a sorted array.",
      "For some inputs it gets stuck in an infinite loop.",
      "Identify the bug and fix the implementation.",
    ],

    input: `7
1 3 5 7 9 11 13
9`,

    output: `4`,

    constraints: [
      "Array is sorted in ascending order.",
      "1 ≤ N ≤ 10⁵",
      "Target may not exist.",
    ],

    starter: {
      C: `#include <stdio.h>

int main() {

    int n;
    scanf("%d", &n);

    int a[n];

    for(int i = 0; i < n; i++)
        scanf("%d", &a[i]);

    int target;
    scanf("%d", &target);

    int low = 0;
    int high = n - 1;

    while(low <= high) {

        int mid = (low + high) / 2;

        if(a[mid] == target) {
            printf("%d", mid);
            return 0;
        }

        if(a[mid] < target)
            low = mid;

        else
            high = mid;
    }

    printf("-1");

    return 0;
}`,

      "C++": `#include <bits/stdc++.h>
using namespace std;

int main() {

    int n;
    cin >> n;

    vector<int> a(n);

    for(int &x : a)
        cin >> x;

    int target;
    cin >> target;

    int low = 0;
    int high = n - 1;

    while(low <= high) {

        int mid = (low + high) / 2;

        if(a[mid] == target) {
            cout << mid;
            return 0;
        }

        if(a[mid] < target)
            low = mid;

        else
            high = mid;
    }

    cout << -1;

    return 0;
}`,

      Python: `n = int(input())
a = list(map(int, input().split()))
target = int(input())

low = 0
high = n - 1

while low <= high:

    mid = (low + high) // 2

    if a[mid] == target:
        print(mid)
        break

    if a[mid] < target:
        low = mid
    else:
        high = mid
else:
    print(-1)`,

      Java: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] a = new int[n];

        for(int i = 0; i < n; i++)
            a[i] = sc.nextInt();

        int target = sc.nextInt();

        int low = 0;
        int high = n - 1;

        while(low <= high) {

            int mid = (low + high) / 2;

            if(a[mid] == target) {
                System.out.println(mid);
                return;
            }

            if(a[mid] < target)
                low = mid;

            else
                high = mid;
        }

        System.out.println(-1);
    }
}`,
    },
  },

  {
    id: 5,
    type: "DEBUGGING",
    title: "The Broken Counter",
    difficulty: "EASY",
    tags: ["LOOPS", "CONDITIONS", "DEBUGGING"],

    statement: [
      "The program should count how many even numbers are present in an array.",
      "The current implementation returns an incorrect count.",
      "Find the logical error without rewriting the entire program.",
    ],

    input: `6
2 5 8 11 14 17`,

    output: `3`,

    constraints: [
      "1 ≤ N ≤ 10⁵",
      "Numbers may be positive or negative.",
    ],

    starter: {
      C: `#include <stdio.h>

int main() {

    int n;
    scanf("%d", &n);

    int count = 0;

    for(int i = 0; i < n; i++) {

        int x;
        scanf("%d", &x);

        if(x % 2 == 1)
            count++;
    }

    printf("%d", count);

    return 0;
}`,

      "C++": `#include <bits/stdc++.h>
using namespace std;

int main() {

    int n;
    cin >> n;

    int count = 0;

    for(int i = 0; i < n; i++) {

        int x;
        cin >> x;

        if(x % 2 == 1)
            count++;
    }

    cout << count;

    return 0;
}`,

      Python: `n = int(input())
a = list(map(int, input().split()))

count = 0

for x in a:
    if x % 2 == 1:
        count += 1

print(count)`,

      Java: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int count = 0;

        for(int i = 0; i < n; i++) {

            int x = sc.nextInt();

            if(x % 2 == 1)
                count++;
        }

        System.out.println(count);
    }
}`,
    },
  },

  {
    id: 6,
    type: "DEBUGGING",
    title: "The Missing Update",
    difficulty: "MEDIUM",
    tags: ["WHILE LOOP", "LOGIC", "DEBUGGING"],

    statement: [
      "The program should calculate the sum of numbers from 1 to N.",
      "Instead, it gets stuck and never finishes.",
      "Identify why the program does not terminate and fix it.",
    ],

    input: `5`,

    output: `15`,

    constraints: [
      "1 ≤ N ≤ 10⁶",
      "The solution must terminate for every valid input.",
    ],

    starter: {
      C: `#include <stdio.h>

int main() {

    int n;
    scanf("%d", &n);

    int i = 1;
    int sum = 0;

    while(i <= n) {
        sum += i;
    }

    printf("%d", sum);

    return 0;
}`,

      "C++": `#include <bits/stdc++.h>
using namespace std;

int main() {

    int n;
    cin >> n;

    int i = 1;
    int sum = 0;

    while(i <= n) {
        sum += i;
    }

    cout << sum;

    return 0;
}`,

      Python: `n = int(input())

i = 1
total = 0

while i <= n:
    total += i

print(total)`,

      Java: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int i = 1;
        int sum = 0;

        while(i <= n) {
            sum += i;
        }

        System.out.println(sum);
    }
}`,
    },
  },

  {
    id: 7,
    type: "DEBUGGING",
    title: "Duplicate Detector",
    difficulty: "HARD",
    tags: ["ARRAY", "HASHING", "DEBUGGING"],

    statement: [
      "The program should determine whether an array contains duplicate values.",
      "The current logic fails for several valid inputs.",
      "Debug the program while keeping the solution efficient.",
    ],

    input: `6
2 4 7 2 9 5`,

    output: `YES`,

    constraints: [
      "1 ≤ N ≤ 10⁵",
      "Values may be negative.",
      "Expected complexity: O(N) average.",
    ],

    starter: {
      C: `#include <stdio.h>

int main() {

    int n;
    scanf("%d", &n);

    int a[n];

    for(int i = 0; i < n; i++)
        scanf("%d", &a[i]);

    int duplicate = 0;

    for(int i = 0; i < n; i++) {
        for(int j = i + 1; j < n; j++) {

            if(a[i] != a[j]) {
                duplicate = 1;
            }
        }
    }

    if(duplicate)
        printf("YES");
    else
        printf("NO");

    return 0;
}`,

      "C++": `#include <bits/stdc++.h>
using namespace std;

int main() {

    int n;
    cin >> n;

    vector<int> a(n);

    for(int &x : a)
        cin >> x;

    int duplicate = 0;

    for(int i = 0; i < n; i++) {
        for(int j = i + 1; j < n; j++) {

            if(a[i] != a[j])
                duplicate = 1;
        }
    }

    cout << (duplicate ? "YES" : "NO");

    return 0;
}`,

      Python: `n = int(input())
a = list(map(int, input().split()))

duplicate = False

for i in range(n):
    for j in range(i + 1, n):

        if a[i] != a[j]:
            duplicate = True

print("YES" if duplicate else "NO")`,

      Java: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] a = new int[n];

        for(int i = 0; i < n; i++)
            a[i] = sc.nextInt();

        boolean duplicate = false;

        for(int i = 0; i < n; i++) {

            for(int j = i + 1; j < n; j++) {

                if(a[i] != a[j])
                    duplicate = true;
            }
        }

        System.out.println(duplicate ? "YES" : "NO");
    }
}`,
    },
  },
];

/* ============================================================
   LANGUAGE CONFIG
============================================================ */

const languageConfig: Record<
  Language,
  {
    monaco: string;
  }
> = {
  C: {
    monaco: "c",
  },

  "C++": {
    monaco: "cpp",
  },

  Python: {
    monaco: "python",
  },

  Java: {
    monaco: "java",
  },
};

/* ============================================================
   COMPONENT
============================================================ */

const CodingArena = () => {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [language, setLanguage] =
    useState<Language>("C++");

  const [code, setCode] = useState(
    questions[0].starter["C++"]
  );

  const [timeLeft, setTimeLeft] =
    useState(45 * 60);

  const [showLanguageMenu, setShowLanguageMenu] =
    useState(false);

  const [activeTab, setActiveTab] =
    useState<"tests" | "output">("tests");

  const [isRunning, setIsRunning] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [solvedQuestions, setSolvedQuestions] =
    useState<number[]>([]);

  const [testResults, setTestResults] =
    useState<
      { name: string; passed: boolean }[]
    >([]);

  const question = questions[currentQuestion];

  /* ==========================================================
     TIMER
  ========================================================== */

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((previous) =>
        previous - 1
      );
    }, 1000);

    return () =>
      clearInterval(timer);
  }, [timeLeft]);

  /* ==========================================================
     TIMER FORMAT
  ========================================================== */

  const formatTime = (seconds: number) => {
    const minutes =
      Math.floor(seconds / 60);

    const remainingSeconds =
      seconds % 60;

    return `${String(minutes).padStart(
      2,
      "0"
    )}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  /* ==========================================================
     SWITCH QUESTION
  ========================================================== */

  const switchQuestion = (
    index: number
  ) => {
    setCurrentQuestion(index);

    setCode(
      questions[index].starter[language]
    );

    setTestResults([]);
    setSubmitted(false);
    setActiveTab("tests");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ==========================================================
     LANGUAGE CHANGE
  ========================================================== */

  const changeLanguage = (
    newLanguage: Language
  ) => {
    setLanguage(newLanguage);

    setCode(
      question.starter[newLanguage]
    );

    setShowLanguageMenu(false);

    setTestResults([]);
    setSubmitted(false);
  };

  /* ==========================================================
     RUN
  ========================================================== */

  const handleRun = () => {
    setIsRunning(true);
    setActiveTab("tests");

    setTimeout(() => {
      setIsRunning(false);

      setTestResults([
        {
          name: "Sample Test Case 01",
          passed: true,
        },
        {
          name: "Sample Test Case 02",
          passed: true,
        },
        {
          name: "Hidden Test Case",
          passed: false,
        },
      ]);
    }, 1200);
  };

  /* ==========================================================
     SUBMIT
  ========================================================== */

  const handleSubmit = () => {
    setSubmitted(true);
    setActiveTab("output");

    if (
      !solvedQuestions.includes(
        question.id
      )
    ) {
      setSolvedQuestions((previous) => [
        ...previous,
        question.id,
      ]);
    }

    setTimeout(() => {
      setSubmitted(false);
    }, 2500);
  };

  /* ==========================================================
     RESET
  ========================================================== */

  const handleReset = () => {
    setCode(
      question.starter[language]
    );

    setTestResults([]);
    setSubmitted(false);
  };

  /* ==========================================================
     EXIT
  ========================================================== */

  const handleExit = () => {
    navigate("/round-2-result");
  };

  /* ==========================================================
     PREVIOUS
  ========================================================== */

  const handlePrevious = () => {
    if (currentQuestion === 0) return;

    switchQuestion(
      currentQuestion - 1
    );
  };

  /* ==========================================================
     NEXT
  ========================================================== */

  const handleNext = () => {
    if (
      currentQuestion ===
      questions.length - 1
    ) {
      return;
    }

    switchQuestion(
      currentQuestion + 1
    );
  };

  /* ==========================================================
     PROGRESS
  ========================================================== */

  const progress = useMemo(() => {
    return Math.round(
      ((currentQuestion + 1) /
        questions.length) *
        100
    );
  }, [currentQuestion]);

  return (
    <main className="coding-arena-page">

      <CircuitBackground />

      <div className="arena-overlay" />

      {/* ======================================================
          HEADER
      ======================================================= */}

      <header className="arena-header">

        <div className="arena-brand">

          <div className="arena-brand-mark">
            <Code2 size={20} />
          </div>

          <div>

            <div className="arena-brand-title">
              KINDLE JUNIOR{" "}
              <span>5.0</span>
            </div>

            <div className="arena-brand-subtitle">
              IEEE STUDENT BRANCH ·
              GRAPHIC ERA UNIVERSITY
            </div>

          </div>

        </div>

        <div className="arena-center-title">

          <span className="round-label">
            ROUND 02
          </span>

          <span className="arena-divider">
            /
          </span>

          <span>
            CODING ARENA
          </span>

        </div>

        <div className="arena-header-right">

          <button
            className="exit-button"
            onClick={handleExit}
          >
            <XCircle size={16} />
            EXIT
          </button>

          <div
            className={`arena-timer ${
              timeLeft <= 300
                ? "timer-warning"
                : ""
            }`}
          >

            <Clock3 size={17} />

            <div>

              <small>
                TIME LEFT
              </small>

              <strong>
                {formatTime(timeLeft)}
              </strong>

            </div>

          </div>

        </div>

      </header>

      {/* ======================================================
          QUESTION NAVIGATION
      ======================================================= */}

      <div className="question-navigation">

        <div className="question-nav-inner">

          <div className="question-nav-title">
            CHALLENGES
          </div>

          <div className="question-buttons">

            {questions.map(
              (item, index) => {

                const active =
                  index ===
                  currentQuestion;

                const solved =
                  solvedQuestions.includes(
                    item.id
                  );

                return (
                  <button
                    key={item.id}
                    className={`question-button ${
                      active
                        ? "question-active"
                        : ""
                    } ${
                      solved
                        ? "question-solved"
                        : ""
                    }`}
                    onClick={() =>
                      switchQuestion(
                        index
                      )
                    }
                  >

                    <span className="question-button-number">
                      {String(
                        item.id
                      ).padStart(2, "0")}
                    </span>

                    {item.type ===
                    "CASE STUDY" ? (
                      <Network size={13} />
                    ) : (
                      <Bug size={13} />
                    )}

                    <span>
                      {item.type ===
                      "CASE STUDY"
                        ? "CASE"
                        : "BUG"}
                    </span>

                    {solved && (
                      <CheckCircle2
                        size={12}
                      />
                    )}

                  </button>
                );
              }
            )}

          </div>

          <div className="question-progress">

            <span>
              {currentQuestion + 1}
            </span>

            /
            
            {questions.length}

            <div className="progress-bar">

              <div
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>

        </div>

      </div>

      {/* ======================================================
          MAIN ARENA
      ======================================================= */}

      <section className="arena-workspace">

        {/* ====================================================
            LEFT QUESTION PANEL
        ===================================================== */}

        <aside className="problem-panel">

          <div className="problem-header">

            <div className="problem-number">

              QUESTION{" "}
              {String(
                question.id
              ).padStart(2, "0")}

            </div>

            <div className="difficulty">

              {question.type ===
              "CASE STUDY" ? (
                <Network size={13} />
              ) : (
                <Bug size={13} />
              )}

              {question.type}

            </div>

          </div>

          <div className="problem-content">

            <div className="problem-category">

              {question.type ===
              "CASE STUDY"
                ? "SYSTEM DESIGN CHALLENGE"
                : "DEBUGGING CHALLENGE"}

            </div>

            <h1>
              {question.title}
            </h1>

            <div className="problem-tags">

              {question.tags.map(
                (tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                )
              )}

            </div>

            <div className="difficulty-line">

              <span>
                DIFFICULTY
              </span>

              <strong>
                {question.difficulty}
              </strong>

            </div>

            {/* STATEMENT */}

            <section className="statement-section">

              <h3>

                <FileText size={15} />

                PROBLEM STATEMENT

              </h3>

              {question.statement.map(
                (paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                )
              )}

            </section>

            {/* INPUT */}

            <section className="statement-section">

              <h3>
                INPUT
              </h3>

              <div className="code-block">
                <code>
                  {question.input}
                </code>
              </div>

            </section>

            {/* OUTPUT */}

            <section className="statement-section">

              <h3>
                OUTPUT
              </h3>

              <p>
                {question.output}
              </p>

            </section>

            {/* CONSTRAINTS */}

            <section className="statement-section">

              <h3>
                CONSTRAINTS
              </h3>

              <ul>

                {question.constraints.map(
                  (constraint) => (
                    <li
                      key={constraint}
                    >
                      {constraint}
                    </li>
                  )
                )}

              </ul>

            </section>

          </div>

        </aside>

        {/* ====================================================
            RIGHT IDE
        ===================================================== */}

        <section className="ide-panel">

          {/* TOOLBAR */}

          <div className="ide-toolbar">

            <div className="language-selector-wrapper">

              <button
                className="language-selector"
                onClick={() =>
                  setShowLanguageMenu(
                    !showLanguageMenu
                  )
                }
              >

                <Code2 size={16} />

                <span>
                  {language}
                </span>

                <ChevronDown
                  size={15}
                />

              </button>

              {showLanguageMenu && (

                <div className="language-menu">

                  {(
                    Object.keys(
                      languageConfig
                    ) as Language[]
                  ).map(
                    (item) => (

                      <button
                        key={item}
                        className={`language-option ${
                          language ===
                          item
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          changeLanguage(
                            item
                          )
                        }
                      >

                        <span>
                          {item}
                        </span>

                        {language ===
                          item && (
                          <CheckCircle2
                            size={15}
                          />
                        )}

                      </button>

                    )
                  )}

                </div>

              )}

            </div>

            <div className="editor-question-info">

              <span>
                {question.type}
              </span>

              <b>
                #{String(
                  question.id
                ).padStart(2, "0")}
              </b>

            </div>

            <div className="editor-actions">

              <button
                className="icon-action"
                title="Reset"
                onClick={
                  handleReset
                }
              >
                <RotateCcw
                  size={16}
                />
              </button>

              <button
                className="icon-action"
                title="Fullscreen"
              >
                <Maximize2
                  size={16}
                />
              </button>

            </div>

          </div>

          {/* EDITOR */}

          <div className="editor-container">

            <Editor
              height="100%"
              language={
                languageConfig[
                  language
                ].monaco
              }
              value={code}
              onChange={(value) =>
                setCode(
                  value ?? ""
                )
              }
              theme="vs-dark"
              options={{
                fontSize: 14,
                minimap: {
                  enabled: true,
                },
                automaticLayout: true,
                padding: {
                  top: 18,
                },
                smoothScrolling:
                  true,
                cursorSmoothCaretAnimation:
                  "on",
                scrollBeyondLastLine:
                  false,
                wordWrap: "on",
                lineNumbers: "on",
                renderLineHighlight:
                  "all",
                tabSize: 4,
              }}
            />

          </div>

          {/* BOTTOM PANEL */}

          <div className="bottom-panel">

            <div className="bottom-tabs">

              <button
                className={
                  activeTab ===
                  "tests"
                    ? "bottom-tab active"
                    : "bottom-tab"
                }
                onClick={() =>
                  setActiveTab(
                    "tests"
                  )
                }
              >

                <Terminal
                  size={15}
                />

                TEST CASES

              </button>

              <button
                className={
                  activeTab ===
                  "output"
                    ? "bottom-tab active"
                    : "bottom-tab"
                }
                onClick={() =>
                  setActiveTab(
                    "output"
                  )
                }
              >

                OUTPUT

              </button>

            </div>

            <div className="test-content">

              {activeTab ===
                "tests" && (

                <>
                  {testResults.length ===
                  0 ? (

                    <div className="empty-tests">

                      <Terminal
                        size={18}
                      />

                      Run your code
                      to test your
                      solution.

                    </div>

                  ) : (

                    <div className="test-results">

                      {testResults.map(
                        (
                          test,
                          index
                        ) => (

                          <div
                            className="test-result"
                            key={index}
                          >

                            {test.passed ? (
                              <CheckCircle2
                                size={17}
                                className="passed-icon"
                              />
                            ) : (
                              <XCircle
                                size={17}
                                className="failed-icon"
                              />
                            )}

                            <span>
                              {
                                test.name
                              }
                            </span>

                            <strong>
                              {test.passed
                                ? "PASSED"
                                : "FAILED"}
                            </strong>

                          </div>

                        )
                      )}

                    </div>

                  )}

                </>

              )}

              {activeTab ===
                "output" && (

                <div className="output-content">

                  {submitted ? (

                    <div className="submission-status">

                      <div className="loader-dot" />

                      Evaluating
                      submission...

                    </div>

                  ) : (

                    <span>
                      Submit your
                      solution to
                      see the
                      evaluation
                      result.
                    </span>

                  )}

                </div>

              )}

            </div>

          </div>

          {/* =================================================
              ACTION BAR
          ================================================== */}

          <div className="arena-action-bar">

            <div className="submission-info">

              <span>
                LANGUAGE
              </span>

              <strong>
                {language}
              </strong>

              <span>
                QUESTION
              </span>

              <strong>
                {currentQuestion +
                  1}
                /
                {questions.length}
              </strong>

            </div>

            <div className="action-buttons">

              <button
                className="previous-button"
                onClick={
                  handlePrevious
                }
                disabled={
                  currentQuestion ===
                  0
                }
              >

                <ChevronLeft
                  size={16}
                />

                PREVIOUS

              </button>

              <button
                className="run-button"
                onClick={
                  handleRun
                }
                disabled={
                  isRunning
                }
              >

                <Play size={16} />

                {isRunning
                  ? "RUNNING..."
                  : "RUN CODE"}

              </button>

              <button
                className="submit-button"
                onClick={
                  handleSubmit
                }
              >

                <Send size={16} />

                SUBMIT

              </button>

              <button
                className="next-button"
                onClick={
                  handleNext
                }
                disabled={
                  currentQuestion ===
                  questions.length -
                    1
                }
              >

                NEXT

                <ChevronRight
                  size={16}
                />

              </button>

            </div>

          </div>

        </section>

      </section>

    </main>
  );
};

export default CodingArena;