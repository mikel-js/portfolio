import React from 'react';
import styled, { keyframes } from 'styled-components';

const textFlicker = keyframes`
  0%, 8%, 12%, 70%, 100% { opacity: 0.1; }
  2%, 9%, 20%, 30%, 77% { opacity: 1; }
  25% { opacity: 0.3; }
`;

const GlowingButton = styled.div`
  position: relative;
  color: hsl(186 100% 69%);
  cursor: pointer;
  padding: 0.5rem 3rem;

  background: none;
  perspective: 2em;
  font-family: 'Raleway', sans-serif;
  font-size: 2em;
  font-weight: 400;
  letter-spacing: 1em;

  &:hover {
    color: rgba(0, 0, 0, 0.8);
    text-shadow: none;
    animation: none;
  }
`;

const GlowingText = styled.span`
  float: left;
  margin-right: -0.8em;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em hsl(186 100% 69%);
  animation: ${textFlicker} 3s linear infinite;

  &:hover {
    animation: none;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1rem;
    right: 0;
    opacity: 0.7;
    filter: blur(1em);
    transform: translateY(120%) rotateX(95deg) scale(1, 0.35);
    background: hsl(186 100% 69%);
    pointer-events: none;
  }
`;

const GlowingButtonBefore = styled.div`
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -1rem;
  right: 0;
  opacity: 0.7;
  filter: blur(1em);
  transform: translateY(120%) rotateX(95deg) scale(1, 0.35);
  background: hsl(186 100% 69%);
  pointer-events: none;
`;

const StyledSup = styled.span`
  vertical-align: super;
  font-size: 1rem;
  position: relative;
  top: -0.5rem;
`;

const GlowingBtn = () => (
  <GlowingButton>
    <GlowingText>
      E=MC<StyledSup>2</StyledSup>
    </GlowingText>
    <GlowingButtonBefore />
  </GlowingButton>
);

export default GlowingBtn;
