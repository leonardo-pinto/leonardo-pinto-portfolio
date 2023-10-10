import React, { useState } from 'react';
import { send } from 'emailjs-com';
import {
  Form,
  FormInput,
  FormTextArea,
  SendButton,
} from './StyledComponents';

function ContactForm() {
  const [toResultMessage, setToResultMessage] = useState('');
  const [toShowMessage, setToShowMessage] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const onSubmit = async (e) => {
    setToResultMessage('');
    setToShowMessage(false);
    e.preventDefault();
    const result = await send(
      process.env.REACT_APP_API_SERVICE_ID_KEY,
      process.env.REACT_APP_API_EMAIL_TEMPLATE_KEY,
      toSend,
      process.env.REACT_APP_API_USER_ID_KEY,
    );

    setToSend({
      from_name: '',
      from_email: '',
      message: '',
    });

    if (result.status === 200) {
      setToResultMessage('Email sent successfully!');
    } else {
      setToResultMessage('An error occurred. Please try again.');
    }
    setToShowMessage(true);
  };

  const handleChange = ({ target: { name, value } }) => {
    setToSend({ ...toSend, [name]: value });
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormInput
        type="text"
        name="from_name"
        placeholder="Name"
        value={toSend.from_name}
        onChange={handleChange}
        required
      />
      <FormInput
        type="text"
        name="from_email"
        placeholder="Email"
        value={toSend.from_email}
        onChange={handleChange}
        required
      />
      <FormTextArea
        type="text"
        name="message"
        placeholder="Message"
        value={toSend.message}
        onChange={handleChange}
        required
      />
      <SendButton type="submit">
        Send
      </SendButton>
      { toShowMessage && <p>{ toResultMessage }</p> }
    </Form>
  );
}

export default ContactForm;
