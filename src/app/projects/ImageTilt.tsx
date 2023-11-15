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
  max-width: 33.75rem;

  p {
    font-size: 0.7rem;
  }

  a {
    text-decoration: none;
    color: ${COLORS.primaryDark};
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    max-width: 58rem;

    p {
      font-size: 1.5rem;
    }
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 12.875rem;

  @media (min-width: ${BREAKPOINTS.sm}) {
    height: 22.875rem;
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    height: 32.875rem;
  }
`;

const StyledTextContainer = styled.div`
  height: 2rem;
  @media (min-width: ${BREAKPOINTS.lg}) {
    height: 5.4375rem;
  }
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
      <StyledTextContainer>
        <p>
          {desc}{' '}
          <a href={link} target='_blank'>
            Link to the project.
          </a>
        </p>
      </StyledTextContainer>
    </StyledImageTilt>
  );
};

export default ImageTilt;
