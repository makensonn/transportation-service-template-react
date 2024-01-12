import React from 'react'
import Navbar from '../app/components/Navbar'
import Main from '../app/components/Main'
import About from '../app/components/About'
import Projects from '../app/components/Projects'
import Contact from '../app/components/Contact'

const page = () => {
  return (
    <>
        <Navbar/>
        <Main/>
        <Projects/>
        <About/>
        <Contact/>
    </>
  )
}

export default page
