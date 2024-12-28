// src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Quiz() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch the course details including the quiz
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/courses/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch course with ID ${id}`);
        }
        const data = await response.json();
        setCourse(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleAnswer = (index, answer) => {
    if (course.quiz[index].answer === answer) {
      setScore(score + 1);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div>
      <h1>{course.title} - Quiz</h1>
      <ul>
        {course.quiz.map((q, index) => (
          <li key={index}>
            <h3>{q.question}</h3>
            {q.options.map((option, i) => (
              <button key={i} onClick={() => handleAnswer(index, i)}>
                {option}
              </button>
            ))}
          </li>
        ))}
      </ul>
      <p>Score: {score} / {course.quiz.length}</p>
    </div>
  );
}

export default Quiz;
