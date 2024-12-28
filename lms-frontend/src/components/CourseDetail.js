// src/components/CourseDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <p className="text-center text-gray-500 text-xl">Loading...</p>;
  }

  if (!course) {
    return <p className="text-center text-red-500 text-xl">Course not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{course.title}</h1>
      <p className="text-gray-700 text-lg mb-4">{course.description}</p>
      <p className="text-gray-600 text-base leading-relaxed mb-6">{course.detail}</p>
      <div className="flex justify-end">
        <Link to={`/quiz/${course.id}`}>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-500 transition">Start Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default CourseDetail;
