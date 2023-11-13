import { COLORS } from '@/constants/colors';
import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

const options = {
  max: 10,
  perspective: 1000,
  scale: 1.05,
};

const StyledProjects = styled.div`
  background-color: ${COLORS.purple3};
  color: ${COLORS.primaryDark};
`;

const Projects: React.FC = () => {
  return (
    <StyledProjects>
      <h2>Recent Projects</h2>
      <div
        style={{
          height: '300px',
          width: '300px',
          backgroundColor: 'darkgreen',
        }}
      >
        <Tilt
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
          gyroscope={true}
        >
          <Image
            src='/assets/profile-pic.png'
            alt='project'
            width={400}
            height={400}
          />
        </Tilt>
      </div>
    </StyledProjects>
  );
};

export default Projects;
