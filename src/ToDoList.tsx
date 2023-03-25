import { ChangeEvent, FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

function ToDoList() {
  // const {} = useForm();
  const [toDo, setTodo] = useState('');
  const [toDoError, setToDoError] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTodo(value);
    setToDoError('');
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (toDo.length < 10) {
      return setToDoError('TODO should be longer');
    }
    console.log('submit');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} />
        <button>Add</button>
        {toDoError}
      </form>
    </div>
  );
}

export default ToDoList;
