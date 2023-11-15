import { COLORS } from '@/constants/colors';
import React, { useState } from 'react';
import styled from 'styled-components';
import ImageTilt from './ImageTilt';
import ArrowLeft from './arrowLeft';
import ArrowRight from './arrowRight';
import { BREAKPOINTS } from '@/constants/breakpoints';

const StyledProjects = styled.div`
  color: ${COLORS.primary};
  position: relative;
  padding: 3rem 0;
`;
const StyledContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledArrowLeft = styled(ArrowLeft)`
  width: 3rem;
  position: absolute;
  top: 40%;
  display: none;

  @media (min-width: ${BREAKPOINTS.md}) {
    display: block;
  }
  left: 5%;
`;

const StyledArrowRight = styled(ArrowRight)`
  width: 3rem;
  position: absolute;
  top: 40%;
  display: none;

  @media (min-width: ${BREAKPOINTS.md}) {
    display: block;
  }
  right: 5%;
`;

const StyledCircleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const StyledCircle = styled.div<{ isActive: boolean }>`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  border: 1px solid ${COLORS.primary};
  background-color: ${({ isActive }) => isActive && COLORS.purple1};
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

  const handlePageClick = (index: number) => setActiveIndex(index);

  const handleNextClick = () => {
    if (activeIndex + 1 === projectsArr.length) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => (prev += 1));
    }
  };

  const handlePreviousClick = () => {
    if (activeIndex === 0) {
      setActiveIndex(projectsArr.length - 1);
    } else {
      setActiveIndex((prev) => (prev -= 1));
    }
  };
  return (
    <StyledProjects>
      <StyledContainer>
        <h2>Projects</h2>
        <StyledImageContainer>
          {projectsArr.map(({ src, title, desc, link }, index) => (
            <ImageTilt
              isActive={activeIndex === index}
              src={src}
              title={title}
              desc={desc}
              link={link}
            />
          ))}
        </StyledImageContainer>
        <StyledCircleContainer>
          {projectsArr.map((props, i) => (
            <StyledCircle
              key={i}
              onClick={() => handlePageClick(i)}
              isActive={i === activeIndex}
            />
          ))}
        </StyledCircleContainer>
        <StyledArrowLeft onClick={handlePreviousClick} />
        <StyledArrowRight onClick={handleNextClick} />
      </StyledContainer>
    </StyledProjects>
  );
};

export default Projects;
