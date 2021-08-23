import React,  { useState } from 'react';
import { send } from 'emailjs-com';
import { Form, FormInput } from './ContactFormStyle';

function ContactForm() {
  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_API_SERVICE_ID_KEY,
      process.env.REACT_APP_API_EMAIL_TEMPLATE_KEY,
      toSend,
      process.env.REACT_APP_API_USER_ID_KEY,
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  }

  const handleChange = ({ name, value }) => {
    setToSend({ ...toSend, [name]: value })
  }

  return (
    <Form onSubmit={onSubmit}>
        <FormInput
          type='text'
          name='from_name'
          placeholder='Name'
          value={toSend.from_name}
          onChange={handleChange}
        />
        <FormInput
          type='text'
          name='from_email'
          placeholder='Email'
          value={toSend.from_email}
          onChange={handleChange}
        />
        <FormInput
          type='text'
          name='message'
          placeholder='Message'
          value={toSend.message}
          onChange={handleChange}
        />
        <button type='submit'>
          Send
        </ button>
      </Form>
  )
}

export default ContactForm;
