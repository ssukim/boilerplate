import axios from "axios";
import { uniqueId } from "lodash";
import { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { fetcher } from "../../app/hooks";
import useTodoHook from "../../app/useTodoHook";
import Button from "../common/button/Button";
import Input from "../common/input/Input";
import { TodoListState } from "../todoRedux/todoSlice";
import TodoItemSwr from "./TodoItemSwr";

export default function TodoListSwr() {
  const { data, error, isValidating } = useTodoHook();
  console.log(
    "🚀 ~ file: TodoListSwr.tsx ~ line 18 ~ TodoListSwr ~ isValidating",
    isValidating
  );
  const { mutate } = useSWRConfig();

  // state
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState<TodoListState[]>([]);

  const onClickAdd = async () => {
    const res = await axios
      .post("/api/todo", { title })
      .then((res) => res.data)
      .catch((error) => {
        throw new Error(error);
      });

    mutate("/api/todo", data?.concat({ id: uniqueId("todo_"), title }), false);

    // mutate("/api/todo");
    setTitle("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <>
      <Input onChange={(e) => onChange(e)} value={title} />
      <Button label="add" onClick={onClickAdd} />
      {data?.map((item) => (
        <div key={item.id}>
          <TodoItemSwr item={item} />
          <Button label="delete" />
        </div>
      ))}
    </>
  );
}
