import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const StyledProfile = styled.div``;

const Profile = () => {
  return (
    <StyledProfile>
      <Image src='/assets/pix.png' alt='profile-pic' width='407' height='613' />
    </StyledProfile>
  );
};

export default Profile;
