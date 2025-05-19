import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Background = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(120deg, #232526 0%, #414345 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 60px 0;
`;

const PageTitle = styled.h1`
  color: #fff;
  font-size: 2.8em;
  font-family: 'Playfair Display', serif;
  margin-top: 60px;
  margin-bottom: 10px;
  letter-spacing: 2px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #fff;
  font-size: 2em;
  margin: 40px 0 20px 0;
  text-align: center;
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto 40px auto;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
`;

const CarouselCaption = styled.div`
  background: rgba(0,0,0,0.6);
  color: #fff;
  padding: 18px 24px;
  border-radius: 0 0 16px 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const CarouselSlide = styled.div`
  position: relative;
`;

const MosaicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 40px auto;
`;

const MosaicCard = styled.div`
  background: rgba(255,255,255,0.06);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
`;

const MosaicImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const MosaicInfo = styled.div`
  padding: 12px 16px 16px 16px;
`;

const MosaicTitle = styled.h3`
  color: #fff;
  font-size: 1.1em;
  margin: 0 0 6px 0;
`;

const MosaicDesc = styled.p`
  color: #b0b0b0;
  font-size: 0.98em;
  margin: 0;
`;

const EventsSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 40px auto;
  background: rgba(255,255,255,0.04);
  border-radius: 16px;
  padding: 32px 24px;
`;

const EventList = styled.ul`
  color: #fff;
  font-size: 1.1em;
  margin: 0;
  padding-left: 20px;
`;

const TestimonialSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 40px auto;
  background: rgba(255,255,255,0.04);
  border-radius: 16px;
  padding: 32px 24px;
`;

const Testimonial = styled.div`
  color: #fff;
  font-size: 1.1em;
  margin-bottom: 18px;
  font-style: italic;
`;

const ContactButton = styled.a`
  display: inline-block;
  background: #00ff99;
  color: #232526;
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 8px;
  padding: 16px 36px;
  margin: 30px auto 0 auto;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  transition: background 0.2s;
  &:hover { background: #00cc77; }
`;

const carouselData = [
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    title: 'Couscous Royal',
    desc: 'Notre plat signature, servi lors de grands événements.'
  },
  {
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
    title: "Tajine d\'agneau aux pruneaux",
    desc: "Tajine d\'agneau, pruneaux et amandes, décoré avec soin."
  },
  {
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=900&q=80',
    title: 'Buffet Mariage',
    desc: 'Buffet pour un mariage de 100 personnes – Menu personnalisé.'
  },
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    title: 'Soirée à Thème',
    desc: 'Buffet et animation pour une soirée orientale.'
  },
  {
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
    title: 'Burger Maison',
    desc: 'Burger maison, frites fraîches, présentation gourmande.'
  },
];

const mosaicData = [
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    title: 'Vitrine Réfrigérée',
    desc: 'Installation sur mesure pour une boulangerie artisanale.'
  },
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    title: 'Buffet Anniversaire',
    desc: "Buffet d'anniversaire pour 50 invités."
  },
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    title: 'Buffet Séminaire',
    desc: "Buffet lors d'un séminaire d'entreprise."
  },
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    title: 'Soirée Privée',
    desc: "Organisation d'une soirée privée à thème."
  },
];

const eventsData = [
  "Mariages (jusqu\'à 200 personnes)",
  'Soirées à thème (orientale, musicale, etc.)',
  'Fêtes privées et anniversaires',
  "Événements d'entreprise et séminaires",
];

const testimonials = [
  '“Merci à toute l\'équipe pour avoir fait de notre mariage un moment magique !”',
  '“Une soirée orientale inoubliable, cuisine exquise.”',
  "“Buffet d'anniversaire délicieux et service impeccable.”",
];

const Réalisations = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <Background>
      <PageTitle>Nos Réalisations</PageTitle>
      <CarouselContainer>
        <Slider {...sliderSettings}>
          {carouselData.map((item, idx) => (
            <CarouselSlide key={idx}>
              <CarouselImage src={item.image} alt={item.title} />
              <CarouselCaption>
                <strong>{item.title}</strong><br />
                <span>{item.desc}</span>
              </CarouselCaption>
            </CarouselSlide>
          ))}
        </Slider>
      </CarouselContainer>

      <SectionTitle>Galerie de nos plats & buffets</SectionTitle>
      <MosaicGrid>
        {mosaicData.map((item, idx) => (
          <MosaicCard key={idx}>
            <MosaicImage src={item.image} alt={item.title} />
            <MosaicInfo>
              <MosaicTitle>{item.title}</MosaicTitle>
              <MosaicDesc>{item.desc}</MosaicDesc>
            </MosaicInfo>
          </MosaicCard>
        ))}
      </MosaicGrid>

      <SectionTitle>Nos événements passés</SectionTitle>
      <EventsSection>
        <EventList>
          {eventsData.map((event, idx) => (
            <li key={idx}>{event}</li>
          ))}
        </EventList>
      </EventsSection>

      {/*
      <SectionTitle>Vidéos</SectionTitle>
      <div style={{ color: '#fff', textAlign: 'center', marginBottom: 40 }}>
        (Section vidéo à venir)
      </div>
      */}

      <SectionTitle>Témoignages Clients</SectionTitle>
      <TestimonialSection>
        {testimonials.map((t, idx) => (
          <Testimonial key={idx}>{t}</Testimonial>
        ))}
      </TestimonialSection>

      <ContactButton href="/contact">Vous souhaitez organiser un événement chez nous ? → Contactez-nous</ContactButton>
    </Background>
  );
};

export default Réalisations; 