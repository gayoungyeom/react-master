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
    Todo: [],
    Doing: [],
    Done: [],
  },
});
