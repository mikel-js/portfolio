import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
    font-size: 2em;
  }
  50% {
    opacity: 1;
    font-size: 3em;
  }
`;

const StyledHero = styled.div`
  padding: 7rem;
  height: 100vh;
`;
const StyledText = styled.div`
  h1 {
    opacity: 1;
    font-size: 5.5rem; /* Starting font size */
    animation: fadeInOut 4s;

    @keyframes fadeInOut {
      0%,
      100% {
        opacity: 1;
        font-size: 5.5rem;
      }
      50% {
        opacity: 1;
        font-size: 3rem;
      }
      100% {
        opacity: 1;
        font-size: 5.5rem;
      }
    }
  }
`;

const StyledSmallText = styled.span`
  font-size: 3rem;
`;

const StyledText2Container = styled.div`
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledText2 = styled.div`
  font-size: 2em;
  opacity: 0;
  animation: ${fadeInOut} 4s infinite forwards;
`;

const StyledSup = styled.span`
  vertical-align: super;
  font-size: 2rem;
  position: relative;
  top: -1.5rem;
`;

const Hero = () => {
  const texts = ['Excellence', 'Enthusiasm', 'Experience', 'Energetic'];
  const [isVisible, setIsVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledHero>
      <StyledText>
        <h1>
          E = M<StyledSmallText>ichael</StyledSmallText>C
          <StyledSmallText>astro</StyledSmallText>
          <StyledSup>2</StyledSup>
        </h1>
      </StyledText>
      {isVisible && (
        <StyledText2Container>
          <StyledText2>{texts[currentTextIndex]}</StyledText2>
        </StyledText2Container>
      )}
    </StyledHero>
  );
};

export default Hero;
