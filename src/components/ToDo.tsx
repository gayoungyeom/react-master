import { ITodo } from '../atoms';

function ToDo({ text }: ITodo) {
  return (
    <li>
      <span>{text}</span>
      <button>Doing</button>
      <button>TODO</button>
      <button>DONE</button>
    </li>
  );
}

export default ToDo;
