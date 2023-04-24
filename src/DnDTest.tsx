import { DragDropContext } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { toDoState } from './atoms';
import Board from './components/Board';
import styled from 'styled-components';

import type { DropResult } from 'react-beautiful-dnd';

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const DnDTest = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;

    // setToDos((oldTodos) => {
    //   const copyToDos = [...oldTodos];
    //   copyToDos.splice(source.index, 1); //1. 이동 전 위치에서 아이템 제거
    //   copyToDos.splice(destination?.index, 0, draggableId); //2. 이동 후 위치에 아이템 추가
    //   return copyToDos;
    // });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default DnDTest;
