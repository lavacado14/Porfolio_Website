/*
  File: ContactMe.jsx
  Student's Name: Maaz Bobat
  Student ID: 301360037
  Date: 5/31/2024

  Description:
  This file contains the ContactMe component, which displays contact information and a form for users to submit messages.
*/
import React from 'react';

function ContactMe() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.forEach((value, key) => {

    });

    window.location.href = "/";
  };

  return (
    <>
      <section className="contact-me">
        <div className="row">
          <div className="contact-col">
            <h1>Contact Information: </h1>
            <p>Name: Maaz Bobat</p>
            <p>Email: bobatm901@gmail.com</p>
          </div>
          <div className="contact-col">
            <form onSubmit={handleSubmit}>
              <input type="text" name="firstName" placeholder="First Name" required />
              <input type="text" name="lastName" placeholder="Last Name" required />
              <input type="tel" name="contactNumber" placeholder="Contact Number" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <textarea rows="8" name="message" placeholder="Message" required></textarea>
              <button type="submit" className="hero-btn red-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactMe;
