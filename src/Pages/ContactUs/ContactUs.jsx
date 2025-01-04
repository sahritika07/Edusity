import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>

      <form className="contact-form">
        <label>
          Name:
          <input type="text" placeholder="Enter your name" required />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" required />
        </label>
        <label>
          Message:
          <textarea placeholder="Enter your message" required></textarea>
        </label>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;




// import React from 'react';
// import './ContactUs.css';

// const ContactUs = () => {
//   return (
//     <div className="contact">
//       <h1>Contact Us</h1>
//       <p>If you have any questions, feel free to reach out to us!</p>

//       <form className="contact-form">
//         <label>
//           Name:
//           <input type="text" placeholder="Enter your name" required />
//         </label>
//         <label>
//           Email:
//           <input type="email" placeholder="Enter your email" required />
//         </label>
//         <label>
//           Message:
//           <textarea placeholder="Enter your message" required></textarea>
//         </label>
//         <button type="submit" className="btn">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactUs;

