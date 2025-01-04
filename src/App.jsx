
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Programs from './Components/Programs/Programs';
import Testimonials from './Components/Testimonials/Testimonials';
import '@fortawesome/fontawesome-free/css/all.min.css';


import ContactUs from './Pages/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      {/* Navbar will stay persistent across all pages */}
      <Navbar />

      {/* Define routes for different pages */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              {/* <div className="container">
                <Title subTitle="Our PROGRAM" title="What We Offer" />
                <Programs />
                <About />
                <Title subTitle="Gallery" title="Campus Photos" />
                <Campus />
                <Title subTitle="TESTIMONIALS" title="What Student Says" />
                <Testimonials />
                <Title subTitle="Contact Us" title="Get in Touch" />
              </div> */}
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs subTitle="Our PROGRAM" title="What We Offer" />} />
        <Route path="/campus" element={<Campus subTitle="Gallery" title="Campus Photos"/>} />
        <Route path="/testimonials" element={<Testimonials subTitle="TESTIMONIALS" title="What Student Says" />} />
        <Route path="/contact" element={<ContactUs  />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


