import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState } from './atoms';

import type { DropResult } from 'react-beautiful-dnd';

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

const DnDTest = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;

    setToDos((oldTodos) => {
      const copyToDos = [...oldTodos];
      copyToDos.splice(source.index, 1); //1. 이동 전 위치에서 아이템 제거
      copyToDos.splice(destination?.index, 0, draggableId); //2. 이동 후 위치에 아이템 추가
      return copyToDos;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {toDos.map((todo, index) => (
                  <Draggable key={todo} draggableId={todo} index={index}>
                    {(provided) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        {todo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default DnDTest;
