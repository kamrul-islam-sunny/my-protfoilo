import React from 'react'
import Hero from '../components/Hero'
import Skill from '../components/Skill'
import About from '../components/About'
import Project from '../components/Project'
import ContactMe from '../components/ContactMe'



export default function HomePage() {
  return (
    <div>
       <Hero/>
       <About/>
       <Skill/>
       <Project/>
        <ContactMe/>
    </div>
  )
}
