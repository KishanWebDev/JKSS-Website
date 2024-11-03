'use client'

import React from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "sonner";
import { Laptop, Users, BookOpen, Award, ArrowRight } from "lucide-react";

const Button = ({ children, variant = "primary", size = "md", onClick, className = "" }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-600 hover:bg-gray-100"
  };
  const sizeStyles = {
    md: "h-10 px-4 py-2",
    lg: "h-12 px-6 py-3 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card>
      <CardContent className="flex flex-col items-center">
        <Icon className="w-12 h-12 text-blue-600 mb-4" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-center text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const AboutUs = () => {
  const handleApplyNow = () => {
    toast.success("Application submitted successfully!", {
      description: "We'll get back to you soon.",
    });
  };

  return (
    <div className="content-wrapper">
      <Toaster />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 md:py-24 bg-gray-200"
      >
        <div className="flex flex-col justify-center items-center gap-6 p-4 md:text-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 mt-8 md:mt-12"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Jan Kalyan Sewa Samiti (JKSS)
            </h1>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-700 md:w-3/4 lg:w-2/3 mx-auto">
                At JKSS, our mission is to empower learners with quality IT education and skills needed for success in the digital age. We believe that education is the key to unlocking human potential and driving positive change in our community.
              </p>
              <p className="text-lg md:text-xl text-gray-700 md:w-3/4 lg:w-2/3 mx-auto">
                Founded in 1995, JKSS has been at the forefront of IT education in our region, providing accessible, engaging, and high-quality educational content to students from all backgrounds.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-16 bg-white"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 px-4 md:px-16 max-w-7xl mx-auto">
          <div className="w-full md:w-1/2">
            <div className="flex justify-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                className="w-full max-w-lg rounded-lg shadow-lg"
                src="/StudentImgs.png"
                alt="JKSS Campus"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Our Student-First Approach
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                At JKSS, we prioritize our students' needs and aspirations. Our courses are designed to be accessible to learners of all levels, from beginners to advanced practitioners in the IT field.
              </p>
              <p className="text-lg text-gray-700">
                We focus on practical, hands-on learning experiences that prepare our students for real-world challenges in the IT industry. Our state-of-the-art computer labs and experienced faculty ensure that students receive the best possible education.
              </p>
              <p className="text-lg text-gray-700">
                JKSS also offers career counseling and placement assistance to help our graduates find rewarding positions in the IT sector.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="py-16 bg-gray-100"
      >
        <section className="text-left md:text-center px-4 md:px-16 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What Makes JKSS Different?</h2>
          <p className="mt-4 text-lg text-gray-700">
            We understand that every learner is unique, with their own goals and learning styles. That's why we offer personalized learning paths tailored to individual needs.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Our courses go beyond traditional lectures, offering hands-on activities, project-based learning, and industry-relevant curriculum that brings concepts to life and prepares students for successful careers in IT.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-4 md:px-16 max-w-7xl mx-auto">
          <FeatureCard
            icon={Laptop}
            title="Modern Curriculum"
            description="Up-to-date courses aligned with industry needs"
          />
          <FeatureCard
            icon={Users}
            title="Expert Faculty"
            description="Experienced professionals as instructors"
          />
          <FeatureCard
            icon={BookOpen}
            title="Practical Learning"
            description="Hands-on projects and real-world applications"
          />
          <FeatureCard
            icon={Award}
            title="Industry Recognition"
            description="Certificates valued by top IT companies"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="py-16"
        >
          <div className="p-4 md:p-10 text-left md:text-center max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-lg text-gray-700">
              JKSS envisions being the premier IT education institute in our region, fostering a dynamic and inclusive learning ecosystem. We aspire to bridge the digital divide and prepare our students for the challenges of the rapidly evolving IT landscape.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Our commitment is to empower individuals with the knowledge and skills needed to thrive in the digital age, contributing to the growth of our local IT industry and the overall development of our community.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-blue-600 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8">
            Become a part of JKSS and start your journey towards a successful career in IT.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={handleApplyNow}
          >
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;