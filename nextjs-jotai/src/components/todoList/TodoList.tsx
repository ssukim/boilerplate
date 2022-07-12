import { useEffect, useState } from "react";
import _uniqueId from "lodash/uniqueId";
import Input from "../common/input/Input";
import Button from "../common/button/Button";
import Link from "next/link";
import {
  addTodoListAtom,
  asyncAddTodoListAtom,
  deleteTodoListAtom,
  readTodoListAtom,
  todoListAtom,
  todoListLoadingAtom,
  TodoListProps,
} from "./store";
import { useAtomValue } from "jotai";
import uniqueId from "lodash/uniqueId";
import { useHydrateAtoms, useResetAtom, useUpdateAtom } from "jotai/utils";

type Props = {
  initialTodo: TodoListProps[];
};
export default function TodoList({ initialTodo }: Props) {
  useHydrateAtoms([[todoListAtom, initialTodo]] as const);

  // atom
  const todoList = useAtomValue(readTodoListAtom);
  const addTodoList = useUpdateAtom(addTodoListAtom);
  const deleteTodoList = useUpdateAtom(deleteTodoListAtom);
  const asyncAddTodoList = useUpdateAtom(asyncAddTodoListAtom);
  const resetTodoList = useResetAtom(todoListAtom);

  const isLoading = useAtomValue(todoListLoadingAtom);

  // state
  const [title, setTitle] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onClickAdd = () => {
    addTodoList({ id: uniqueId("todo_"), title });
    setTitle("");
  };

  const onClickDelete = (id: string) => {
    deleteTodoList(id);
  };

  const onClickAddAsync = () => {
    asyncAddTodoList({ id: uniqueId("todo_"), title });
    setTitle("");
  };

  return (
    <>
      <div>
        <Input onChange={(e) => onChange(e)} value={title} />
        <Button label="add" onClick={onClickAdd} />
        <Button
          label={isLoading ? "loading..." : "addAsync"}
          onClick={onClickAddAsync}
          disabled={isLoading}
        />
        <Button label="reset" onClick={resetTodoList} />
        <div>
          {todoList.map((item) => (
            <div key={item.id}>
              <Link href={`/todo/${item.id}`}>
                <a>{item.title}</a>
              </Link>
              <Button label="delete" onClick={() => onClickDelete(item.id)} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
