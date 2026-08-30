import { useEffect, useMemo, useState, useRef } from "react";
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
  ChevronUp,
  Bug,
  Network,
  CheckSquare,
  ArrowDownCircle,
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
  languageRequirement?: Language;
  publicTestCases?: {
    input: string;
    output: string;
  }[];
  privateTestCases?: {
    input: string;
    output: string;
    type: string;
  }[];
  starter: Record<Language, string>;
};

/* ============================================================
   DEFAULT STARTER CODES
============================================================ */

const starterCodes: Record<Language, string> = {
  C: `#include <stdio.h>\n\nint main() {\n    // Write your solution here\n    return 0;\n}`,
  "C++": `#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}`,
  Python: `def solve():\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
  Java: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Write your solution here\n    }\n}`,
};

/* ============================================================
   QUESTIONS BANK
============================================================ */

const allQuestions: Question[] = [
  /* ---------------------- COMMON CASE STUDY QUESTIONS ---------------------- */
  {
    id: 1,
    type: "CASE STUDY",
    title: "Intersection Traffic Override",
    difficulty: "EASY",
    tags: ["ARRAY", "CONDITIONS", "PRIORITY"],
    statement: [
      "A smart city traffic camera system counts the number of vehicles waiting in four directions at an intersection.",
      "The input is always an array of four integers in a fixed order: [North, South, East, West].",
      "The system must determine which direction gets the green light based on the highest vehicle count.",
      "If all lanes have 0 traffic, return 'IDLE'.",
      "If there is a tie for the highest traffic, prioritize the direction that appears first in the standard order (North > South > East > West).",
    ],
    input: `[N, S, E, W]`,
    output: `Print the direction with the highest vehicle count: North, South, East, or West. Print IDLE if all four values are 0.`,
    constraints: [
      "Input contains exactly four integers.",
      "0 ≤ N, S, E, W ≤ 10⁶",
      "North has highest priority, followed by South, East, then West.",
      "If all four values are 0, output IDLE.",
    ],
    publicTestCases: [
      { input: "[10, 45, 30, 25]", output: "South" },
      { input: "[0, 0, 0, 0]", output: "IDLE" },
      { input: "[50, 20, 50, 10]", output: "North" },
      { input: "[15, 10, 25, 20]", output: "East" },
    ],
    starter: {
      C: `#include <stdio.h>\n\nint main() {\n    int n, s, e, w;\n    scanf("%d %d %d %d", &n, &s, &e, &w);\n    // Write your solution here\n    return 0;\n}`,
      "C++": `#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    int n, s, e, w;\n    cin >> n >> s >> e >> w;\n    // Write your solution here\n    return 0;\n}`,
      Python: `values = list(map(int, input().split()))\n# Write your solution here\n`,
      Java: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int s = sc.nextInt();\n        int e = sc.nextInt();\n        int w = sc.nextInt();\n        // Write your solution here\n    }\n}`,
    },
  },
  {
    id: 2,
    type: "CASE STUDY",
    title: "Employee Login Streak",
    difficulty: "EASY",
    tags: ["ARRAY", "LOOPS", "STREAK"],
    statement: [
      "An HR management software tracks an employee's daily login status over a given period.",
      "The data is provided as an array of 1s (logged in) and 0s (absent or weekend).",
      "Write a program to find the length of the longest consecutive streak of logged-in days.",
    ],
    input: `An array containing only 0s and 1s.`,
    output: `Print the length of the longest consecutive sequence of 1s. If there are no 1s, print 0.`,
    constraints: [
      "Array contains only 0 and 1.",
      "1 ≤ N ≤ 10⁵",
      "A 0 resets the current login streak.",
      "Return the maximum streak length.",
    ],
    publicTestCases: [
      { input: "[1, 1, 0, 1, 1, 1, 0]", output: "3" },
      { input: "[0, 0, 0, 0, 0]", output: "0" },
      { input: "[1, 0, 1, 0, 1, 0, 1]", output: "1" },
      { input: "[1, 1, 1, 1, 1]", output: "5" },
    ],
    starter: {
      C: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int current = 0, longest = 0;\n    for(int i = 0; i < n; i++) {\n        int x;\n        scanf("%d", &x);\n        // Write your solution here\n    }\n    printf("%d", longest);\n    return 0;\n}`,
      "C++": `#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int current = 0, longest = 0;\n    for(int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        // Write your solution here\n    }\n    cout << longest;\n    return 0;\n}`,
      Python: `n = int(input())\na = list(map(int, input().split()))\ncurrent = 0\nlongest = 0\nfor x in a:\n    # Write your solution here\n    pass\nprint(longest)`,
      Java: `import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int current = 0, longest = 0;\n        for(int i = 0; i < n; i++) {\n            int x = sc.nextInt();\n            // Write your solution here\n        }\n        System.out.println(longest);\n    }\n}`,
    },
  },

  /* ---------------------- C DEBUGGING QUESTIONS ---------------------- */
  {
    id: 3,
    type: "DEBUGGING",
    languageRequirement: "C",
    title: "Armstrong Number (C)",
    difficulty: "MEDIUM",
    tags: ["C", "MATH", "DEBUGGING"],
    statement: [
      "Check whether a number is an Armstrong number.",
      "The program should work for numbers with any number of digits.",
      "Identify logical errors in digit computation and power calculation.",
    ],
    input: "A single integer N.",
    output: "Print 'Armstrong' or 'Not Armstrong'.",
    constraints: ["0 ≤ N ≤ 10⁹"],
    publicTestCases: [
      { input: "153", output: "Armstrong" },
      { input: "370", output: "Armstrong" },
      { input: "9474", output: "Armstrong" },
      { input: "123", output: "Not Armstrong" },
    ],
    starter: {
      C: `#include <stdio.h>\n#include <math.h>\n\nint main() {\n    int n, temp, digits = 0, sum = 0;\n    scanf("%d", &n);\n    temp = n;\n    while (temp > 0) {\n        digits++;\n        temp /= 10;\n    }\n    temp = n;\n    while (temp > 0) {\n        int digit = temp % 10;\n        sum += pow(digit, digits - 1);\n        temp /= 10;\n    }\n    if (sum == n)\n        printf("Armstrong");\n    else\n        printf("Not Armstrong");\n    return 0;\n}`,
      "C++": "",
      Python: "",
      Java: "",
    },
  },
  {
    id: 4,
    type: "DEBUGGING",
    languageRequirement: "C",
    title: "Second Largest Distinct Element (C)",
    difficulty: "MEDIUM",
    tags: ["C", "ARRAY", "DEBUGGING"],
    statement: [
      "Find the second-largest distinct value in an array.",
      "The program fails to update the second-largest variable when a new overall maximum is found.",
    ],
    input: "An array of integers.",
    output: "Print the second largest distinct integer.",
    constraints: ["Array length N ≥ 2.", "Elements can be duplicate."],
    publicTestCases: [
      { input: "[12, 45, 23, 31, 18]", output: "31" },
      { input: "[10, 10, 5, 8]", output: "8" },
      { input: "[50, 20, 40, 30]", output: "40" },
    ],
    starter: {
      C: `#include <stdio.h>\n#include <limits.h>\n\nint main() {\n    int a[] = {12, 45, 23, 45, 31, 18};\n    int n = 6;\n    int largest = INT_MIN;\n    int second = INT_MIN;\n    for (int i = 0; i < n; i++) {\n        if (a[i] >= largest) {\n            largest = a[i];\n        }\n        if (a[i] < largest && a[i] > second) {\n            second = a[i];\n        }\n    }\n    printf("%d", second);\n    return 0;\n}`,
      "C++": "",
      Python: "",
      Java: "",
    },
  },
  {
    id: 5,
    type: "DEBUGGING",
    languageRequirement: "C",
    title: "Rotate Array by K Positions (C)",
    difficulty: "MEDIUM",
    tags: ["C", "ARRAY", "ROTATION"],
    statement: [
      "Rotate an array to the right by k positions.",
      "The shift logic for handling k > n contains an invalid modulus/subtraction calculation.",
    ],
    input: "Array and integer k.",
    output: "Array elements rotated right by k positions.",
    constraints: ["1 ≤ N ≤ 10⁵", "0 ≤ k ≤ 10⁹"],
    publicTestCases: [
      { input: "[1,2,3,4,5,6], k=2", output: "5 6 1 2 3 4" },
      { input: "[1,2,3,4,5], k=1", output: "5 1 2 3 4" },
      { input: "[1,2,3,4,5], k=5", output: "1 2 3 4 5" },
    ],
    starter: {
      C: `#include <stdio.h>\n\nint main() {\n    int a[] = {1, 2, 3, 4, 5, 6};\n    int n = 6;\n    int k = 8;\n    k = k - n;\n    for (int r = 0; r < k; r++) {\n        int last = a[n - 1];\n        for (int i = n - 1; i > 0; i--)\n            a[i] = a[i - 1];\n        a[0] = last;\n    }\n    for (int i = 0; i < n; i++)\n        printf("%d ", a[i]);\n    return 0;\n}`,
      "C++": "",
      Python: "",
      Java: "",
    },
  },
  {
    id: 6,
    type: "DEBUGGING",
    languageRequirement: "C",
    title: "GCD and LCM (C)",
    difficulty: "HARD",
    tags: ["C", "MATH", "EUCLIDEAN"],
    statement: [
      "Find both GCD and LCM of two positive integers.",
      "The Euclidean loop overwrites the original variables before performing modulo operations.",
    ],
    input: "Two integers a and b.",
    output: "Print 'GCD: X' and 'LCM: Y'.",
    constraints: ["1 ≤ a, b ≤ 10⁹"],
    publicTestCases: [
      { input: "12 18", output: "GCD: 6 / LCM: 36" },
      { input: "20 15", output: "GCD: 5 / LCM: 60" },
      { input: "7 13", output: "GCD: 1 / LCM: 91" },
    ],
    starter: {
      C: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    int x, y;\n    scanf("%d %d", &a, &b);\n    x = a;\n    y = b;\n    while (y != 0) {\n        x = y;\n        y = x % y;\n    }\n    printf("GCD: %d\\n", x);\n    printf("LCM: %d", (a * b) / x);\n    return 0;\n}`,
      "C++": "",
      Python: "",
      Java: "",
    },
  },
  {
    id: 7,
    type: "DEBUGGING",
    languageRequirement: "C",
    title: "Matrix Boundary Sum (C)",
    difficulty: "HARD",
    tags: ["C", "MATRIX", "2D-ARRAY"],
    statement: [
      "Find the sum of all elements on the boundary of a square matrix.",
      "Do not count corners twice. Current code sums entire rows and columns without skipping overlap.",
    ],
    input: "Square matrix NxN.",
    output: "Sum of boundary elements.",
    constraints: ["1 ≤ N ≤ 100"],
    publicTestCases: [{ input: "Given 4x4 matrix", output: "102" }],
    starter: {
      C: `#include <stdio.h>\n\nint main() {\n    int a[4][4] = {\n        {1, 2, 3, 4},\n        {5, 6, 7, 8},\n        {9, 10, 11, 12},\n        {13,14,15,16}\n    };\n    int n = 4, sum = 0;\n    for (int i = 0; i < n; i++) {\n        sum += a[0][i];\n        sum += a[n - 1][i];\n        sum += a[i][0];\n        sum += a[i][n - 1];\n    }\n    printf("%d", sum);\n    return 0;\n}`,
      "C++": "",
      Python: "",
      Java: "",
    },
  },

  /* ---------------------- C++ DEBUGGING QUESTIONS ---------------------- */
  {
    id: 8,
    type: "DEBUGGING",
    languageRequirement: "C++",
    title: "Armstrong Number (C++)",
    difficulty: "MEDIUM",
    tags: ["C++", "MATH", "DEBUGGING"],
    statement: [
      "Check whether a number is an Armstrong number.",
      "The program should work for numbers with any number of digits.",
      "Identify logical errors in digit computation and power calculation.",
    ],
    input: "A single integer N.",
    output: "Print 'Armstrong' or 'Not Armstrong'.",
    constraints: ["0 ≤ N ≤ 10⁹"],
    publicTestCases: [
      { input: "153", output: "Armstrong" },
      { input: "370", output: "Armstrong" },
      { input: "9474", output: "Armstrong" },
      { input: "123", output: "Not Armstrong" },
    ],
    starter: {
      C: "",
      "C++": `#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n, temp, digits = 0, sum = 0;\n    cin >> n;\n    temp = n;\n    while (temp > 0) { digits++; temp /= 10; }\n    temp = n;\n    while (temp > 0) {\n        int digit = temp % 10;\n        sum += pow(digit, digits - 1);\n        temp /= 10;\n    }\n    cout << (sum == n ? "Armstrong" : "Not Armstrong");\n    return 0;\n}`,
      Python: "",
      Java: "",
    },
  },
  {
    id: 9,
    type: "DEBUGGING",
    languageRequirement: "C++",
    title: "Second Largest Distinct Element (C++)",
    difficulty: "MEDIUM",
    tags: ["C++", "VECTOR", "DEBUGGING"],
    statement: [
      "Find the second-largest distinct value in an array.",
      "The program fails to update the second-largest variable when a new overall maximum is found.",
    ],
    input: "An array of integers.",
    output: "Print the second largest distinct integer.",
    constraints: ["Array length N ≥ 2.", "Elements can be duplicate."],
    publicTestCases: [
      { input: "[12, 45, 23, 31, 18]", output: "31" },
      { input: "[10, 10, 5, 8]", output: "8" },
      { input: "[50, 20, 40, 30]", output: "40" },
    ],
    starter: {
      C: "",
      "C++": `#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    vector<int> a = {12, 45, 23, 45, 31, 18};\n    int largest = INT_MIN, second = INT_MIN;\n    for (int x : a) {\n        if (x >= largest) largest = x;\n        if (x < largest && x > second) second = x;\n    }\n    cout << second;\n    return 0;\n}`,
      Python: "",
      Java: "",
    },
  },
  {
    id: 10,
    type: "DEBUGGING",
    languageRequirement: "C++",
    title: "Rotate Array by K Positions (C++)",
    difficulty: "MEDIUM",
    tags: ["C++", "ARRAY", "ROTATION"],
    statement: [
      "Rotate an array to the right by k positions.",
      "The shift logic for handling k > n contains an invalid modulus/subtraction calculation.",
    ],
    input: "Array and integer k.",
    output: "Array elements rotated right by k positions.",
    constraints: ["1 ≤ N ≤ 10⁵", "0 ≤ k ≤ 10⁹"],
    publicTestCases: [
      { input: "[1,2,3,4,5,6], k=2", output: "5 6 1 2 3 4" },
      { input: "[1,2,3,4,5], k=1", output: "5 1 2 3 4" },
      { input: "[1,2,3,4,5], k=5", output: "1 2 3 4 5" },
    ],
    starter: {
      C: "",
      "C++": `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[] = {1, 2, 3, 4, 5, 6};\n    int n = 6, k = 8;\n    k = k - n;\n    for (int r = 0; r < k; r++) {\n        int last = a[n - 1];\n        for (int i = n - 1; i > 0; i--) a[i] = a[i - 1];\n        a[0] = last;\n    }\n    for (int i = 0; i < n; i++) cout << a[i] << " ";\n    return 0;\n}`,
      Python: "",
      Java: "",
    },
  },
  {
    id: 11,
    type: "DEBUGGING",
    languageRequirement: "C++",
    title: "GCD and LCM (C++)",
    difficulty: "HARD",
    tags: ["C++", "MATH", "EUCLIDEAN"],
    statement: [
      "Find both GCD and LCM of two positive integers.",
      "The Euclidean loop overwrites the original variables before performing modulo operations.",
    ],
    input: "Two integers a and b.",
    output: "Print 'GCD: X' and 'LCM: Y'.",
    constraints: ["1 ≤ a, b ≤ 10⁹"],
    publicTestCases: [
      { input: "12 18", output: "GCD: 6 / LCM: 36" },
      { input: "20 15", output: "GCD: 5 / LCM: 60" },
      { input: "7 13", output: "GCD: 1 / LCM: 91" },
    ],
    starter: {
      C: "",
      "C++": `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b; cin >> a >> b;\n    int x = a, y = b;\n    while (y != 0) { x = y; y = x % y; }\n    cout << "GCD: " << x << "\\nLCM: " << (a * b) / x;\n    return 0;\n}`,
      Python: "",
      Java: "",
    },
  },
  {
    id: 12,
    type: "DEBUGGING",
    languageRequirement: "C++",
    title: "Matrix Boundary Sum (C++)",
    difficulty: "HARD",
    tags: ["C++", "MATRIX", "2D-ARRAY"],
    statement: [
      "Find the sum of all elements on the boundary of a square matrix.",
      "Do not count corners twice. Current code sums entire rows and columns without skipping overlap.",
    ],
    input: "Square matrix NxN.",
    output: "Sum of boundary elements.",
    constraints: ["1 ≤ N ≤ 100"],
    publicTestCases: [{ input: "Given 4x4 matrix", output: "102" }],
    starter: {
      C: "",
      "C++": `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[4][4] = {{1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}};\n    int n = 4, sum = 0;\n    for (int i = 0; i < n; i++) {\n        sum += a[0][i] + a[n - 1][i] + a[i][0] + a[i][n - 1];\n    }\n    cout << sum;\n    return 0;\n}`,
      Python: "",
      Java: "",
    },
  },

  /* ---------------------- JAVA DEBUGGING QUESTIONS ---------------------- */
  {
    id: 13,
    type: "DEBUGGING",
    languageRequirement: "Java",
    title: "Palindrome String (Java)",
    difficulty: "EASY",
    tags: ["JAVA", "STRING", "TWO-POINTER"],
    statement: [
      "Check whether a string is a palindrome, ignoring case.",
      "The right pointer initialization produces an StringIndexOutOfBoundsException.",
    ],
    input: "Single string S.",
    output: "Print 'Palindrome' or 'Not Palindrome'.",
    constraints: ["1 ≤ |S| ≤ 10⁵"],
    publicTestCases: [
      { input: "Level", output: "Palindrome" },
      { input: "hello", output: "Not Palindrome" },
      { input: "Madam", output: "Palindrome" },
      { input: "Java", output: "Not Palindrome" },
    ],
    starter: {
      C: "",
      "C++": "",
      Python: "",
      Java: `public class Main {\n    public static void main(String[] args) {\n        String s = "Level";\n        s = s.toLowerCase();\n        int left = 0;\n        int right = s.length();\n        boolean palindrome = true;\n        while (left < right) {\n            if (s.charAt(left) != s.charAt(right))\n                palindrome = false;\n            left++;\n            right--;\n        }\n        if (palindrome)\n            System.out.println("Palindrome");\n        else\n            System.out.println("Not Palindrome");\n    }\n}`,
    },
  },
  {
    id: 14,
    type: "DEBUGGING",
    languageRequirement: "Java",
    title: "Student Ranking (Java)",
    difficulty: "MEDIUM",
    tags: ["JAVA", "ARRAY", "LOGIC"],
    statement: [
      "Given marks of students, print the rank of the student at index 0.",
      "Equal marks should receive the same rank. Strictly higher marks increase rank count.",
    ],
    input: "Array of marks.",
    output: "Integer rank for element at index 0.",
    constraints: ["1 ≤ N ≤ 1000"],
    publicTestCases: [
      { input: "[85, 92, 85, 76, 90]", output: "3" },
      { input: "[100, 90, 80, 70]", output: "1" },
      { input: "[70, 90, 70, 80]", output: "3" },
    ],
    starter: {
      C: "",
      "C++": "",
      Python: "",
      Java: `public class Main {\n    public static void main(String[] args) {\n        int[] marks = {85, 92, 85, 76, 90};\n        int rank = 1;\n        for (int i = 1; i < marks.length; i++) {\n            if (marks[i] >= marks[0])\n                rank++;\n        }\n        System.out.println(rank);\n    }\n}`,
    },
  },
  {
    id: 15,
    type: "DEBUGGING",
    languageRequirement: "Java",
    title: "Caesar Cipher (Java)",
    difficulty: "MEDIUM",
    tags: ["JAVA", "CIPHER", "STRING"],
    statement: [
      "Shift every uppercase alphabetic character by k positions. Wrap around after 'Z'.",
      "The wrap-around logic computes absolute character offset incorrectly.",
    ],
    input: "String text and shift k.",
    output: "Encrypted Caesar Cipher string.",
    constraints: ["Uppercase letters A-Z."],
    publicTestCases: [
      { input: "XYZ, 3", output: "ABC" },
      { input: "ABC, 2", output: "CDE" },
      { input: "HELLO, 5", output: "MJQQT" },
    ],
    starter: {
      C: "",
      "C++": "",
      Python: "",
      Java: `public class Main {\n    public static void main(String[] args) {\n        String text = "XYZ";\n        int k = 3;\n        String result = "";\n        for (int i = 0; i < text.length(); i++) {\n            char ch = text.charAt(i);\n            ch = (char)(ch + k);\n            if (ch > 'Z')\n                ch = (char)('A' + ch - 'Z');\n            result += ch;\n        }\n        System.out.println(result);\n    }\n}`,
    },
  },
  {
    id: 16,
    type: "DEBUGGING",
    languageRequirement: "Java",
    title: "Shopping Cart Discount (Java)",
    difficulty: "HARD",
    tags: ["JAVA", "CONDITIONS", "ACCUMULATOR"],
    statement: [
      "Apply discount based on total price: <1000 (0%), 1000-4999 (10%), ≥5000 (20%).",
      "Accumulator loop overwrites total instead of summing, and if-else branches check conditions out of order.",
    ],
    input: "Array of prices.",
    output: "Final total after applying discount.",
    constraints: ["Prices > 0."],
    publicTestCases: [
      { input: "[1200, 850, 600, 400]", output: "2745.00" },
      { input: "[5000]", output: "4000.00" },
      { input: "[500, 200]", output: "700.00" },
    ],
    starter: {
      C: "",
      "C++": "",
      Python: "",
      Java: `public class Main {\n    public static void main(String[] args) {\n        double[] prices = {1200, 850, 600, 400};\n        double total = 0;\n        for (double price : prices)\n            total = price;\n        double discount;\n        if (total >= 1000)\n            discount = 0.10;\n        else if (total >= 5000)\n            discount = 0.20;\n        else\n            discount = 0;\n        double finalAmount = total - total * discount;\n        System.out.println(finalAmount);\n    }\n}`,
    },
  },
  {
    id: 17,
    type: "DEBUGGING",
    languageRequirement: "Java",
    title: "Balanced Parentheses (Java)",
    difficulty: "EASY",
    tags: ["JAVA", "STACK", "PARSER"],
    statement: [
      "Determine whether a string containing '(' and ')' is balanced.",
      "Check if early exiting when balance goes negative or closing balance checks are accurate.",
    ],
    input: "String with parentheses.",
    output: "Print 'Balanced' or 'Not Balanced'.",
    constraints: ["1 ≤ |S| ≤ 10⁵"],
    publicTestCases: [
      { input: "(()())", output: "Balanced" },
      { input: "(()", output: "Not Balanced" },
      { input: "())(", output: "Not Balanced" },
      { input: "()()", output: "Balanced" },
    ],
    starter: {
      C: "",
      "C++": "",
      Python: "",
      Java: `public class Main {\n    public static void main(String[] args) {\n        String s = "(()())";\n        int balance = 0;\n        boolean valid = true;\n        for (int i = 0; i < s.length(); i++) {\n            if (s.charAt(i) == '(')\n                balance++;\n            else\n                balance--;\n            if (balance < 0)\n                valid = false;\n        }\n        if (balance > 0)\n            valid = false;\n        System.out.println(valid ? "Balanced" : "Not Balanced");\n    }\n}`,
    },
  },

  /* ---------------------- PYTHON DEBUGGING QUESTIONS ---------------------- */
  {
    id: 18,
    type: "DEBUGGING",
    languageRequirement: "Python",
    title: "Armstrong Number (Python)",
    difficulty: "EASY",
    tags: ["PYTHON", "MATH"],
    statement: [
      "Check whether a number is an Armstrong number.",
      "The exponentiation uses (digits - 1) instead of the actual digit count.",
    ],
    input: "Single integer N.",
    output: "Print 'Armstrong' or 'Not Armstrong'.",
    constraints: ["0 ≤ N ≤ 10⁹"],
    publicTestCases: [
      { input: "153", output: "Armstrong" },
      { input: "370", output: "Armstrong" },
      { input: "9474", output: "Armstrong" },
      { input: "123", output: "Not Armstrong" },
    ],
    starter: {
      C: "",
      "C++": "",
      Python: `n = 9474\ndigits = len(str(n))\ntemp = n\ntotal = 0\nwhile temp:\n    digit = temp % 10\n    total += digit ** (digits - 1)\n    temp //= 10\nif total == n:\n    print("Armstrong")\nelse:\n    print("Not Armstrong")`,
      Java: "",
    },
  },
  {
    id: 19,
    type: "DEBUGGING",
    languageRequirement: "Python",
    title: "Longest Increasing Streak (Python)",
    difficulty: "MEDIUM",
    tags: ["PYTHON", "ARRAY", "STREAK"],
    statement: [
      "Find the length of the longest consecutive strictly increasing sequence.",
      "Logic condition allows equal elements (>=) and final update comparison flips < instead of >.",
    ],
    input: "Array of integers.",
    output: "Length of longest strictly increasing sequence.",
    constraints: ["1 ≤ N ≤ 10⁵"],
    publicTestCases: [
      { input: "[1, 2, 3, 2, 4, 5, 6, 1]", output: "4" },
      { input: "[1, 2, 3, 4]", output: "4" },
      { input: "[5, 4, 3, 2]", output: "1" },
      { input: "[1, 2, 2, 3]", output: "2" },
    ],
    starter: {
      C: "",
      "C++": "",
      Python: `numbers = [1, 2, 3, 2, 4, 5, 6, 1]\ncurrent = 1\nlongest = 0\nfor i in range(1, len(numbers)):\n    if numbers[i] >= numbers[i - 1]:\n        current += 1\n    else:\n        current = 1\n    if current < longest:\n        longest = current\nprint(longest)`,
      Java: "",
    },
  },
  {
    id: 20,
    type: "DEBUGGING",
    languageRequirement: "Python",
    title: "Matrix Transpose (Python)",
    difficulty: "MEDIUM",
    tags: ["PYTHON", "MATRIX", "TRANSPOSE"],
    statement: [
      "Find the transpose of a matrix.",
      "The loop indices matrix[i][j] duplicate the input instead of swapping row and column indices matrix[j][i].",
    ],
    input: "2D Matrix.",
    output: "Transposed 2D Matrix.",
    constraints: ["Dimensions M x N."],
    publicTestCases: [
      { input: "[[1,2,3],[4,5,6]]", output: "[[1,4],[2,5],[3,6]]" },
      { input: "[[1,2],[3,4]]", output: "[[1,3],[2,4]]" },
      { input: "[[5,6,7]]", output: "[[5],[6],[7]]" },
    ],
    starter: {
      C: "",
      "C++": "",
      Python: `matrix = [\n    [1, 2, 3],\n    [4, 5, 6]\n]\nrows = len(matrix)\ncols = len(matrix[0])\ntranspose = []\nfor i in range(rows):\n    row = []\n    for j in range(cols):\n        row.append(matrix[i][j])\n    transpose.append(row)\nprint(transpose)`,
      Java: "",
    },
  },
  {
    id: 21,
    type: "DEBUGGING",
    languageRequirement: "Python",
    title: "Frequency Analysis (Python)",
    difficulty: "HARD",
    tags: ["PYTHON", "HASHMAP", "TIE-BREAKER"],
    statement: [
      "Find the most frequent number. If there is a tie, return the smallest number.",
      "The comparison operator inside loop prevents updating smaller tie-breaking keys.",
    ],
    input: "Array of integers.",
    output: "Most frequent integer with tie-breaker rule.",
    constraints: ["1 ≤ N ≤ 10⁵"],
    publicTestCases: [
      { input: "[4, 2, 7, 2, 4, 7, 7, 2]", output: "2" },
      { input: "[5, 5, 3, 3, 3, 2]", output: "3" },
      { input: "[8, 1, 8, 1]", output: "1" },
    ],
    starter: {
      C: "",
      "C++": "",
      Python: `numbers = [4, 2, 7, 2, 4, 7, 7, 2]\nfrequency = {}\nfor n in numbers:\n    if n not in frequency:\n        frequency[n] = 0\n    frequency[n] += 1\nbest = numbers[0]\nfor n in frequency:\n    if frequency[n] >= frequency[best]:\n        best = n\nprint(best)`,
      Java: "",
    },
  },
  {
    id: 22,
    type: "DEBUGGING",
    languageRequirement: "Python",
    title: "ATM Transaction Validator (Python)",
    difficulty: "HARD",
    tags: ["PYTHON", "CONTROL-FLOW", "VALIDATION"],
    statement: [
      "Withdraw money only when: amount > 0, amount % 100 == 0, and amount ≤ balance.",
      "Sequential independent if-blocks overwrite error messages and run double negative checks.",
    ],
    input: "Requested amount.",
    output: "Print result status and remaining balance.",
    constraints: ["0 ≤ amount ≤ 100000"],
    publicTestCases: [
      { input: "2000", output: "Withdrawal successful / Balance: 3000" },
      { input: "505", output: "Invalid amount / Balance: 5000" },
      { input: "6000", output: "Invalid amount / Balance: 5000" },
      { input: "0", output: "Invalid amount / Balance: 5000" },
    ],
    starter: {
      C: "",
      "C++": "",
      Python: `balance = 5000\namount = int(input())\nif amount <= balance:\n    if amount % 100 == 0:\n        balance -= amount\n        print("Withdrawal successful")\n    else:\n        print("Invalid amount")\nif amount <= 0:\n    print("Invalid amount")\nprint("Balance:", balance)`,
      Java: "",
    },
  },
];

/* ============================================================
   LANGUAGE CONFIG
============================================================ */

const languageConfig: Record<Language, { monaco: string }> = {
  C: { monaco: "c" },
  "C++": { monaco: "cpp" },
  Python: { monaco: "python" },
  Java: { monaco: "java" },
};

/* ============================================================
   COMPONENT
============================================================ */

const CodingArena = () => {
  const navigate = useNavigate();
  const problemContentRef = useRef<HTMLDivElement>(null);

  const [language, setLanguage] = useState<Language>("C++");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Filter questions dynamically based on selected language
  const questions = useMemo(() => {
    return allQuestions.filter(
      (q) => q.type === "CASE STUDY" || q.languageRequirement === language
    );
  }, [language]);

  const [code, setCode] = useState(() => {
    return (
      questions[0]?.starter[language] ||
      starterCodes[language]
    );
  });

  const [timeLeft, setTimeLeft] = useState(45 * 60);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [activeTab, setActiveTab] = useState<"tests" | "output">("tests");
  const [isRunning, setIsRunning] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [solvedQuestions, setSolvedQuestions] = useState<number[]>([]);
  const [testResults, setTestResults] = useState<{ name: string; passed: boolean }[]>([]);

  const question = questions[currentQuestion] || questions[0];

  // Keep editor code synchronized when changing questions or language
  useEffect(() => {
    if (questions[currentQuestion]) {
      const activeCode =
        questions[currentQuestion].starter[language] || starterCodes[language];
      setCode(activeCode);
    }
  }, [currentQuestion, language, questions]);

  /* ==========================================================
     TIMER
  ========================================================== */

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  /* ==========================================================
     SCROLL & QUESTION NAVIGATION
  ========================================================== */

  const switchQuestion = (index: number) => {
    if (index < 0 || index >= questions.length) return;
    setCurrentQuestion(index);
    setTestResults([]);
    setSubmitted(false);
    setActiveTab("tests");

    if (problemContentRef.current) {
      problemContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => switchQuestion(currentQuestion - 1);
  const handleNext = () => switchQuestion(currentQuestion + 1);

  // Explicit function to scroll problem details down
  const handleScrollDown = () => {
    if (problemContentRef.current) {
      problemContentRef.current.scrollBy({ top: 300, behavior: "smooth" });
    }
  };

  // Explicit function to scroll problem details up
  const handleScrollUp = () => {
    if (problemContentRef.current) {
      problemContentRef.current.scrollBy({ top: -300, behavior: "smooth" });
    }
  };

  /* ==========================================================
     LANGUAGE CHANGE
  ========================================================== */

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setShowLanguageMenu(false);
    setCurrentQuestion(0);
    setTestResults([]);
    setSubmitted(false);
  };

  /* ==========================================================
     RUN / SUBMIT ACTIONS
  ========================================================== */

  const handleRun = () => {
    setIsRunning(true);
    setActiveTab("tests");

    setTimeout(() => {
      setIsRunning(false);
      setTestResults([
        { name: "Sample Test Case 01", passed: true },
        { name: "Sample Test Case 02", passed: true },
        { name: "Hidden Test Case", passed: false },
      ]);
    }, 1200);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setActiveTab("output");

    if (!solvedQuestions.includes(question.id)) {
      setSolvedQuestions((previous) => [...previous, question.id]);
    }

    setTimeout(() => {
      setSubmitted(false);
    }, 2500);
  };

  const handleFinalSubmitTest = () => {
    const confirmSubmit = window.confirm(
      `Are you sure you want to finalize and submit your test?\n\nYou have solved ${solvedQuestions.length} out of ${questions.length} questions.`
    );
    if (confirmSubmit) {
      navigate("/round-2-result");
    }
  };

  const handleReset = () => {
    setCode(question.starter[language] || starterCodes[language]);
    setTestResults([]);
    setSubmitted(false);
  };

  const handleExit = () => {
    navigate("/round-2-result");
  };

  const progress = useMemo(() => {
    return Math.round(((currentQuestion + 1) / questions.length) * 100);
  }, [currentQuestion, questions.length]);

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
              KINDLE JUNIOR <span>5.0</span>
            </div>
            <div className="arena-brand-subtitle">
              IEEE STUDENT BRANCH · GRAPHIC ERA UNIVERSITY
            </div>
          </div>
        </div>

        <div className="arena-center-title">
          <span className="round-label">ROUND 02</span>
          <span className="arena-divider">/</span>
          <span>CODING ARENA</span>
        </div>

        <div className="arena-header-right">
          <button className="exit-button" onClick={handleExit}>
            <XCircle size={16} />
            EXIT
          </button>

          <div className={`arena-timer ${timeLeft <= 300 ? "timer-warning" : ""}`}>
            <Clock3 size={17} />
            <div>
              <small>TIME LEFT</small>
              <strong>{formatTime(timeLeft)}</strong>
            </div>
          </div>
        </div>
      </header>

      {/* ======================================================
          QUESTION NAVIGATION BAR
      ======================================================= */}
      <div className="question-navigation">
        <div className="question-nav-inner">
          <div className="question-nav-title">CHALLENGES ({language})</div>

          <div className="question-buttons">
            {questions.map((item, index) => {
              const active = index === currentQuestion;
              const solved = solvedQuestions.includes(item.id);

              return (
                <button
                  key={item.id}
                  className={`question-button ${active ? "question-active" : ""} ${
                    solved ? "question-solved" : ""
                  }`}
                  onClick={() => switchQuestion(index)}
                >
                  <span className="question-button-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.type === "CASE STUDY" ? (
                    <Network size={13} />
                  ) : (
                    <Bug size={13} />
                  )}
                  <span>{item.type === "CASE STUDY" ? "CASE" : "BUG"}</span>
                  {solved && <CheckCircle2 size={12} />}
                </button>
              );
            })}
          </div>

          <div className="question-progress">
            <span>{currentQuestion + 1}</span> / {questions.length}
            <div className="progress-bar">
              <div style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          MAIN ARENA WORKSPACE
      ======================================================= */}
      <section className="arena-workspace">
        {/* LEFT QUESTION PANEL */}
        <aside className="problem-panel">
          <div className="problem-header">
            <div className="problem-number">
              QUESTION {String(currentQuestion + 1).padStart(2, "0")}
            </div>

            {/* SCROLL AND NAV BUTTONS */}
            <div className="up-down-navigation" style={{ display: "flex", gap: "6px" }}>
              <button
                className="icon-action"
                title="Scroll Statement Up"
                onClick={handleScrollUp}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#fff",
                }}
              >
                <ChevronUp size={16} />
              </button>
              <button
                className="icon-action"
                title="Scroll Statement Down"
                onClick={handleScrollDown}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#fff",
                }}
              >
                <ChevronDown size={16} />
              </button>
            </div>

            <div className="difficulty">
              {question.type === "CASE STUDY" ? <Network size={13} /> : <Bug size={13} />}
              {question.type}
            </div>
          </div>

          {/* SCROLLABLE PROBLEM CONTENT */}
          <div
            className="problem-content"
            ref={problemContentRef}
            style={{ overflowY: "auto", maxHeight: "calc(100vh - 200px)" }}
          >
            <div className="problem-category">
              {question.type === "CASE STUDY"
                ? "SYSTEM DESIGN CHALLENGE"
                : `DEBUGGING CHALLENGE (${language})`}
            </div>

            <h1>{question.title}</h1>

            <div className="problem-tags">
              {question.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="difficulty-line">
              <span>DIFFICULTY</span>
              <strong>{question.difficulty}</strong>
            </div>

            {/* STATEMENT */}
            <section className="statement-section">
              <h3>
                <FileText size={15} />
                PROBLEM STATEMENT
              </h3>
              {question.statement.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </section>

            {/* INPUT */}
            <section className="statement-section">
              <h3>INPUT</h3>
              <div className="code-block">
                <code>{question.input}</code>
              </div>
            </section>

            {/* OUTPUT */}
            <section className="statement-section">
              <h3>OUTPUT</h3>
              <p>{question.output}</p>
            </section>

            {/* CONSTRAINTS */}
            <section className="statement-section">
              <h3>CONSTRAINTS</h3>
              <ul>
                {question.constraints.map((constraint) => (
                  <li key={constraint}>{constraint}</li>
                ))}
              </ul>
            </section>

            {/* PUBLIC TEST CASES */}
            {question.publicTestCases && question.publicTestCases.length > 0 && (
              <section className="statement-section">
                <h3>VALIDATION TEST CASES</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {question.publicTestCases.map((tc, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "8px 12px",
                        background: "rgba(255, 255, 255, 0.04)",
                        borderRadius: "4px",
                        fontSize: "0.85rem",
                      }}
                    >
                      <div>
                        <strong>Input:</strong> <code>{tc.input}</code>
                      </div>
                      <div>
                        <strong>Expected:</strong> <code>{tc.output}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* SCROLL TO BOTTOM TRIGGER BUTTON */}
            <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <button
                onClick={handleScrollDown}
                style={{
                  width: "100%",
                  padding: "8px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px dashed rgba(255,255,255,0.2)",
                  color: "#aaa",
                  borderRadius: "4px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  fontSize: "0.8rem",
                }}
              >
                <ArrowDownCircle size={14} /> SCROLL DOWN FOR MORE
              </button>
            </div>
          </div>
        </aside>

        {/* RIGHT IDE PANEL */}
        <section className="ide-panel">
          {/* TOOLBAR */}
          <div className="ide-toolbar">
            <div className="language-selector-wrapper">
              <button
                className="language-selector"
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              >
                <Code2 size={16} />
                <span>{language}</span>
                <ChevronDown size={15} />
              </button>

              {showLanguageMenu && (
                <div className="language-menu">
                  {(Object.keys(languageConfig) as Language[]).map((item) => (
                    <button
                      key={item}
                      className={`language-option ${language === item ? "active" : ""}`}
                      onClick={() => changeLanguage(item)}
                    >
                      <span>{item}</span>
                      {language === item && <CheckCircle2 size={15} />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="editor-question-info">
              <span>{question.type}</span>
              <b>#{String(currentQuestion + 1).padStart(2, "0")}</b>
            </div>

            <div className="editor-actions">
              <button className="icon-action" title="Reset Code" onClick={handleReset}>
                <RotateCcw size={16} />
              </button>
              <button className="icon-action" title="Fullscreen">
                <Maximize2 size={16} />
              </button>
            </div>
          </div>

          {/* EDITOR */}
          <div className="editor-container">
            <Editor
              height="100%"
              language={languageConfig[language].monaco}
              value={code}
              onChange={(value) => setCode(value ?? "")}
              theme="vs-dark"
              options={{
                fontSize: 14,
                minimap: { enabled: true },
                automaticLayout: true,
                padding: { top: 18 },
                smoothScrolling: true,
                cursorSmoothCaretAnimation: "on",
                scrollBeyondLastLine: false,
                wordWrap: "on",
                lineNumbers: "on",
                renderLineHighlight: "all",
                tabSize: 4,
              }}
            />
          </div>

          {/* BOTTOM TERMINAL PANEL */}
          <div className="bottom-panel">
            <div className="bottom-tabs">
              <button
                className={activeTab === "tests" ? "bottom-tab active" : "bottom-tab"}
                onClick={() => setActiveTab("tests")}
              >
                <Terminal size={15} />
                TEST CASES
              </button>

              <button
                className={activeTab === "output" ? "bottom-tab active" : "bottom-tab"}
                onClick={() => setActiveTab("output")}
              >
                OUTPUT
              </button>
            </div>

            <div className="test-content">
              {activeTab === "tests" && (
                <>
                  {testResults.length === 0 ? (
                    <div className="empty-tests">
                      <Terminal size={18} />
                      Run your code to test your solution.
                    </div>
                  ) : (
                    <div className="test-results">
                      {testResults.map((test, index) => (
                        <div className="test-result" key={index}>
                          {test.passed ? (
                            <CheckCircle2 size={17} className="passed-icon" />
                          ) : (
                            <XCircle size={17} className="failed-icon" />
                          )}
                          <span>{test.name}</span>
                          <strong>{test.passed ? "PASSED" : "FAILED"}</strong>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {activeTab === "output" && (
                <div className="output-content">
                  {submitted ? (
                    <div className="submission-status">
                      <div className="loader-dot" />
                      Evaluating submission...
                    </div>
                  ) : (
                    <span>
                      Submit your solution to see the evaluation result.
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* ACTION BAR */}
          <div className="arena-action-bar">
            <div className="submission-info">
              <span>LANG</span>
              <strong>{language}</strong>
              <span>PROGRESS</span>
              <strong>
                {currentQuestion + 1}/{questions.length}
              </strong>
            </div>

            <div className="action-buttons">
              <button
                className="previous-button"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ChevronLeft size={16} />
                PREV
              </button>

              <button
                className="run-button"
                onClick={handleRun}
                disabled={isRunning}
              >
                <Play size={16} />
                {isRunning ? "RUNNING..." : "RUN CODE"}
              </button>

              <button className="submit-button" onClick={handleSubmit}>
                <Send size={16} />
                SUBMIT CODE
              </button>

              <button
                className="next-button"
                onClick={handleNext}
                disabled={currentQuestion === questions.length - 1}
              >
                NEXT
                <ChevronRight size={16} />
              </button>

              {/* HIGH-VISIBILITY FINAL SUBMIT TEST BUTTON */}
              <button
                className="final-submit-button"
                onClick={handleFinalSubmitTest}
                style={{
                  backgroundColor: "#10b981",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "0.6rem 1.2rem",
                  borderRadius: "6px",
                  fontWeight: 700,
                  marginLeft: "12px",
                  cursor: "pointer",
                  border: "none",
                  boxShadow: "0 0 12px rgba(16, 185, 129, 0.4)",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <CheckSquare size={18} />
                FINAL SUBMIT TEST
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default CodingArena;