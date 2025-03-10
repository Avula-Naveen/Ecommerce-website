import React from 'react';
import styled from 'styled-components';

const CartLogo = () => {
  return (
    <StyledWrapper>
      <a className="codepen-button"><span className="span"><p className="p">Cart</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#000" className="cart">
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg></span></a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .codepen-button {
    font-family: monospace;
    font-weight: bolder;
    display: block;
    cursor: pointer;
    color: #000;
    margin: 0 auto;
    position: relative;
    text-decoration: none;
    font-weight: 600;
    border-radius: 6px;
    overflow: hidden;
    padding: 3px;
    width: 130px;
    isolation: isolate;
    transform: scale(0.85);
  }

  .codepen-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 420%;
    height: 120%;
    background: linear-gradient(
      115deg,
      #628fbc,
      hsl(0, 93%, 73%),
      #f032a7,
      #329af0,
      #f032a7
    );
    background-size: 25% 100%;
    animation: border-animation 0.75s linear infinite;
    animation-play-state: paused;
    translate: -5% 0%;
    transition: translate 0.25s ease-out;
  }

  .codepen-button:hover::before {
    animation-play-state: running;
    transition-duration: 0.75s;
    translate: 0% 0%;
  }

  @keyframes border-animation {
    to {
      transform: translateX(-25%);
    }
  }

  .codepen-button span {
    position: relative;
    display: block;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
    background: #fff;
    border-radius: 3px;
    height: 100%;
  }

  .codepen-button .span {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 10px;
  }

  .codepen-button .p {
    margin: 0;
  }`;

export default CartLogo;
