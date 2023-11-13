import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

type ImageTiltProps = {
  src: string;
  title: string;
  desc: string;
};

const StyledImageTilt = styled.div`
  padding: 2rem;
  max-width: 33.75rem;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const ImageTilt: React.FC<ImageTiltProps> = ({ src, title, desc }) => {
  return (
    <StyledImageTilt>
      <Tilt
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1}
      >
        <StyledImage src={src} alt={title} />
        <h1>{title}</h1>
        <h2>{desc}</h2>
      </Tilt>
    </StyledImageTilt>
  );
};

export default ImageTilt;
