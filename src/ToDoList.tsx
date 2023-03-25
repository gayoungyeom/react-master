import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Error = styled.span`
  color: red;
`;
interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();

  const onValid = (data: IForm) => {
    //API로 검증해야 하는 validtion (submit 눌렀을 때 검증)
    if (data.password !== data.password1) {
      setError(
        'password1',
        { message: 'Password are not the same.' },
        { shouldFocus: true }
      );
    }

    setError('extraError', { message: 'Server offline.' });
  };

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register('email', {
            required: 'Password is required.',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: 'Only naver.com emails allowed',
            },
          })}
          placeholder="email"
        />
        <Error>{errors?.email?.message}</Error>
        <input
          {...register('firstName', { required: 'Password is required.' })}
          placeholder="firstName"
        />
        <Error>{errors?.firstName?.message}</Error>
        <input
          {...register('lastName', { required: 'Password is required.' })}
          placeholder="lastName"
        />
        <Error>{errors?.lastName?.message}</Error>
        <input
          {...register('username', {
            required: 'Password is required.',
            maxLength: {
              value: 10,
              message: 'Your password is too long.',
            },
          })}
          placeholder="username"
        />
        <Error>{errors?.username?.message}</Error>
        <input
          {...register('password', {
            required: 'Password is required.',
            minLength: {
              value: 5,
              message: 'Your password is too short.',
            },
          })}
          placeholder="password"
        />
        <Error>{errors?.password?.message}</Error>
        <input
          {...register('password1', {
            required: 'Password is required.',
            minLength: {
              value: 5,
              message: 'Your password is too short.',
            },
          })}
          placeholder="password1"
        />
        <Error>{errors?.password1?.message}</Error>
        <button>Add</button>
        <Error>{errors?.extraError?.message}</Error>
      </form>
    </div>
  );
}

export default ToDoList;
