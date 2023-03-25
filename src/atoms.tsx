import { atom, selector } from 'recoil';

export enum Categories {
  'TODO' = 'TODO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}
export interface ITodo {
  id: number;
  text: string;
  category: Categories;
}

export const toDoState = atom<ITodo[]>({
  key: 'toDo',
  default: [],
});

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TODO,
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
