import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { Fade } from 'react-awesome-reveal';
import { COLORS } from '@/constants/colors';
import GlowingComponent from './GlowingComponent';

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

const StyledBg = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const StyledHelsinki = styled.img`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
  transform: translateZ(-10px) scale(2);
`;
const StyledMoon = styled.img`
  position: absolute;
  top: 10rem;
  right: 20rem;
  width: 10rem;
  z-index: -1;
  transform: translateZ(-5px) scale(1);
  transform-origin-x: 100%;
`;

const animate = keyframes`
0%
{ transform: rotate(0deg);
filter:hue-rotate(0deg);
}
100%
{
 transform: rotate(360deg);
  filter:hue-rotate(360deg);
}
`;

const StyledCircleContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
  perspective-origin-x: 100%;
  transform: translateZ(-10px) scale(2);
  z-index: 1000;
`;

const StyledCircle = styled.div`
  position: absolute;
  left: 10rem;
  width: 70rem;
  height: 70rem;
  border-radius: 50%;
  background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
  animation: ${animate} 20s linear infinite;
  transform: translateZ(-10px) scale(2);

  &:before {
    content: '';
    width: 70rem;
    height: 70rem;
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    background: #000;
    border-radius: 50%;
    z-index: 1000;
  }
  &:after {
    content: '';
    width: 70rem;
    height: 70rem;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
    border-radius: 50%;
    z-index: 1;
    filter: blur(30px);
  }
`;

const StyledLaptop = styled.img`
  position: absolute;
  bottom: 5rem;
  right: 5rem;
  z-index: 2;
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
  const [textArr, setTextArr] = useState(texts);

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
      <StyledCircleContainer>
        <StyledCircle />
      </StyledCircleContainer>

      {/* <StyledHelsinki src='/assets/parallax/helsinki.png' alt='helsinki' />
      <StyledMoon src='/assets/parallax/moon.png' alt='moon' /> */}
      <StyledFadingTextContainer>
        <StyledFade cascade duration={2000}>
          {textArr[currentTextIndex]}
        </StyledFade>
      </StyledFadingTextContainer>
      <StyledContent>
        <h1>
          M<StyledSmallText>ichael </StyledSmallText>C
          <StyledSmallText>astro</StyledSmallText>
        </h1>
        <h2>Welcome to my Portfolio Site!</h2>
        <h3>Excited to see you here</h3>
        {/* <StyledLinks>
            {externalLinks.map(({ name, src, linkTo }) => (
              <StyledLink href={linkTo} target='_blank'>
                <Image src={src} alt={name} width='80' height='80' />
              </StyledLink>
            ))}
          </StyledLinks> */}
      </StyledContent>
      <GlowingComponent />
      <StyledLaptop src='assets/parallax/laptop1.png' />
    </StyledHero>
  );
};

export default Hero;
