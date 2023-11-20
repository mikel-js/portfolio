import React from 'react';
import styled from 'styled-components';
import Container from '../base/Container';
import Image from 'next/image';
import { COLORS } from '@/constants/colors';

const StyledCopyright = styled.div``;
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: ${COLORS.white};
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
            <Image alt={name} src={src} width='100' height='100' />
          </a>
        ))}

        <p>Michael Castro</p>
      </StyledContainer>
    </StyledCopyright>
  );
};

export default Copyright;
