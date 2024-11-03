import React from 'react'
import Hero from '../Components/Hero'
import TestimonialsSection from '../Components/TestimonialsSection'
import BlogSection from '../Components/BlogSection'
import Gallery from '../Components/Gallery'
import ContactForm from '../Components/ContactForm'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <TestimonialsSection />
      <BlogSection />
      <Gallery />
      <ContactForm />
    </div>
  )
}

export default Home