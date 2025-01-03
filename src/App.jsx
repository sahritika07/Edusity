// import {Route, Routes} from 'react-router-dom'
// // import Home from './pages/Home/Home'
// import './App.css'
// import About from './Components/About/About'
// import Campus from './Components/Campus/Campus'
// import Hero from './Components/Hero/Hero'
// import Navbar from './Components/Navbar/Navbar'
// import Programs from './Components/Programs/Programs'
// import Testimonials from './Components/Testimonials/Testimonials'
// import Title from './Components/Title/Title'
// import ContactUs from './Components/ContactUs/ContactUs'

// function App() {
 

//   return (
//     <>
//      <Navbar/>
//      <Hero/>
//      <div className="container">
//       <Title subTitle='Our PROGRAM' title='What We Offer'/>
//      <Programs/>
//      <About/>
//      <Title subTitle='Gallery' title='Campus Photos'/>
//      <Campus/>
//      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
//      <Testimonials/>
//      <Title subTitle='Contact Us' title='Get in Touch'/>
//      <Routes>
//           {/* <Route path="/" element ={<Home/>} /> */}
//           <Route path="/contactUs" element ={<ContactUs/>} />     
//       </Routes>
//       {/* <ContactUs/> */}
//      </div>
     
     
//     </>
//   )
// }

// export default App


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Programs from './Components/Programs/Programs';
import Testimonials from './Components/Testimonials/Testimonials';
import Title from './Components/Title/Title';
// import ContactUs from './Pages/ContactUs/ContactUs';
import ContactUs from './Pages/ContactUs/ContactUs'


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Routes>
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
