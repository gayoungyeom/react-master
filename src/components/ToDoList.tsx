import { useForm } from 'react-hook-form';
import { atom, useRecoilState, useSetRecoilState } from 'recoil';

interface IForm {
  toDo: string;
}

interface ITodo {
  id: number;
  text: string;
  category: 'TODO' | 'DOING' | 'DONE';
}

const toDoState = atom<ITodo[]>({
  key: 'toDo',
  default: [],
});

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((prev) => [
      ...prev,
      { id: Date.now(), text: toDo, category: 'TODO' },
    ]);
    setValue('toDo', '');
  };

  return (
    <div>
      <h1>To Do List</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register('toDo', {
            required: 'Please write a TODO',
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
