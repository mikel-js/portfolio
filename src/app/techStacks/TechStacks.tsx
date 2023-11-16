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
  flex-wrap: wrap;
`;

const StyledIconContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const StyledIcon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 7.25rem;
  height: 7.25rem;
  background-color: black;
  border-radius: 50%;
`;

const TechStacks: React.FC = ({}) => {
  return (
    <StyledTechStacks>
      <StyledContainer>
        {iconArray.map(({ name, src }) => (
          <StyledIconContainer>
            <StyledIcon key={name}>
              <Image alt={name} src={src} width='60' height='60' />
            </StyledIcon>
            <p>{name}</p>
          </StyledIconContainer>
        ))}
      </StyledContainer>
    </StyledTechStacks>
  );
};

export default TechStacks;
