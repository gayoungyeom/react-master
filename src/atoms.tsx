import { atom } from 'recoil';

interface toDoStateProps {
  [key: string]: string[];
}

export const toDoState = atom<toDoStateProps>({
  key: 'toDo',
  default: {
    to_do: ['a', 'b'],
    doing: ['c', 'd', 'e'],
    done: ['f'],
  },
});
