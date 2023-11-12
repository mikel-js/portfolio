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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledContent = styled.div`
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
  animation: ${fadeInOut} 2s infinite forwards;

  h2 {
    font-size: 5rem;
  }
`;

const StyledSup = styled.span`
  vertical-align: super;
  font-size: 2rem;
  position: relative;
  top: -0.5rem;
`;

const Hero = () => {
  const texts = [
    <h2>
      E<StyledSmallText>xcellence</StyledSmallText>
    </h2>,
    <h2>
      E<StyledSmallText>nthusiasm</StyledSmallText>
    </h2>,
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [nameIsVisible, setNameIsVisible] = useState(false);
  const [textArr, setTextArr] = useState([
    <h2>
      E = MC<StyledSup>2</StyledSup>
    </h2>,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setNameIsVisible(true);
      setTextArr(texts);
    }, 2000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledHero>
      <StyledFadingTextContainer>
        <StyledFadingText>{textArr[currentTextIndex]}</StyledFadingText>
      </StyledFadingTextContainer>
      {nameIsVisible && (
        <StyledContent>
          <h1>
            M<StyledSmallText>ichael </StyledSmallText>C
            <StyledSmallText>astro</StyledSmallText>
            <StyledSup>2</StyledSup>
          </h1>
          <h2>Welcome to my Portfolio Site!</h2>
          <h3>Excited to see you here</h3>
          {/* <StyledIcons>
            
          </StyledIcons> */}
        </StyledContent>
      )}
    </StyledHero>
  );
};

export default Hero;
