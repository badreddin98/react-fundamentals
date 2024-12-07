import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:badreddin.elyazgi@gmail.com">badreddin.elyazgi@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/badreddin-elyazgi/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/badreddin-elyazgi
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/Badreddin-Elyazgi" target="_blank" rel="noopener noreferrer">
            github.com/Badreddin-Elyazgi
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
