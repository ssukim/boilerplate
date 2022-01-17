import { atom, selector, useRecoilState } from 'recoil';

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

export const todoListFilterState = atom<string>({
  key: 'todoListFilterState',
  default: 'Show All',
});

export function useTodoListState() {
  return useRecoilState(todoListState);
}

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isCompleted);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isCompleted);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(
      (item) => item.isCompleted
    ).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
