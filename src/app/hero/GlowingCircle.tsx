import { BREAKPOINTS } from '@/constants/breakpoints';
import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
  animation: ${animate} 10s linear infinite;
  transform: translateZ(-10px) scale(2);

  &:before {
    content: '';
    width: 40rem;
    height: 40rem;
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
    width: 40rem;
    height: 40rem;
    position: absolute;
    top:0
    left:0
    right:0
    bottom:0
    background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
    border-radius: 50%;
    z-index: 1;
    filter: blur(30px);
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    width: 70rem;
    height: 70rem;
    animation: ${animate} 20s linear infinite;
    &:before,
    &:after {
      width: 70rem;
      height: 70rem;
    }
  }
`;

const GlowingCircle = () => {
  return (
    <StyledCircleContainer>
      <StyledCircle />
    </StyledCircleContainer>
  );
};

export default GlowingCircle;
