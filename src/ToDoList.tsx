import { ChangeEvent, FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <div>
      <form>
        <input {...register('email')} placeholder="email" />
        <input {...register('firstName')} placeholder="firstName" />
        <input {...register('lastName')} placeholder="lastName" />
        <input {...register('username')} placeholder="username" />
        <input {...register('password')} placeholder="password" />
        <input {...register('password1')} placeholder="password1" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
