import { COLORS } from '@/constants/colors';
import React, { useState } from 'react';
import styled from 'styled-components';
import ImageTilt from './ImageTilt';

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledProjects = styled.div`
  background-color: ${COLORS.purple3};
  color: ${COLORS.primaryDark};
`;

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const projectsArr = [
    {
      src: '/assets/trivia.png',
      title: 'Triviathlon',
      desc: 'This project leveraged the Open Trivia Database API (https://opentdb.com/) to fetch trivia questions dynamically. Made using react, TypeScript and Styled components.',
      link: 'https://triviathlon.netlify.app/',
    },
    {
      src: '/assets/cheesy.jpg',
      title: 'Jokes',
      desc: 'A page with not/funny jokes. Made with React and deployed using AWS amplify.',
      link: 'https://master.d3sqozxqtnz8cc.amplifyapp.com/',
    },
    {
      src: '/assets/guess.jpg',
      title: 'Guessing game',
      desc: 'One of my first projects. A simple guessing game and straighforward UI',
      link: 'https://mikelgame.netlify.app/',
    },
  ];
  return (
    <StyledProjects>
      <h2>Projects</h2>
      <StyledImageContainer>
        {projectsArr.map(({ src, title, desc, link }, index) => (
          <ImageTilt
            isActive={activeIndex === index}
            key={title}
            src={src}
            title={title}
            desc={desc}
            link={link}
          />
        ))}
      </StyledImageContainer>
    </StyledProjects>
  );
};

export default Projects;
