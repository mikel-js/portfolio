import React from 'react';
import styled from 'styled-components';
import { Bounce } from 'react-awesome-reveal';

import Container from '../base/Container';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { COLORS } from '@/constants/colors';
import { iconArray } from './iconsArray';
import Copyright from './Copyright';

const StyledTechStacks = styled.div`
  color: ${COLORS.white};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const StyledSection = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledIcon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 50%;

  img {
    cursor: pointer;
    width: 3.75rem;
    height: 3.75rem;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.5);
    }

    @media (min-width: ${BREAKPOINTS.md}) {
      width: 5.25rem;
      height: 5.25rem;
    }
  }
`;

const TechStacks: React.FC = () => {
  return (
    <StyledTechStacks>
      <StyledContainer>
        <h2>My Tech Stacks</h2>
        <StyledSection>
          <Bounce cascade damping={0.05} direction='down' triggerOnce>
            {iconArray.map(({ name, src }) => (
              <StyledIconContainer key={name}>
                <StyledIcon key={name}>
                  <img alt={name} src={src} />
                </StyledIcon>
                <p>{name}</p>
              </StyledIconContainer>
            ))}
          </Bounce>
        </StyledSection>
      </StyledContainer>
      <Copyright />
    </StyledTechStacks>
  );
};

export default TechStacks;
