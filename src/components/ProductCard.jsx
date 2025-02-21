
import React from 'react';
import styled from 'styled-components';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import AddToCartLogo from './AddToCartLogo';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <StyledWrapper>
    <div className="card ">
      <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-2" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>

      <button
        className="mt-2 text-white px-4 py-2 rounded-lg w-full"
        onClick={() => addToCart(product)}
      >
        
        <AddToCartLogo/>
      </button>

    </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .card {
    box-sizing: border-box;
    width: 300px;
    height: 400px;
    background: rgba(217, 217, 217, 0.58);
    border: 1px solid white;
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    display: grid;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-weight: bolder;
    color: black;
  }

  .card:hover {
    border: 1px solid black;
    transform: scale(1.05);
  }

  .card:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }`;

export default ProductCard;
