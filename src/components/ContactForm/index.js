import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section >

      <h1 data-testid="h1tag">Contact me</h1>
      <div className='about-section'>
      
      
      <div>
        <div>
      <a className = 'link-button' href = "mailto: stevecalebrese@.com">Send Email to Steve.Calebrese@gmail.com</a>
      </div>
      <div>
      <a className = 'link-button'  href = "https://calendly.com/steve-calebrese/30min">Schedule a time to chat with Calendly</a>
          </div>
        
      </div>
      </div>
    </section>
  );
}

export default ContactForm;
