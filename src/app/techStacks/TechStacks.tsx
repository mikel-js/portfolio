import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { COLORS } from '@/constants/colors';
import Container from '../base/Container';

const StyledTechStacks = styled.div``;

const StyledContainer = styled(Container)``;

const TechStacks: React.FC = ({}) => {
  return (
    <StyledTechStacks>
      <StyledContainer>test</StyledContainer>
    </StyledTechStacks>
  );
};

export default TechStacks;
