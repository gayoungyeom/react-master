import { Droppable } from 'react-beautiful-dnd';
import DraggableCard from './DraggableCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface BoardProps {
  toDos: string[];
  boardId: string;
}

const Board = ({ toDos, boardId }: BoardProps) => {
  return (
    <Droppable droppableId={boardId}>
      {(provided) => (
        <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
          <Title>{boardId}</Title>
          {toDos.map((todo, index) => (
            <DraggableCard key={todo} todo={todo} index={index} />
          ))}
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
};

export default Board;
