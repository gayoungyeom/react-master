import { MouseEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { Categories, ITodo, toDoState } from '../atoms';

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
      {category !== Categories.TODO && (
        <button name={Categories.TODO} onClick={onClick}>
          DOING
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          TODO
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          DONE
        </button>
      )}
    </li>
  );
}

export default ToDo;
