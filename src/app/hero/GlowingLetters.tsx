import React from 'react';
import styled, { keyframes } from 'styled-components';

const flicker = keyframes`
  0% { opacity: 0.1; }
  2% { opacity: 1; }
  4% { opacity: 0.1; }
  8% { opacity: 1; }
  70% { opacity: 0.7; }
  100% { opacity: 1; }
`;

const faultyFlicker = keyframes`
  0%, 2% { opacity: 0.1; }
  4%, 19%, 21% { opacity: 0.5; }
  23% { opacity: 1; }
  80% { opacity: 0.5; }
  83% { opacity: 0.4; }
  87% { opacity: 1; }
`;

const textFlicker = keyframes`
  0%, 8%, 12%, 70%, 100% { opacity: 0.1; }
  2%, 9%, 20%, 30%, 77% { opacity: 1; }
  25% { opacity: 0.3; }
`;

const GlowingButton = styled.div`
  position: relative;
  color: hsl(186 100% 69%);
  cursor: pointer;
  padding: 0.35em 1em;
  border: 0.15em solid hsl(186 100% 69%);
  border-radius: 0.45em;
  background: none;
  perspective: 2em;
  font-family: 'Raleway', sans-serif;
  font-size: 2em;
  font-weight: 900;
  letter-spacing: 1em;
  overflow: hidden;

  &:hover {
    color: rgba(0, 0, 0, 0.8);

    animation: none;

    &:before {
      filter: blur(1.5em);
      opacity: 1;
      box-shadow: 0 0 2em 0.2em hsl(186 100% 69%);
    }

    &:after {
      opacity: 1;
    }
  }

  &:hover .glowing-txt {
    animation: none;
  }

  &:hover .faulty-letter {
    animation: none;

    opacity: 1;
  }
`;

const GlowingButtonAfter = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: -1;
  background-color: hsl(186 100% 69%);
  box-shadow: 0 0 2em 0.2em hsl(186 100% 69%);
  transition: opacity 100ms linear;

  &:hover {
    opacity: 1;
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
`;

const FaultyLetter = styled.span`
  opacity: 0.5;
  animation: ${faultyFlicker} 2s linear infinite;

  &:hover {
    animation: none;

    opacity: 1;
  }
`;

const GlowingBtn = () => (
  <GlowingButton>
    <GlowingText>
      C<FaultyLetter>L</FaultyLetter>ICK
    </GlowingText>
    <GlowingButtonAfter />
  </GlowingButton>
);

export default GlowingBtn;
