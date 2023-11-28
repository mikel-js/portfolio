import { COLORS } from '@/constants/colors';
import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectImage from './ProjectImage';
import ArrowLeft from './arrowLeft';
import ArrowRight from './arrowRight';
import { BREAKPOINTS } from '@/constants/breakpoints';
import Container from '../base/Container';
import useSwipe from '@/hooks/useSwipe';

const StyledProjects = styled.div`
  height: auto !important;
  width: 100vw;
  background-color: ${COLORS.white2};
  color: ${COLORS.white};
  position: relative;
  transform-style: preserve-3d;
`;

const StyledContainer = styled(Container)``;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledProjectText = styled.div`
  padding-top: 50px;
  text-align: center;
  color: orange;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    position: absolute;
    top: 0;
    left: calc(50% - 75px);
  }
`;

const StyledCircleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

const StyledCircle = styled.div<{ isActive: boolean }>`
  display: block;
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  border: 1px solid ${COLORS.white};
  background-color: ${({ isActive }) => isActive && COLORS.purple4};

  @media (min-width: ${BREAKPOINTS.md}) {
    height: 2rem;
    width: 2rem;
    display: none;
  }
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
    {
      src: '/assets/family.png',
      title: 'More coming soon!',
      desc: 'Enjoying my time as a first-time father and have not worked on personal projects as of late, but you can check my GitHub!',
      link: 'https://github.com/mikel-js',
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

  const swipeHandlers = useSwipe({
    onSwipeLeft: handleNextClick,
    onSwipeRight: handlePreviousClick,
  });
  return (
    <StyledProjects>
      <StyledContainer>
        <StyledProjectText>
          <h2>Projects</h2>
        </StyledProjectText>
        <StyledImageContainer>
          {projectsArr.map(({ src, title, desc, link }, index) => (
            <ProjectImage
              key={index}
              isActive={activeIndex === index}
              src={src}
              title={title}
              desc={desc}
              link={link}
              {...swipeHandlers}
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
      </StyledContainer>
    </StyledProjects>
  );
};

export default Projects;
