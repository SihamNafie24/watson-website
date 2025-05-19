import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-image: url('https://static1.fr.squarespace.com/static/5134cbefe4b0c6fb04df8065/5dcb2d0669b294381f8ffb16/619e7e9834ba362249b859b0/1637777053765/RestaurantWebsite_Header_Desktop_1920x1062px.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.7);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;

const MainWords = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const MainWord = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  color: #fff;
  letter-spacing: 0.1em;
  font-weight: 400;
  border-bottom: 2px solid #fff;
  padding: 0 20px 10px 20px;
  text-shadow: 0 2px 16px rgba(0,0,0,0.5);
  margin-bottom: 10px;
`;

const Address = styled.div`
  color: #fff;
  font-size: 1.3rem;
  font-family: 'Lato', sans-serif;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);
`;

const Section = styled.div`
  background: rgba(255, 255, 255, 0.21);
  border-radius: 16px;
  padding: 32px 24px;
  margin: 24px 0;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
`;

const Home = () => {
  return (
    <Background>
      <Overlay />
      <Content>
        <MainWords>
          <MainWord>WATSON</MainWord>
        </MainWords>
        <Address>
          67 rue aziz bellal maarif, Casablanca, Maroc<br />
          info@watson.ma &nbsp;|&nbsp; +212 662-362121
        </Address>
        <Section>
          <h1>WATSON</h1>
          <p>
            Watson est votre partenaire de confiance pour l'équipement professionnel de cuisine, restauration, boulangerie, et plus encore. Découvrez nos produits vedettes, nos réalisations, et contactez-nous pour toute demande personnalisée.
          </p>
        </Section>
      </Content>
    </Background>
  );
};

export default Home; 