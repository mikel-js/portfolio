import { COLORS } from '@/constants/colors';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const textFlicker = keyframes`
  0%, 8%, 12%, 70%, 100% { opacity: 0.1; }
  2%, 9%, 20%, 30%, 77% { opacity: 1; }
  25% { opacity: 0.3; }
`;

const StyledGlowingComponent = styled.div`
  position: relative;
  color: ${COLORS.purple4};
  cursor: pointer;
  padding: 0.5rem 3rem;
  background: none;
  perspective: 2em;
  font-size: 2em;
  font-weight: 400;
  letter-spacing: 1em;

  &:hover {
    animation: none;
  }
`;

const GlowingText = styled.span`
  float: left;
  margin-right: -0.8em;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em ${COLORS.purple4};
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
    background: ${COLORS.purple4};
    pointer-events: none;
  }
`;

const GlowingTextBefore = styled.div`
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -1rem;
  right: 0;
  opacity: 0.7;
  filter: blur(1em);
  transform: translateY(120%) rotateX(95deg) scale(1, 0.35);
  background: ${COLORS.purple4};
  pointer-events: none;
`;

const StyledSup = styled.span`
  vertical-align: super;
  font-size: 1rem;
  position: relative;
  top: -0.5rem;
`;

const GlowingComponent = () => (
  <StyledGlowingComponent>
    <GlowingText>
      E=MC<StyledSup>2</StyledSup>
    </GlowingText>
    <GlowingTextBefore />
  </StyledGlowingComponent>
);

export default GlowingComponent;
