import { useForm } from 'react-hook-form';

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();

  const onValid = (data: any) => {
    console.log(data);
  };

  console.log(formState.errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register('email', { required: true })} placeholder="email" />
        <input
          {...register('firstName', { required: true })}
          placeholder="firstName"
        />
        <input
          {...register('lastName', { required: true })}
          placeholder="lastName"
        />
        <input
          {...register('username', { required: true, maxLength: 10 })}
          placeholder="username"
        />
        <input
          {...register('password', { required: true, minLength: 5 })}
          placeholder="password"
        />
        <input
          {...register('password1', {
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Your password is too short.',
            },
          })}
          placeholder="password1"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
