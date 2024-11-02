import React, { useState } from 'react';
import { Book, Calendar, FileText, User } from 'lucide-react';

const StudentPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [studentInfo] = useState({
    name: 'Student Name',
    enrollmentNo: 'JKSS2024001',
    course: 'O Level',
    batch: 'Morning 2024',
    attendance: '85%',
    nextExam: '2024-04-15',
    assignments: [
      { id: 1, title: 'HTML Assignment', dueDate: '2024-03-30', status: 'Submitted' },
      { id: 2, title: 'JavaScript Project', dueDate: '2024-04-05', status: 'Pending' }
    ]
  });

  const TabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Quick Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Attendance</p>
                  <p className="text-2xl font-bold text-blue-600">{studentInfo.attendance}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600">Next Exam</p>
                  <p className="text-2xl font-bold text-green-600">
                    {new Date(studentInfo.nextExam).toLocaleDateString()}
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-gray-600">Pending Assignments</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {studentInfo.assignments.filter(a => a.status === 'Pending').length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Recent Assignments</h3>
              <div className="space-y-4">
                {studentInfo.assignments.map(assignment => (
                  <div key={assignment.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{assignment.title}</p>
                      <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      assignment.status === 'Submitted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {assignment.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'courses':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">My Courses</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">{studentInfo.course}</h4>
                <p className="text-sm text-gray-600">Batch: {studentInfo.batch}</p>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">60% Complete</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'assignments':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">All Assignments</h3>
            <div className="space-y-4">
              {studentInfo.assignments.map(assignment => (
                <div key={assignment.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{assignment.title}</h4>
                      <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      assignment.status === 'Submitted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {assignment.status}
                    </span>
                  </div>
                  <button className="mt-4 text-blue-600 hover:text-blue-800">
                    View Details →
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Student Info Card */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                <User size={32} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{studentInfo.name}</h2>
                <p className="text-gray-600">
                  {studentInfo.enrollmentNo} | {studentInfo.course} | {studentInfo.batch}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FileText size={20} />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeTab === 'courses' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Book size={20} />
            <span>My Courses</span>
          </button>
          <button
            onClick={() => setActiveTab('assignments')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeTab === 'assignments' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Calendar size={20} />
            <span>Assignments</span>
          </button>
        </div>

        {/* Tab Content */}
        <TabContent />
      </div>
    </div>
  );
};

export default StudentPortal;