import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { COLORS } from '@/constants/colors';
import Container from '../base/Container';
import { iconArray } from './iconsArray';
import { Bounce } from 'react-awesome-reveal';
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
  grid-template-columns: 1fr 1fr 1fr;

  @media (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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
    width: 3.75rem;
    height: 3.75rem;

    @media (min-width: ${BREAKPOINTS.md}) {
      width: 5.25rem;
      height: 5.25rem;
    }
  }
`;

const TechStacks: React.FC = ({}) => {
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
