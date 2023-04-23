import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DnDTest = () => {
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              <Draggable draggableId="first" index={0}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                  >
                    Handling with All
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {(provided) => (
                  <li ref={provided.innerRef} {...provided.draggableProps}>
                    <span {...provided.dragHandleProps}>🔥</span>
                    Handling with fire-icon only
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default DnDTest;
