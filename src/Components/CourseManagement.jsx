import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentCourse, setCurrentCourse] = useState({
    name: '',
    description: '',
    duration: '',
    fees: '',
    syllabus: []
  });

  const CourseForm = ({ course, onSubmit, onCancel }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">
        {course.id ? 'Edit Course' : 'Add New Course'}
      </h3>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Course Name</label>
          <input
            type="text"
            value={course.name}
            onChange={(e) => setCurrentCourse({...course, name: e.target.value})}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={course.description}
            onChange={(e) => setCurrentCourse({...course, description: e.target.value})}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            rows="3"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Duration</label>
            <input
              type="text"
              value={course.duration}
              onChange={(e) => setCurrentCourse({...course, duration: e.target.value})}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Fees</label>
            <input
              type="number"
              value={course.fees}
              onChange={(e) => setCurrentCourse({...course, fees: e.target.value})}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            {course.id ? 'Update Course' : 'Add Course'}
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Course Management</h2>
        <button
          onClick={() => {
            setCurrentCourse({
              name: '',
              description: '',
              duration: '',
              fees: '',
              syllabus: []
            });
            setShowForm(true);
          }}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus size={20} className="mr-2" />
          Add New Course
        </button>
      </div>

      {showForm && (
        <div className="mb-8">
          <CourseForm
            course={currentCourse}
            onSubmit={(e) => {
              e.preventDefault();
              // Implement course submit logic
              setShowForm(false);
            }}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Duration: {course.duration}</span>
              <span>Fees: ₹{course.fees}</span>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => {
                  setCurrentCourse(course);
                  setShowForm(true);
                }}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-md"
              >
                <Edit size={20} />
              </button>
              <button
                onClick={() => {
                  // Implement delete logic
                }}
                className="p-2 text-red-600 hover:bg-red-50 rounded-md"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseManagement;