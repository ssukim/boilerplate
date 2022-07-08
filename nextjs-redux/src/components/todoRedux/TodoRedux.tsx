import { useEffect, useState } from "react";
import useSWR from "swr";
import {
  addTodo,
  addTodoAsync,
  deleteTodo,
  selectTodoList,
  TodoListState,
} from "./todoSlice";
import _uniqueId from "lodash/uniqueId";
import Input from "../common/input/Input";
import Button from "../common/button/Button";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

type Props = {
  initialTodo: TodoListState[];
};
export default function TodoRedux({ initialTodo }: Props) {
  // hooks
  const useSelectorTodo = useAppSelector(selectTodoList);
  const isLoading = useAppSelector((state) => state.todoReducer.status);
  const dispatch = useAppDispatch();

  // using useSWR
  // const { data, isValidating, error } = useSWR("/api/todo", fetcher);

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
    initialTodo.forEach((item) => {
      dispatch(addTodo(item));
    });
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
              {item.title}
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
