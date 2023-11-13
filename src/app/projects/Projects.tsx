import { COLORS } from '@/constants/colors';
import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

const StyledImageContainer = styled.div`
  display: inline-flex;
  position: relative;
  h1 {
    position: absolute;
    top: 50%;
  }
`;

const StyledProjects = styled.div`
  background-color: ${COLORS.purple3};
  color: ${COLORS.primaryDark};
`;

const Projects: React.FC = () => {
  return (
    <StyledProjects>
      <h2>Recent Projects</h2>
      <StyledImageContainer>
        <Tilt
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1}
        >
          <Image
            src='/assets/profile-pic.png'
            alt='project'
            width={400}
            height={400}
          />
          <h1>TEST</h1>
        </Tilt>
      </StyledImageContainer>
    </StyledProjects>
  );
};

export default Projects;
