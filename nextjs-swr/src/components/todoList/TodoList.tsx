import axios from "axios";
import { uniqueId } from "lodash";
import { useState } from "react";
import { useSWRConfig } from "swr";
import useTodoHook from "../../app/useTodoHook";
import Button from "../common/button/Button";
import Input from "../common/input/Input";
import TodoItemSwr from "./TodoItem";

export default function TodoListSwr() {
  const { data, error, isValidating } = useTodoHook();

  const { mutate } = useSWRConfig();

  // state
  const [title, setTitle] = useState("");

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
