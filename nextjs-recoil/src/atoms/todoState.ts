import { atom, useRecoilState, useSetRecoilState } from 'recoil';

export type TodoListState = {
  id: string;
  text: string;
  isCompleted: boolean;
};

const initialState: TodoListState = {
  id: 'id',
  text: 'todo test',
  isCompleted: false,
};

export const todoListState = atom<TodoListState[]>({
  key: 'todoListState',
  default: [initialState],
});

export function useTodoListState() {
  return useRecoilState(todoListState);
}
