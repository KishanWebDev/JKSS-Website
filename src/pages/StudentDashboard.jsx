import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book, Calendar, Clock, Award, User, Mail, Phone } from 'lucide-react';

const StudentDashboard = () => {
  const [studentInfo, setStudentInfo] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Fetch student info and enrolled courses
    const fetchStudentData = async () => {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStudentInfo({
        name: 'John Doe',
        id: 'STU001',
        email: 'john.doe@example.com',
        phone: '+91 9876543210',
        joinDate: '2023-01-15'
      });

      setEnrolledCourses([
        { id: 1, name: 'Course on Computer Concepts (CCC)', progress: 60, nextClass: '2023-06-15 10:00 AM' },
        { id: 2, name: 'Advanced Diploma in Computer Applications (ADCA)', progress: 30, nextClass: '2023-06-16 2:00 PM' },
      ]);
    };

    fetchStudentData();
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  if (!studentInfo) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto px-4 py-8 mt-16"
    >
      <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md col-span-1"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h2 className="text-xl font-semibold mb-4">Student Information</h2>
          <div className="space-y-2">
            <p className="flex items-center"><User className="w-5 h-5 mr-2 text-blue-500" /> <strong>Name:</strong> {studentInfo.name}</p>
            <p className="flex items-center"><Award className="w-5 h-5 mr-2 text-green-500" /> <strong>Student ID:</strong> {studentInfo.id}</p>
            <p className="flex items-center"><Mail className="w-5 h-5 mr-2 text-purple-500" /> <strong>Email:</strong> {studentInfo.email}</p>
            <p className="flex items-center"><Phone className="w-5 h-5 mr-2 text-red-500" /> <strong>Phone:</strong> {studentInfo.phone}</p>
            <p className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-yellow-500" /> <strong>Join Date:</strong> {studentInfo.joinDate}</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md col-span-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
          {enrolledCourses.map(course => (
            <motion.div
              key={course.id}
              className="mb-4 p-4 bg-gray-100 rounded-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-semibold text-lg">{course.name}</h3>
              <div className="flex items-center mt-2">
                <Book className="w-4 h-4 mr-2 text-blue-500" />
                <p>Progress: {course.progress}%</p>
              </div>
              <div className="mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
              </div>
              <div className="flex items-center mt-2">
                <Calendar className="w-4 h-4 mr-2 text-green-500" />
                <p>Next Class: {course.nextClass}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-8 bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
        <ul className="space-y-4">
          <li className="flex items-center bg-gray-100 p-3 rounded-md">
            <Clock className="w-5 h-5 mr-3 text-blue-500" />
            <span>Mock Test - June 20, 2023</span>
          </li>
          <li className="flex items-center bg-gray-100 p-3 rounded-md">
            <Award className="w-5 h-5 mr-3 text-green-500" />
            <span>Certificate Distribution - July 15, 2023</span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default StudentDashboard;