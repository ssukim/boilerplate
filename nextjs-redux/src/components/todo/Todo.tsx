import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../app/store";
import Button from "../common/button/Button";
import { addTodo, deleteTodo, TodoState } from "./todoSlice";
import _uniqueId from "lodash/uniqueId";
import Input from "../common/input/Input";
import { useEffect, useState } from "react";

type Props = {
  initialTodo: TodoState[];
};
export default function Todo({ initialTodo }: Props) {
  const [title, setTitle] = useState("");

  const todo = useSelector((state: AppState) => state.todo);
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onClickAdd = () => {
    dispatch(addTodo({ id: _uniqueId(), title }));
    setTitle("");
  };

  useEffect(() => {
    initialTodo.forEach((item) => {
      dispatch(addTodo(item));
    });
  }, []);

  return (
    <div>
      <div>
        <Input onChange={(e) => onChange(e)} value={title} />
        <Button label="add" onClick={onClickAdd} />
        <div>
          {todo.map((item) => (
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
    </div>
  );
}
