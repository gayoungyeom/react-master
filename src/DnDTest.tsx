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

  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, source, draggableId } = info;
    if (!destination) return;

    if (destination.droppableId === source.droppableId) {
      //same board movement
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        boardCopy.splice(source.index, 1); //1. 이동 전 위치에서 아이템 제거
        boardCopy.splice(destination?.index, 0, draggableId); //2. 이동 후 위치에 아이템 추가
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    } else {
      //cross board movement
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        sourceBoard.splice(source.index, 1);

        const destinBoard = [...allBoards[destination.droppableId]];
        destinBoard.splice(destination?.index, 0, draggableId);

        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinBoard,
        };
      });
    }
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
