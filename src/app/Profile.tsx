import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { COLORS } from '../constants/colors';
import { BREAKPOINTS } from '../constants/breakpoints';
import ScrollRevealComponent from './ScrollComponent';

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  max-width: 72rem;
  position: relative;

  h3 {
    font-weight: 400;
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  z-index: 3;
`;

const StyledText = styled.div`
  flex: 1.5;
  width: 100%;
  padding-top: 0rem;
  position: relative;

  @media (min-width: ${BREAKPOINTS.md}) {
    padding-top: 5rem;
  }
`;

const StyledInfo = styled.div``;

const StyledBox = styled.div`
  padding: 1rem;
  background-color: ${COLORS.black1};
  color: ${COLORS.purple1};
  width: 100%;

  @media (min-width: ${BREAKPOINTS.md}) {
    position: absolute;
    left: -15rem;
    padding-left: 15rem;
    padding-right: 10rem;
  }
`;

const StyledName = styled.span`
  color: ${COLORS.secondary};
`;
const StyledUX = styled.span`
  color: ${COLORS.primaryDark};
  font-size: 2rem;
`;

const StyledLogo = styled.div`
  position: absolute;
  top: 3rem;
  left: -2rem;
  opacity: 0.3;

  @media (min-width: ${BREAKPOINTS.md}) {
    left: -9rem;
  }
`;
const StyledCircle = styled.div`
  position: absolute;
  top: 18rem;
  left: 2rem;
  height: 10rem;
  width: 10rem;
  background-color: ${COLORS.purple2};
  border-radius: 50%;

  @media (min-width: ${BREAKPOINTS.md}) {
    left: -6rem;
  }
`;

const Profile: React.FC = () => {
  return (
    <StyledProfile>
      <ImageContainer>
        <Image
          src='/assets/profile-pic.png'
          alt='profile-pic'
          width='407'
          height='613'
        />
      </ImageContainer>
      <StyledText>
        <StyledInfo>
          <ScrollRevealComponent>
            <h1>
              Hi! I am <StyledName>Michael</StyledName>
            </h1>
            <h3>
              I am a software engineer,
              <br /> with more than 3 years of
              <br />
              professional experience.
            </h3>
          </ScrollRevealComponent>
        </StyledInfo>
        <StyledBox>
          <ScrollRevealComponent direction='right'>
            <h3>
              I help create seamless and
              <br />
              <StyledUX>excellent user experience</StyledUX>
              <br />
              by crafting elegant code.
            </h3>
          </ScrollRevealComponent>
        </StyledBox>
      </StyledText>
      <StyledLogo>
        <Image
          alt='logo'
          width='300'
          height='300'
          src='/assets/logo-light.png'
        />
      </StyledLogo>
      <StyledCircle />
    </StyledProfile>
  );
};

export default Profile;
