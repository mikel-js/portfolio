import React from 'react';
import styled from 'styled-components';
import Container from '../base/Container';
import Image from 'next/image';

const StyledCopyright = styled.div``;
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Copyright: React.FC = () => {
  return (
    <StyledCopyright>
      <StyledContainer>
        <p>Copyright © 2023</p>
        <Image
          alt='logo'
          width='100'
          height='100'
          src='/assets/logo-light.png'
        />
        <p>Michael Castro</p>
      </StyledContainer>
    </StyledCopyright>
  );
};

export default Copyright;