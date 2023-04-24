import { atom } from 'recoil';

interface toDoStateProps {
  [key: string]: string[];
}

export const toDoState = atom<toDoStateProps>({
  key: 'toDo',
  default: {
    Todo: ['a', 'b'],
    Doing: ['c', 'd', 'e'],
    Done: ['f'],
  },
});
