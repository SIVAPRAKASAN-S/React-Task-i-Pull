import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import FavoriteColor from './components/favoriteColor'
import Employee from './assets/Employee'
import Form from './components/Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import home from './home'
import about from './about'
import contact from './contact'
import { BrowserRouter, Link } from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import Student from './components/students'







function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  {/* <FavoriteColor />
      <Form /> */}
  
     <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> {" | "}
        <Link to="/about">About</Link> {" | "}
        <Link to="/contact">Contact</Link>{" | "}
       
       <Link to="/student/101">Student 101</Link>{" | "}
     
       <Link to="/student/102">Student 102</Link>{" | "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/student/:id" element={<Student />} />
      </Routes>
     
    </BrowserRouter>
  
  </>

      
    
  )
}

export default App;
