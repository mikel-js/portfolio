import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const StyledProfile = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 72rem;

  > div {
    flex: 1;
  }
`;
const ImageContainer = styled.div``;
const StyledText = styled.div``;

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
        <h1>Hi! I am Michael</h1>
      </StyledText>
    </StyledProfile>
  );
};

export default Profile;
