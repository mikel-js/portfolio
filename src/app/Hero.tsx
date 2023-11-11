import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  position: relative;
`;
const StyledText = styled.div`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 7rem; /* Starting font size */
  animation: fadeInOut 4s infinite;

  @keyframes fadeInOut {
    0%,
    100% {
      opacity: 0;
      font-size: 7rem;
    }
    50% {
      opacity: 1;
      font-size: 5rem;
    }
  }
`;

const YourComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledHero>
      <h1>{isVisible && <StyledText>E = MC2</StyledText>}</h1>
    </StyledHero>
  );
};

export default YourComponent;
