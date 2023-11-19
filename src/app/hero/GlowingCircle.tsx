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

const StyledCircle = styled.div`
  position: absolute;
  left: 10rem;
  width: 70rem;
  height: 70rem;
  border-radius: 50%;
  background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
  animation: ${animate} 20s linear infinite;
  transform: translateZ(-10px) scale(2);
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

const GlowingCircle = () => {
  return <StyledCircle />;
};

export default GlowingCircle;
