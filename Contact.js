import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  &:hover {
    background-color: #2980b9;
  }
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  a {
    margin: 0 10px;
    color: #3498db;
    text-decoration: none;
    font-size: 1.2em;
    &:hover {
      color: #2980b9;
    }
  }
`;

const Message = styled.p`
  color: ${({ error }) => (error ? 'red' : 'green')};
  text-align: center;
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitMessage('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitMessage('Please correct the errors in the form.');
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Get in touch with us via form, WhatsApp, phone, or visit us.</p>
      <ContactForm onSubmit={handleSubmit} aria-label="Contact Form">
        <label htmlFor="name">Name:</label>
        <Input type="text" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} aria-required="true" />
        {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
        <label htmlFor="email">Email:</label>
        <Input type="email" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} aria-required="true" />
        {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
        <label htmlFor="message">Message:</label>
        <TextArea id="message" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange} aria-required="true" />
        {errors.message && <small style={{ color: 'red' }}>{errors.message}</small>}
        <Button type="submit">Send Message</Button>
      </ContactForm>
      {submitMessage && <Message error={!!Object.keys(errors).length}>{submitMessage}</Message>}
      <SocialMediaLinks>
        <a href="#" aria-label="Facebook">Facebook</a>
        <a href="#" aria-label="LinkedIn">LinkedIn</a>
        <a href="#" aria-label="YouTube">YouTube</a>
      </SocialMediaLinks>
    </div>
  );
};

export default Contact;
