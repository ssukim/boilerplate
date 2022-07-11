import { useEffect, useState } from "react";
import useSWR from "swr";
import {
  addTodo,
  addTodoAsync,
  deleteTodo,
  initTodo,
  selectTodoList,
  TodoListState,
} from "./todoSlice";
import _uniqueId from "lodash/uniqueId";
import Input from "../common/input/Input";
import Button from "../common/button/Button";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Link from "next/link";

type Props = {
  initialTodo: TodoListState[];
};
export default function TodoList({ initialTodo }: Props) {
  // hooks
  const useSelectorTodo = useAppSelector(selectTodoList);
  const isLoading = useAppSelector((state) => state.todoReducer.status);
  const dispatch = useAppDispatch();

  // state
  const [title, setTitle] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onClickAdd = () => {
    dispatch(addTodo({ id: _uniqueId("todo_"), title }));
    setTitle("");
  };

  const onClickAddAsync = () => {
    dispatch(addTodoAsync({ id: _uniqueId("todo_"), title }) as any);
  };

  useEffect(() => {
    // initialTodo.forEach((item) => {
    //   dispatch(addTodo(item));
    // });
    dispatch(initTodo(initialTodo));
  }, []);

  return (
    <>
      <div>
        <Input onChange={(e) => onChange(e)} value={title} />
        <Button label="add" onClick={onClickAdd} />
        <Button
          label={isLoading === "loading" ? "loadubg..." : "addAsync"}
          disabled={isLoading === "loading"}
          onClick={onClickAddAsync}
        />
        <div>
          {useSelectorTodo.map((item) => (
            <div key={item.id}>
              <Link href={`/todo/${item.id}`}>
                <a>{item.title}</a>
              </Link>
              <Button
                label="delete"
                onClick={() => dispatch(deleteTodo(item.id))}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
