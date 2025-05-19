import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 2rem 0;
  position: relative;
  background-image: url('https://www.palaisfaraj.com/wp-content/uploads/2023/03/luxury-hotel-fes-morocco-all-our-restaurants-amandier-roof-top.jpg');
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.5);
  z-index: 1;
`;

const ContactTitle = styled.h1`
  text-align: center;
  color: #fff;
  margin-bottom: 2rem;
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-shadow: 0 4px 24px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5);
  background: rgba(20,20,20,0.5);
  display: inline-block;
  padding: 0.5em 2em;
  border-radius: 1em;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(255,255,255,0.7);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const ContactInfo = styled.div`
  padding: 2rem;
  background: rgba(255,255,255,0.7);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const InfoItem = styled.div`
  margin: 1.5rem 0;
  color: #666;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;
  text-decoration: none;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 2rem;
  border-radius: 10px;
  overflow: hidden;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Merci pour votre message! Nous vous répondrons bientôt.');
  };

  return (
    <ContactContainer>
      <Overlay />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <ContactTitle>Contactez-nous</ContactTitle>
        <ContactGrid>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Nom</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="subject">Sujet</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit">Envoyer le message</SubmitButton>
          </ContactForm>

          <ContactInfo>
            <InfoItem>
              <h3>Email</h3>
              <SocialLink href="mailto:info@watson.ma">
                info@watson.ma
              </SocialLink>
            </InfoItem>
            
            <InfoItem>
              <h3>Téléphone</h3>
              <SocialLink href="tel:+212662362121">
                +212 662-362121
              </SocialLink>
            </InfoItem>
            
            <InfoItem>
              <h3>WhatsApp</h3>
              <SocialLink 
                href="https://wa.me/212662362121" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Chat with us on WhatsApp
              </SocialLink>
            </InfoItem>
            
            <InfoItem>
              <h3>Site Web</h3>
              <SocialLink 
                href="http://www.watson.ma" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                www.watson.ma
              </SocialLink>
            </InfoItem>
            
            <InfoItem>
              <h3>Adresse</h3>
              <p>67 rue aziz bellal maarif<br />Casablanca, Maroc</p>
            </InfoItem>
          </ContactInfo>
        </ContactGrid>

        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.349381656546!2d-7.6191!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzNycwOC44Ilc!5e0!3m2!1sfr!2sma!4v1645564750986!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>
      </div>
    </ContactContainer>
  );
};

export default Contact; 