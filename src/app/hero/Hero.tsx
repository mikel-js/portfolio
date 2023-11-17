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
`;

const StyledContent = styled.div`
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
