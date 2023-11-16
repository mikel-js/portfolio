import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { COLORS } from '@/constants/colors';
import Container from '../base/Container';
import { iconArray } from './iconsArray';
import Image from 'next/image';

const StyledTechStacks = styled.div``;

const StyledContainer = styled(Container)`
  display: flex;
`;

const StyledIcon = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 6.25rem;
  height: 6.25rem;
`;

const TechStacks: React.FC = ({}) => {
  return (
    <StyledTechStacks>
      <StyledContainer>
        {iconArray.map(({ name, src }) => (
          <>
            <StyledIcon key={name}>
              <Image alt={name} src={src} width='80' height='80' />
            </StyledIcon>
            <p>{name}</p>
          </>
        ))}
      </StyledContainer>
    </StyledTechStacks>
  );
};

export default TechStacks;
