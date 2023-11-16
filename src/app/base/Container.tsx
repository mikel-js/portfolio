import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  max-width: 72rem;
  padding: 0 2rem;
  margin: 0 auto;
`;

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children,
  ...rest
}: ContainerProps) => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};

export default Container;
