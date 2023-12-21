import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { BREAKPOINTS } from '../../constants/breakpoints';
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
  padding: 4rem 0;
  color: ${COLORS.white};

  h3 {
    font-weight: 400;
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
    align-items: flex-start;
    padding: 20rem 0 4rem 0;
  }
`;

const ImageContainer = styled.div`
  display: none;
  flex: 1;
  z-index: 3;
  padding: 0 2rem;

  @media (min-width: ${BREAKPOINTS.md}) {
    display: block;
  }
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
  }

  @media (min-width: ${BREAKPOINTS.xl}) {
    padding-right: 7rem;
  }
`;

const StyledName = styled.span`
  color: ${COLORS.purple6};
`;

const StyledUX = styled.span`
  color: ${COLORS.white};
  font-size: 2rem;
`;

const StyledLogo = styled.div`
  position: absolute;
  top: 3rem;
  left: -2rem;
  opacity: 0.3;

  img {
    max-width: 15.75rem;
    max-height: 15.75rem;
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    top: 23rem;
    left: -9rem;
    opacity: 0.5;
    img {
      max-width: 18.75rem;
      max-height: 18.75rem;
    }
  }
`;

const StyledCircle = styled.div`
  position: absolute;
  top: 18rem;
  left: 0;
  height: 10rem;
  width: 10rem;
  background-color: ${COLORS.purple1};
  border-radius: 50%;
  display: none;

  @media (min-width: ${BREAKPOINTS.md}) {
    top: 38rem;
    left: -3rem;
    height: 12rem;
    width: 12rem;
    display: block;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 0.6639477977161501;
`;

const Profile: React.FC = () => {
  return (
    <StyledProfile>
      <ImageContainer>
        <StyledImage src='/assets/profile-pic.png' alt='profile-pic' />
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
        <img alt='logo' src='/assets/logo-light.png' />
      </StyledLogo>
      <StyledCircle />
    </StyledProfile>
  );
};

export default Profile;
