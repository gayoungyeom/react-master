import { MouseEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { ITodo, toDoState } from '../atoms';

function ToDo({ id, text, category }: ITodo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldTodo = oldToDos[targetIndex];
      const newTodo = { ...oldTodo, category: name as ITodo['category'] };
      return [
        ...oldToDos.slice(0, targetIndex),
        newTodo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== 'DOING' && (
        <button name="DOING" onClick={onClick}>
          DOING
        </button>
      )}
      {category !== 'TODO' && (
        <button name="TODO" onClick={onClick}>
          TODO
        </button>
      )}
      {category !== 'DONE' && (
        <button name="DONE" onClick={onClick}>
          DONE
        </button>
      )}
    </li>
  );
}

export default ToDo;
