import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% {
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
    font-size: 5rem;
  }
`;

const StyledSmallText = styled.span`
  font-size: 3rem;
`;

const StyledFadingTextContainer = styled.div`
  align-items: center;
  justify-content: center;
`;

const StyledFadingText = styled.div`
  font-size: 2em;
  opacity: 0;
  animation: ${fadeInOut} 5s infinite forwards;

  h2 {
    font-size: 5rem;
  }
`;

const StyledSup = styled.span`
  vertical-align: super;
  font-size: 2rem;
  position: relative;
  top: -1.5rem;
`;

const Hero = () => {
  const texts = [
    <h2>
      E<StyledSmallText>xcellence</StyledSmallText>
    </h2>,
    <h2>
      E<StyledSmallText>nthusiasm</StyledSmallText>
    </h2>,
    <h2>
      E<StyledSmallText>xperience</StyledSmallText>
    </h2>,
    <h2>
      E<StyledSmallText>nergetic</StyledSmallText>
    </h2>,
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledHero>
      <StyledFadingTextContainer>
        <StyledFadingText>{texts[currentTextIndex]}</StyledFadingText>
      </StyledFadingTextContainer>
      <StyledText>
        <h1>
          M<StyledSmallText>ichael</StyledSmallText>C
          <StyledSmallText>astro</StyledSmallText>
          <StyledSup>2</StyledSup>
        </h1>
      </StyledText>
    </StyledHero>
  );
};

export default Hero;
