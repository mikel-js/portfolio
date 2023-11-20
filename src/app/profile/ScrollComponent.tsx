import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';

const Container = styled.div``;

type FadeDirection =
  | 'bottom-left'
  | 'bottom-right'
  | 'down'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'up';

interface RevealComponentProps {
  direction?: FadeDirection;
  delay?: number;
  children: React.ReactNode;
}

const RevealComponent: React.FC<RevealComponentProps> = ({
  direction = 'left',
  delay = 500,
  children,
}) => {
  return (
    <Container>
      <Fade direction={direction} delay={delay} triggerOnce>
        {children}
      </Fade>
    </Container>
  );
};

export default RevealComponent;
