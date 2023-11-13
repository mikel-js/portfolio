import { COLORS } from '@/constants/colors';
import React from 'react';
import styled from 'styled-components';
import ImageTilt from './ImageTilt';

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledProjects = styled.div`
  background-color: ${COLORS.purple3};
  color: ${COLORS.primaryDark};
`;

const Projects: React.FC = () => {
  const projectsArr = [
    {
      src: '/assets/trivia.png',
      title: 'Triviathlon',
      desc: 'Trivia + Marathon',
    },
  ];
  return (
    <StyledProjects>
      <h2>Recent Projects</h2>
      <StyledImageContainer>
        {projectsArr.map(({ src, title, desc }) => (
          <ImageTilt src={src} title={title} desc={desc} />
        ))}
      </StyledImageContainer>
    </StyledProjects>
  );
};

export default Projects;
