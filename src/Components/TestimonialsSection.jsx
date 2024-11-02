import React from 'react';

const TestimonialsSection = () => {
  const teachers = [
    {
      name: "Mr. Rahul Singh",
      role: "Web Design Instructor",
      image: "./Rahul Singh.png",
      description: "An expert web designer with years of industry experience, Mr. Rahul Singh leads our web design program. His practical approach to teaching ensures students master both fundamentals and advanced concepts in modern web development."
    },
    {
      name: "Mr. Neeraj Maurya",
      role: "IT & Networking Instructor",
      image: "./Neeraj Maurya.jpg",
      description: "With extensive knowledge in IT infrastructure and networking, Mr. Neeraj Maurya brings practical industry insights to the classroom. His expertise in IT tools and network fundamentals helps students build a strong technical foundation."
    },
    {
      name: " Mr. Arvind Singh, MD",
      role: "Centre In-charge",
      image: "/Arvind Singh.png",
      description: "Under the visionary leadership of Mr. Arvind Singh, JKSS has grown into a premier institution for IT education. His commitment to quality education and student success has shaped our institute's excellence-driven culture."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16">Our Leadership</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {teachers.map((teacher) => (
            <div 
              key={teacher.name}
              className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition duration-300"
            >
              <div className="flex flex-col items-center">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-32 h-32 rounded-full mb-6"
                />
                <h3 className="text-2xl font-semibold mb-2">{teacher.name}</h3>
                <p className="text-blue-600 mb-4">{teacher.role}</p>
                <p className="text-gray-600 text-center">{teacher.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;