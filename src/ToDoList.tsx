import { useForm } from 'react-hook-form';
import styled from 'styled-components';

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = (data: IForm) => {
    console.log(data);
    setValue('toDo', '');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register('toDo', {
            required: 'Please write a TODO',
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
