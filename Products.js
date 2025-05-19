import React, { useState } from 'react';
import styled from 'styled-components';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  loading: lazy;
`;

const Modal = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
`;

const AdditionalImages = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productData = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', image: 'https://via.placeholder.com/300/FF5733', additionalImages: ['https://via.placeholder.com/100/FF5733', 'https://via.placeholder.com/100/FF5733'] },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', image: 'https://via.placeholder.com/300/33FF57', additionalImages: ['https://via.placeholder.com/100/33FF57', 'https://via.placeholder.com/100/33FF57'] },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', image: 'https://via.placeholder.com/300/3357FF', additionalImages: ['https://via.placeholder.com/100/3357FF', 'https://via.placeholder.com/100/3357FF'] },
  ];

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h1>Our Products</h1>
      <ProductGrid>
        {productData.map(product => (
          <ProductCard key={product.id} onClick={() => handleCardClick(product)}>
            <ProductImage src={product.image} alt={product.name} loading="lazy" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </ProductCard>
        ))}
      </ProductGrid>
      {selectedProduct && (
        <Modal show={!!selectedProduct} onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <AdditionalImages>
              {selectedProduct.additionalImages.map((img, index) => (
                <img key={index} src={img} alt={`${selectedProduct.name} ${index + 1}`} style={{ width: '100px', borderRadius: '4px' }} />
              ))}
            </AdditionalImages>
            <button onClick={closeModal}>Close</button>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default Products;
