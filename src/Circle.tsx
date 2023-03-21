import { useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 5px solid ${(props) => props.borderColor};
  border-radius: 100px;
`;

function Circle({ bgColor, borderColor, text = 'Default Text' }: CircleProps) {
  const [counter, setCounter] = useState<number | string>(0);

  //no error
  //   setCounter(2);
  //   setCounter('2');

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
