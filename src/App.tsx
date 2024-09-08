import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home ';
import About from './About';
import Services from './Services';
import Employees from './Employees';
import Testimonial from './testimonial';
import Contact from './Contact ';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/testimonial" element={<Testimonial />} />
     
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

