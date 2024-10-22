import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes,Route } from'react-router-dom';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Courses from './Components/Courses';
import About  from './Components/About';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<h1>"Welcome to the about page</h1>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

    </div>
  );
}

export default App;
