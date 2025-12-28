import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Project from './components/Project'
import Education from './components/Education'
import Highlights from './components/Highlights'
import ProfileSection from "./components/ProfileSection";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Experience />
      <Project />
      <Education />
      <Highlights />
      <ProfileSection />
    </div>
  )
}

export default App
