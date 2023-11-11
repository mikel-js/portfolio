import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { COLORS } from '../constants/colors';

const StyledProfile = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 72rem;

  h3 {
    font-weight: 400;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  z-index: 2;
`;

const StyledText = styled.div`
  flex: 1.5;
  padding-top: 5rem;
  position: relative;
`;

const StyledInfo = styled.div``;

const StyledBox = styled.div`
  padding: 1rem;
  background-color: ${COLORS.black1};
  color: ${COLORS.purple1};
  position: absolute;
  left: -15rem;
  padding-left: 15rem;
`;

const StyledName = styled.span`
  color: ${COLORS.secondary};
`;
const StyledUX = styled.span`
  color: ${COLORS.primaryDark};
  font-size: 2rem;
`;

const Profile = () => {
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
          <h1>
            Hi! I am <StyledName>Michael</StyledName>
          </h1>
          <h3>
            I am a software engineer,
            <br /> with more than 3 years of
            <br />
            professional experience.
          </h3>
        </StyledInfo>
        <StyledBox>
          <h3>
            I help create seamless and
            <br />
            <StyledUX>excellent user experience</StyledUX>
            <br />
            by crafting elegant code.
          </h3>
        </StyledBox>
      </StyledText>
    </StyledProfile>
  );
};

export default Profile;
