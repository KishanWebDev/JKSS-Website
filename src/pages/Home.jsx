import React from 'react'
import Hero from '../components/Hero'
import TestimonialsSection from '../Components/TestimonialsSection'
import BlogSection from '../components/BlogSection'
import Gallery from '../components/Gallery'
import ContactForm from '../components/ContactForm'

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