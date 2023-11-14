import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { COLORS } from '@/constants/colors';

type ImageTiltProps = {
  isActive: boolean;
  src: string;
  title: string;
  desc: string;
  link: string;
};

const StyledImageTilt = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};

  padding: 2rem;
  max-width: 33.75rem;

  p {
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    color: ${COLORS.primaryDark};
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    max-width: 58rem;
  }
`;

const StyledImage = styled.img`
  width: 100%;
`;

const ImageTilt: React.FC<ImageTiltProps> = ({
  isActive,
  src,
  title,
  desc,
  link,
}) => {
  return (
    <StyledImageTilt isActive={isActive}>
      <Tilt
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1}
      >
        <StyledImage src={src} alt={title} />
      </Tilt>
      <p>
        {desc}{' '}
        <a href={link} target='_blank'>
          Link to the project.
        </a>
      </p>
    </StyledImageTilt>
  );
};

export default ImageTilt;
