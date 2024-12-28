import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <body className="font-sans bg-gray-100">
      <header className="bg-blue-500 text-white shadow-md mb-5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold">LMS</div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#courses" className="hover:underline">Courses</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero text-center text-white flex items-center justify-center my-5">
        <div className="bg-black bg-opacity-50 p-8 w-11/12 rounded-lg">
          <h1 className="text-4xl md:text-4xl font-bold">Welcome to the Learning Management System</h1>
          <p className="mt-4 text-lg">Enhance your skills with interactive courses and assessments</p>
          <a href="#courses" className="mt-6 inline-block bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600">Explore Courses</a>
        </div>
      </section>

      <section id="courses" className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">Our Courses</h2>
          <p className="mt-4 text-lg">Choose from a variety of courses tailored to help you succeed.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.length > 0 ? (
              courses.map(course => (
                <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <p className="mt-2">{course.description}</p>
                  <Link to={`/course/${course.id}`} className="mt-4 text-blue-500 hover:underline">Learn More</Link>
                </div>
              ))
            ) : (
              <p>Loading courses...</p>
            )}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="mt-4 text-lg">We are committed to providing high-quality education that helps individuals advance their skills.</p>
        </div>
      </section>
    </body>
  );
}

export default CourseList;
