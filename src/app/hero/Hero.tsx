import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { Fade } from 'react-awesome-reveal';
import { COLORS } from '@/constants/colors';
import GlowingComponent from './GlowingComponent';
import GlowingCircle from './GlowingCircle';

const StyledHero = styled.div`
  background-color: none;
  color: ${COLORS.white};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transform-style: preserve-3d;
  perspective-origin-x: 100%;
  position: relative;

  h1,
  h2 {
    font-weight: 500;
  }
`;

const StyledContent = styled.div`
  position: relative;
  z-index: 2;
  h1 {
    font-size: 3rem;
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    h1 {
      font-size: 5rem;
    }
  }
`;

const StyledPurpleText = styled.span`
  color: ${COLORS.purple4};
`;

const StyledSmallText = styled.span`
  font-size: 3rem;
`;

const StyledFadingTextContainer = styled.div`
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const StyledFade = styled(Fade)`
  padding-top: 3rem;
  font-size: 2rem;
  min-height: 7.25rem;

  h2 {
    font-size: 3rem;
    margin: 0;
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    padding-top: 5rem;
    h2 {
      font-size: 5rem;
    }
  }
`;

const StyledLaptop = styled.img`
  display: none;
  margin-top: 5.5rem;
  z-index: 2;


  @media (min-width: ${BREAKPOINTS.lg}) {
    display: block;
    max-width: 15rem;
  }

  @media (min-width: ${BREAKPOINTS.xl}) { 
    max-width: 25rem;
  }

  @media (min-width: 87.5rem) { 
    position: absolute;
    bottom: 5rem;
    right: 5rem;  

  }

}`;

const texts = [
  <h2>
    <StyledPurpleText>E</StyledPurpleText>
    <StyledSmallText>xcellent</StyledSmallText>
  </h2>,
  <h2>
    <StyledPurpleText>E</StyledPurpleText>
    <StyledSmallText>nthusiastic</StyledSmallText>
  </h2>,
  <h2>
    <StyledPurpleText>E</StyledPurpleText>
    <StyledSmallText>fficient</StyledSmallText>
  </h2>,
  <h2>
    <StyledPurpleText>E</StyledPurpleText>
    <StyledSmallText>ager</StyledSmallText>
  </h2>,
  <h2>
    <StyledPurpleText>E</StyledPurpleText>
    <StyledSmallText>ffective</StyledSmallText>
  </h2>,
  <h2>
    <StyledPurpleText>E</StyledPurpleText>
    <StyledSmallText>nergetic</StyledSmallText>
  </h2>,
  <h2>
    <StyledPurpleText>E</StyledPurpleText>
    <StyledSmallText>asy-going</StyledSmallText>
  </h2>,
];

const profileText = (
  <>
    <h1>
      <StyledPurpleText>M</StyledPurpleText>
      <StyledSmallText>ichael </StyledSmallText>
      <StyledPurpleText>C</StyledPurpleText>
      <StyledSmallText>astro</StyledSmallText>
    </h1>
    <h2>Welcome to my Portfolio Site!</h2>
    <h3>Excited to see you here</h3>
  </>
);

const Hero: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledHero>
      <GlowingCircle />
      <StyledFadingTextContainer>
        <StyledFade cascade duration={2000}>
          {texts[currentTextIndex]}
        </StyledFade>
      </StyledFadingTextContainer>
      <StyledContent>{profileText}</StyledContent>
      <GlowingComponent />
      <StyledLaptop src='assets/laptop1.png' />
    </StyledHero>
  );
};

export default Hero;
