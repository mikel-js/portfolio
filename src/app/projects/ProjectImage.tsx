import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { COLORS } from '@/constants/colors';

type ProjectImageProps = {
  isActive: boolean;
  src: string;
  title: string;
  desc: string;
  link: string;
};

const StyledProjectImage = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  max-width: 33.75rem;
  text-align: center;
  scroll-snap-align: center;

  p,
  a {
    font-size: 1rem;
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    display: block;
    height: 100vh;
    padding-top: 20rem;
    max-width: 58rem;
    text-align: left;

    p,
    a {
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    min-height: 6rem;

    @media (min-width: ${BREAKPOINTS.lg}) {
      min-height: 5.4375rem;
    }
  }
`;

const StyledA = styled.a`
  background-color: ${COLORS.purple5};
  color: ${COLORS.white};
  padding: 0.5rem;
  border-radius: 0.5rem;
  text-decoration: none;

  &:hover {
    color: ${COLORS.purple5};
    background-color: ${COLORS.white};
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    padding: 1rem;
    border-radius: 0.875rem;
  }
`;

const ProjectImage: React.FC<ProjectImageProps> = ({
  isActive,
  src,
  title,
  desc,
  link,
}) => {
  return (
    <StyledProjectImage isActive={isActive}>
      <StyledImage src={src} alt={title} />
      <StyledTextContainer>
        <p>{desc}</p>
        <StyledA href={link} target='_blank'>
          Link to the project
        </StyledA>
      </StyledTextContainer>
    </StyledProjectImage>
  );
};

export default ProjectImage;
