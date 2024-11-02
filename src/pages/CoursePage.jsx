import React from 'react';
import { useParams } from 'react-router-dom';
import CourseDetails from '../Components/CourseDetails';

const CoursePage = () => {
  const { coursePath } = useParams();

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Course Information</h1>
      <CourseDetails coursePath={coursePath} />
    </div>
  );
};

export default CoursePage;