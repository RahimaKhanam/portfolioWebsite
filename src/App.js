import React, { Component } from 'react';

// React Router import
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" exact={true} element={<NotFoundPage />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
  
    )
  }
};

export default App;