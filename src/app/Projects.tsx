import { COLORS } from '@/constants/colors';
import React from 'react';
import styled from 'styled-components';

const StyledProjects = styled.div`
  background-color: ${COLORS.purple3};
`;

const Projects: React.FC = () => {
  return <StyledProjects>Projects</StyledProjects>;
};

export default Projects;
