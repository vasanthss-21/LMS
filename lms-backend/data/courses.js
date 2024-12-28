const detail = {
  javascript: `JavaScript is one of the most widely used programming languages, particularly for web development. It supports dynamic content, event-driven programming, and server-side capabilities via Node.js. Key features include dynamic typing, prototype-based object orientation, and a rich ecosystem of frameworks like React and Angular.`,
  react: `React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable components and manage application state effectively. JSX, a syntax extension, enables HTML-like code within JavaScript.`
};

const courses = [
  {
    id: 1,
    title: "JavaScript Basics",
    description: "Learn the fundamentals of JavaScript.",
    detail: detail.javascript,
    quiz: [
      { question: "What is JavaScript?", options: ["Language", "Library"], answer: "Language" },
      { question: "What is `const` used for?", options: ["Variables", "Functions"], answer: "Variables" }
    ]
  },
  {
    id: 2,
    title: "React Basics",
    description: "Learn the fundamentals of React.",
    detail: detail.react,
    quiz: [
      { question: "What is React?", options: ["Library", "Framework"], answer: "Library" },
      { question: "What is JSX?", options: ["Syntax", "API"], answer: "Syntax" }
    ]
  },
  {
    id: 3,
    title: "React Basics",
    description: "Learn the fundamentals of React.",
    quiz: [
      { question: "What is React?", options: ["Library", "Framework"], answer: "Library" },
      { question: "What is JSX?", options: ["Syntax", "API"], answer: "Syntax" }
    ]
  }
];

module.exports = courses;
