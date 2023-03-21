import styled, { keyframes } from 'styled-components';
import Circle from './Circle';

function App() {
  return (
    <div>
      <Circle bgColor="teal" borderColor="black" />
      <Circle bgColor="tomato" text="Im tomato" />
      <Circle bgColor="yellow" />
    </div>
  );
}

export default App;
