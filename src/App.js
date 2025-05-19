import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import Réalisations from './components/Réalisations';
import Blog from './components/Blog';

const Nav = styled.nav`
  background-color: #2c3e50;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #34495e;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 20px;
`;

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Nav>
          <NavContainer>
            <Logo to="/">WATSON</Logo>
            <NavLinks>
              <NavLink to="/">Accueil</NavLink>
              <NavLink to="/products">Produits</NavLink>
              <NavLink to="/realisations">Réalisations</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </NavLinks>
            <SocialLinks>
              <SocialLink href="https://web.facebook.com/maiviss.nobil" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/siham-nafie/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </SocialLink>
              <SocialLink href="https://x.com/SihamNafie" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </SocialLink>
            </SocialLinks>
          </NavContainer>
        </Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/produit/:id" element={<ProductDetail />} />
          <Route path="/realisations" element={<Réalisations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 