import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  position: relative;
  padding: 7rem;
`;
const StyledText = styled.div`
  h1 {
    opacity: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 7rem; /* Starting font size */
    animation: fadeInOut 4s;

    @keyframes fadeInOut {
      0%,
      100% {
        opacity: 1;
        font-size: 7rem;
      }
      50% {
        opacity: 1;
        font-size: 5rem;
      }
      100% {
        opacity: 1;
        font-size: 7rem;
      }
    }
  }
`;

const StyledText2 = styled.div`
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

const StyledSup = styled.span`
  vertical-align: super;
  font-size: 2rem;
  position: relative;
  top: -1.5rem;
`;

const Hero = () => {
  const texts = ['Excellence = Michael Castro'];
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledHero>
      <StyledText>
        <h1>
          E = MC<StyledSup>2</StyledSup>
        </h1>
      </StyledText>
    </StyledHero>
  );
};

export default Hero;