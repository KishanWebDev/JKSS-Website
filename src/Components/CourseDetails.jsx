import React, { useState } from 'react';
import { Book, Clock, DollarSign, Users, CheckCircle, ShoppingCart } from 'lucide-react';
import RazorpayPayment from './RazorpayPayment';

const courseData = {
  'ccc': {
    name: 'Course on Computer Concepts (CCC)',
    description: 'A foundational course designed to provide basic computer literacy and essential digital skills.',
    duration: '3 months',
    admissionFee: '₹5,000',
    discount: '10% off for early bird registrations',
    eligibility: '10+2 pass in any stream',
    keyTopics: ['Computer Fundamentals', 'Office Applications', 'Internet Basics', 'E-Governance Services'],
    color: 'blue'
  },
  'o-level': {
    name: "'O' Level",
    description: 'An advanced course that provides in-depth knowledge of IT and software development.',
    duration: '1 year',
    admissionFee: '₹30,000',
    discount: '15% scholarship for meritorious students',
    eligibility: '10+2 with Mathematics',
    keyTopics: ['Programming Languages', 'Database Management', 'Web Development', 'Software Engineering'],
    color: 'green'
  },
  'adca': {
    name: 'Advanced Diploma in Computer Applications (ADCA)',
    description: 'A comprehensive program covering various aspects of computer applications and software.',
    duration: '1 year',
    admissionFee: '₹25,000',
    discount: '10% discount for full payment',
    eligibility: '10+2 in any stream',
    keyTopics: ['Office Automation', 'Programming Basics', 'Web Design', 'Database Management'],
    color: 'purple'
  },
  'dca': {
    name: 'Diploma in Computer Applications (DCA)',
    description: 'A short-term course focusing on practical computer skills for office and personal use.',
    duration: '6 months',
    admissionFee: '₹15,000',
    discount: 'Free computer bag for first 20 enrollments',
    eligibility: '10th pass',
    keyTopics: ['MS Office', 'Internet & Email', 'Basic Hardware', 'Introduction to Programming'],
    color: 'red'
  },
  'pgdca': {
    name: 'Post Graduate Diploma in Computer Applications (PGDCA)',
    description: 'An advanced diploma for graduates looking to enhance their IT skills.',
    duration: '1 year',
    admissionFee: '₹40,000',
    discount: '20% scholarship for students with distinction in graduation',
    eligibility: 'Graduation in any discipline',
    keyTopics: ['Advanced Programming', 'System Analysis & Design', 'DBMS', 'Networking'],
    color: 'indigo'
  },
  'data-entry-course': {
    name: 'Data Entry Course',
    description: 'A specialized course focusing on accurate and efficient data entry skills.',
    duration: '2 months',
    admissionFee: '₹3,000',
    discount: 'Free typing software for all enrollments',
    eligibility: '10th pass with basic computer knowledge',
    keyTopics: ['Keyboard Skills', 'MS Excel', 'Data Validation', 'Office Procedures'],
    color: 'yellow'
  },
  'a-level': {
    name: "'A' Level",
    description: 'An advanced course equivalent to MCA, focusing on high-level IT skills and project management.',
    duration: '18 months',
    admissionFee: '₹50,000',
    discount: 'Placement assistance for top performers',
    eligibility: "Bachelor's degree with Mathematics",
    keyTopics: ['Advanced Software Engineering', 'AI & Machine Learning', 'Cloud Computing', 'IT Project Management'],
    color: 'pink'
  }
};

const CourseDetails = ({ coursePath }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [error, setError] = useState(null);
  const course = courseData[coursePath];

  if (!course) {
    return <div className="text-center text-2xl font-bold text-gray-600">Course not found</div>;
  }

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 border-blue-300',
    green: 'bg-green-100 text-green-800 border-green-300',
    purple: 'bg-purple-100 text-purple-800 border-purple-300',
    red: 'bg-red-100 text-red-800 border-red-300',
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    indigo: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    pink: 'bg-pink-100 text-pink-800 border-pink-300'
  };

  const buttonColorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
    red: 'bg-red-600 hover:bg-red-700',
    yellow: 'bg-yellow-600 hover:bg-yellow-700',
    indigo: 'bg-indigo-600 hover:bg-indigo-700',
    pink: 'bg-pink-600 hover:bg-pink-700'
  };

  const handleBuyCourse = () => {
    setShowPayment(true);
  };

  const handlePaymentSuccess = (response) => {
    console.log('Payment successful', response);
    setPurchaseComplete(true);
    setShowPayment(false);
  };

  const handlePaymentFailure = (error) => {
    console.error('Payment failed', error);
    setError('Payment failed. Please try again.');
    setShowPayment(false);
  };

  return (
    <div className={`bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-4xl mx-auto animate-fadeInDown border-t-4 ${colorClasses[course.color]}`}>
      <div className="p-8">
        <h2 className={`text-3xl font-bold mb-4 text-${course.color}-600 animate-glow`}>{course.name}</h2>
        <p className="text-gray-600 mb-6 text-lg">{course.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center">
            <Clock className={`w-6 h-6 mr-2 text-${course.color}-500`} />
            <div>
              <h3 className="font-semibold text-gray-700">Duration</h3>
              <p>{course.duration}</p>
            </div>
          </div>
          <div className="flex items-center">
            <DollarSign className={`w-6 h-6 mr-2 text-${course.color}-500`} />
            <div>
              <h3 className="font-semibold text-gray-700">Admission Fee</h3>
              <p>{course.admissionFee}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Users className={`w-6 h-6 mr-2 text-${course.color}-500`} />
            <div>
              <h3 className="font-semibold text-gray-700">Eligibility</h3>
              <p>{course.eligibility}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Book className={`w-6 h-6 mr-2 text-${course.color}-500`} />
            <div>
              <h3 className="font-semibold text-gray-700">Discount Offer</h3>
              <p className={`inline-block ${colorClasses[course.color]} px-2 py-1 rounded text-sm font-semibold animate-pulse`}>
                {course.discount}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className={`text-xl font-semibold mb-4 text-${course.color}-600`}>Key Topics</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.keyTopics.map((topic, index) => (
              <li key={index} className="flex items-center animate-fadeInDown" style={{animationDelay: `${index * 0.1}s`}}>
                <CheckCircle className={`w-5 h-5 mr-2 text-${course.color}-500`} />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {!purchaseComplete && (
          <div className="mt-8">
            {!showPayment ? (
              <button
                onClick={handleBuyCourse}
                className={`${buttonColorClasses[course.color]} text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center w-full shadow-lg hover:shadow-xl`}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Buy Course
              </button>
            ) : (
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-4">Complete Your Purchase</h3>
                <RazorpayPayment 
                  course={course} 
                  onSuccess={handlePaymentSuccess} 
                  onFailure={handlePaymentFailure}
                />
              </div>
            )}
          </div>
        )}

        {purchaseComplete && (
          <div className="mt-8 p-4 bg-green-100 text-green-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Purchase Complete!</h3>
            <p>Thank you for enrolling in {course.name}. You will receive further instructions via email.</p>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg">
            <p>{error}</p>
          </div>
        )}
      </div>
      <div className={`${colorClasses[course.color]} px-8 py-4 mt-6`}>
        <p className="text-sm">For more information or assistance, please contact our admissions office.</p>
      </div>
    </div>
  );
};

export default CourseDetails;