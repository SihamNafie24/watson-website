import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ... (all styled-components and data arrays remain unchanged) ...

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