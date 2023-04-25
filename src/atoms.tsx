import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export type TodoType = {
  id: number;
  text: string;
};
interface toDoStateProps {
  [key: string]: TodoType[];
}

const { persistAtom } = recoilPersist({
  key: 'all-todo-persist',
  storage: localStorage,
});

export const toDoState = atom<toDoStateProps>({
  key: 'toDo',
  default: {
    Todo: [],
    Doing: [],
    Done: [],
  },
  effects_UNSTABLE: [persistAtom],
});
