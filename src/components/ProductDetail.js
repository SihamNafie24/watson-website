import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { products } from '../data/products';

const Container = styled.div`
  max-width: 1100px;
  margin: 40px auto;
  background: #0e2233;
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
  gap: 40px;
`;

const ImageSection = styled.div`
  flex: 1 1 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImg = styled.img`
  max-width: 400px;
  width: 100%;
  border-radius: 16px;
  background: #fff;
`;

const InfoSection = styled.div`
  flex: 1 1 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.2em;
  margin-bottom: 10px;
  color: #fff;
`;

const Price = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  margin: 20px 0 10px 0;
  color: #00ff99;
`;

const OldPrice = styled.div`
  font-size: 1.1em;
  color: #aaa;
  text-decoration: line-through;
`;

const PaymentInfo = styled.div`
  color: #00ff99;
  font-size: 1em;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  margin: 20px 0;
  padding-left: 20px;
  color: #b2e6ff;
`;

const Feature = styled.li`
  margin-bottom: 6px;
`;

const QuantityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0 10px 0;
`;

const QuantityButton = styled.button`
  background: #00ff99;
  color: #0e2233;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.2em;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;
  &:hover { background: #00cc77; }
`;

const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  font-size: 1.1em;
  border: 1px solid #00ff99;
  border-radius: 8px;
  background: #0e2233;
  color: #fff;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 20px;
  margin: 25px 0 15px 0;
`;

const BuyButton = styled.button`
  background: #00ff99;
  color: #0e2233;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #00cc77; }
`;

const StoreButton = styled.button`
  background: #0e2233;
  color: #00ff99;
  border: 2px solid #00ff99;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #00ff99; color: #0e2233; }
`;

const ZipRow = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ZipInput = styled.input`
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid #00ff99;
  background: #0e2233;
  color: #fff;
  font-size: 1em;
`;

const SearchButton = styled.button`
  background: #00ff99;
  color: #0e2233;
  border: none;
  border-radius: 8px;
  padding: 10px 22px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #00cc77; }
`;

const DescriptionSection = styled.div`
  margin-top: 40px;
  background: #fff;
  color: #0e2233;
  border-radius: 16px;
  padding: 30px;
`;

const DescriptionTitle = styled.h2`
  color: #00cc77;
  margin-bottom: 10px;
`;

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(product?.quantity || 1);
  const [zip, setZip] = useState("");

  if (!product) return <Container>Produit introuvable.</Container>;

  const handleQuantity = (delta) => {
    setQuantity(q => Math.max(1, q + delta));
  };

  return (
    <>
      <Container>
        <ImageSection>
          <ProductImg src={product.image} alt={product.title} />
        </ImageSection>
        <InfoSection>
          <div style={{ marginBottom: 8, color: '#00ff99', fontWeight: 500 }}>Vendu et livré par Watson</div>
          <Title>{product.title}</Title>
          <OldPrice>{product.price ? `€${(product.price * 1.15).toFixed(2)}` : null}</OldPrice>
          <Price>€ {product.price?.toFixed(2)}</Price>
          <PaymentInfo>
            {product.payment ? `${product.payment.installments}x de €${product.payment.perInstallment.toFixed(2)} par carte` : null}
          </PaymentInfo>
          <FeatureList>
            {product.features?.map((f, i) => <Feature key={i}>{f}</Feature>)}
          </FeatureList>
          <QuantityRow>
            <span>Quantité :</span>
            <QuantityButton onClick={() => handleQuantity(-1)}>-</QuantityButton>
            <QuantityInput type="number" value={quantity} min={1} readOnly />
            <QuantityButton onClick={() => handleQuantity(1)}>+</QuantityButton>
          </QuantityRow>
          <ButtonRow>
            <BuyButton>Acheter</BuyButton>
            <StoreButton>Retirer en magasin</StoreButton>
          </ButtonRow>
          <ZipRow>
            <span>Entrez votre code postal :</span>
            <ZipInput type="text" placeholder="00000" value={zip} onChange={e => setZip(e.target.value)} />
            <SearchButton>Rechercher</SearchButton>
          </ZipRow>
        </InfoSection>
      </Container>
      <DescriptionSection>
        <DescriptionTitle>Description</DescriptionTitle>
        <div>{product.description}</div>
      </DescriptionSection>
    </>
  );
};

export default ProductDetail; 