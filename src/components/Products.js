import React, { useState } from 'react';
import styled from 'styled-components';
import { products } from '../data/products';
import { useNavigate } from 'react-router-dom';

const ProductsContainer = styled.div`
  padding: 40px 20px;
  max-width: 1400px;
  margin: 0 auto;
  background: #f8f9fa;
`;

const PageTitle = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
  font-size: 2.8em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  padding: 20px 0;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  height: 280px;
  width: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProductInfo = styled.div`
  padding: 25px;
`;

const ProductTitle = styled.h3`
  color: #2c3e50;
  margin: 0 0 15px 0;
  font-size: 1.5em;
  font-weight: 600;
`;

const ProductDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 1em;
`;

const ProductCategory = styled.span`
  display: inline-block;
  background-color: #e8f4fd;
  color: #3498db;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85em;
  font-weight: 500;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProductFeatures = styled.div`
  margin: 15px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const FeatureTag = styled.span`
  background-color: #f0f7ff;
  color: #2980b9;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.8em;
  border: 1px solid #e1f0ff;
`;

const ProductButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  cursor: pointer;
  width: 100%;
  font-size: 1em;
  font-weight: 500;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;

const SearchAndFilterContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto 40px;
  padding: 25px;
  background: white;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const SearchInput = styled.input`
  padding: 12px 20px;
  border: 2px solid #e1e1e1;
  border-radius: 25px;
  font-size: 1em;
  flex: 1;
  min-width: 250px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }
`;

const FilterSelect = styled.select`
  padding: 12px 20px;
  border: 2px solid #e1e1e1;
  border-radius: 25px;
  font-size: 1em;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;

  &:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }
`;

const SortSelect = styled.select`
  padding: 12px 20px;
  border: 2px solid #e1e1e1;
  border-radius: 25px;
  font-size: 1em;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 180px;

  &:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }
`;

const FeaturedSection = styled.div`
  margin-bottom: 60px;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const FeaturedTitle = styled.h2`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
  font-size: 2.2em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  padding: 20px 0;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 1.2em;
`;

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'cuisine', name: 'Cuisine Professionnelle' },
    { id: 'restauration', name: 'Restauration Rapide' },
    { id: 'snacking', name: 'Snacking' },
    { id: 'hotellerie', name: 'Hôtellerie' },
    { id: 'boulangerie', name: 'Boulangerie' },
    { id: 'collective', name: 'Cuisine Collective' },
    { id: 'bar', name: 'Bar' },
    { id: 'stockage', name: 'Stockage' },
    { id: 'nettoyage', name: 'Nettoyage' },
    { id: 'specialise', name: 'Spécialisé' }
  ];

  const featuredProducts = products.slice(0, 3);

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
                            product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  return (
    <ProductsContainer>
      <PageTitle>Nos Produits</PageTitle>
      
      <FeaturedSection>
        <FeaturedTitle>Produits Vedettes</FeaturedTitle>
        <FeaturedGrid>
          {featuredProducts.map(product => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductInfo>
                <ProductCategory>{categories.find(cat => cat.id === product.category)?.name}</ProductCategory>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductFeatures>
                  {product.features.map((feature, index) => (
                    <FeatureTag key={index}>{feature}</FeatureTag>
                  ))}
                </ProductFeatures>
                <ProductButton onClick={() => navigate(`/produit/${product.id}`)}>En savoir plus</ProductButton>
              </ProductInfo>
            </ProductCard>
          ))}
        </FeaturedGrid>
      </FeaturedSection>

      <SearchAndFilterContainer>
        <SearchInput
          type="text"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterSelect
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </FilterSelect>
        <SortSelect
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Trier par nom</option>
        </SortSelect>
      </SearchAndFilterContainer>

      <ProductGrid>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductInfo>
                <ProductCategory>{categories.find(cat => cat.id === product.category)?.name}</ProductCategory>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductFeatures>
                  {product.features.map((feature, index) => (
                    <FeatureTag key={index}>{feature}</FeatureTag>
                  ))}
                </ProductFeatures>
                <ProductButton onClick={() => navigate(`/produit/${product.id}`)}>En savoir plus</ProductButton>
              </ProductInfo>
            </ProductCard>
          ))
        ) : (
          <NoResults>
            Aucun produit ne correspond à votre recherche.
          </NoResults>
        )}
      </ProductGrid>
    </ProductsContainer>
  );
};

export default Products; 