import React from 'react';
import styled from 'styled-components';
import Container from '../base/Container';
import { COLORS } from '@/constants/colors';
import { BREAKPOINTS } from '@/constants/breakpoints';

const StyledCopyright = styled.div`
  background-color: ${COLORS.white2};
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: ${COLORS.white};
`;

const StyledImg = styled.img`
  width: 3rem;
  height: 3rem;

  @media (min-width: ${BREAKPOINTS.md}) {
    width: 6.25rem;
    height: 6.25rem;
  }
`;

const Copyright: React.FC = () => {
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
    <StyledCopyright>
      <StyledContainer>
        <p>Copyright © 2023</p>
        {externalLinks.map(({ name, src, linkTo }) => (
          <a href={linkTo} key={name} target='_blank'>
            <StyledImg alt={name} src={src} />
          </a>
        ))}

        <p>Michael Castro</p>
      </StyledContainer>
    </StyledCopyright>
  );
};

export default Copyright;
