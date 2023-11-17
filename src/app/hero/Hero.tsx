import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { Fade } from 'react-awesome-reveal';

const StyledHero = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: url('assets/parallax/night.jpg') no-repeat center center fixed;
  background-size: cover;
  transform-style: preserve-3d;
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
  padding-top: 1rem;
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

const StyledSup = styled.span`
  vertical-align: super;
  font-size: 2rem;
  position: relative;
  top: -0.5rem;
`;

const StyledLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
const StyledLink = styled.a``;

const StyledHelsinki = styled.img`
  position: absolute;
  height: 100vh;
  width: 100vw;
  bottom: 0;
  object-fit: cover;
  transform-styled: preserve-3d;
  transform: translateZ(-0.75rem) scale(2);
`;
const StyledMoon = styled.img`
  position: absolute;
  top: 10rem;
  right: 20rem;
  width: 10rem;
`;
const StyledPier = styled.img`
  position: absolute;
  bottom: 0;
  transform: translateZ(-0.3125rem) scale(1.3);
`;

const Hero: React.FC = () => {
  const texts = [
    <h2>
      E<StyledSmallText>xcellence</StyledSmallText>
    </h2>,
    <h2>
      E<StyledSmallText>nthusiasm</StyledSmallText>
    </h2>,
    <h2>
      E<StyledSmallText>ffiency</StyledSmallText>
    </h2>,
    <h2>
      E<StyledSmallText>xpertise</StyledSmallText>
    </h2>,
    <h2>
      E<StyledSmallText>agerness to Learn</StyledSmallText>
    </h2>,
    <h2>
      E<StyledSmallText>ffective Communicator</StyledSmallText>
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

  const externalLinks = [
    {
      name: 'LinkedIn',
      src: '/assets/icon-linkedin.svg',
      linkTo: 'https://www.linkedin.com/in/michael-castro-1331bb89/',
    },
    {
      name: 'GitHub',
      src: '/assets/icon-github.svg',
      linkTo: 'https://github.com/mikel-js',
    },
  ];

  return (
    <StyledHero>
      <StyledHelsinki src='/assets/parallax/helsinki.png' alt='helsinki' />
      <StyledMoon src='/assets/parallax/moon.png' alt='moon' />
      <StyledPier src='/assets/parallax/pier.png' alt='pier' />
      <StyledFadingTextContainer>
        <StyledFade cascade duration={2000}>
          {textArr[currentTextIndex]}
        </StyledFade>
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
          <StyledLinks>
            {externalLinks.map(({ name, src, linkTo }) => (
              <StyledLink href={linkTo} target='_blank'>
                <Image src={src} alt={name} width='80' height='80' />
              </StyledLink>
            ))}
          </StyledLinks>
        </StyledContent>
      )}
    </StyledHero>
  );
};

export default Hero;
