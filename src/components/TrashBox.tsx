import { Droppable } from 'react-beautiful-dnd';
import trashIcon from '../assets/trash.png';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  margin-top: 30px;
  height: 60px;
  border-radius: 50px;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Area = styled.div<IAreaProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${(props) =>
    props.isDraggingOver
      ? '#F9F5EB'
      : props.isDraggingFromThis
      ? '#e8e4dc'
      : 'transparent'};
  transition: background-color 0.3s ease-in-out;
`;

const TrashIcon = styled.img`
  width: 25px;
`;

const TrashBox = () => {
  return (
    <Wrapper>
      <Droppable droppableId="trash">
        {(provided, snapshot) => (
          <Area
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
          >
            <TrashIcon src={trashIcon} alt="trash" />
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default TrashBox;
