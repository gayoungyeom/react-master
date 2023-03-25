import { atom, selector } from 'recoil';

export interface ITodo {
  id: number;
  text: string;
  category: 'TODO' | 'DOING' | 'DONE';
}

export const toDoState = atom<ITodo[]>({
  key: 'toDo',
  default: [],
});

export const categoryState = atom({
  key: 'category',
  default: 'TODO',
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
