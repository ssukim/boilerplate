import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";
import { postTodoList } from "./api";

export interface TodoListProps {
  id: string;
  title: string;
}

const todoListDefaultState: TodoListProps[] = [];

export const todoListLoadingAtom = atom(false);

export const todoListAtom =
  atomWithReset<TodoListProps[]>(todoListDefaultState);
export const readTodoListAtom = atom((get) => get(todoListAtom));

export const addTodoListAtom = atom(
  null, // it's a convention to pass `null` for the first argument
  (get, set, update: TodoListProps) => {
    // `update` is any single value we receive for updating this atom
    set(todoListAtom, get(todoListAtom).concat(update));
  }
);

export const deleteTodoListAtom = atom(null, (get, set, id: string) => {
  set(
    todoListAtom,
    get(todoListAtom).filter((item) => item.id !== id)
  );
});

export const asyncAddTodoListAtom = atom(
  null,
  (get, set, update: TodoListProps) => {
    const fetch = async () => {
      try {
        set(todoListLoadingAtom, true);
        await postTodoList(update);
        set(todoListAtom, [update].concat(get(todoListAtom)));
      } catch (error) {
        console.error(error);
      } finally {
        set(todoListLoadingAtom, false);
      }
    };
    fetch();
  }
);
