import { atom } from 'recoil';

export type TodoType = {
  id: number;
  text: string;
};
interface toDoStateProps {
  [key: string]: TodoType[];
}

export const toDoState = atom<toDoStateProps>({
  key: 'toDo',
  default: {
    Todo: [{ id: 1, text: 'hello' }],
    Doing: [],
    Done: [],
  },
});
