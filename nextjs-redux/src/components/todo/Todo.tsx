import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../app/store";
import Button from "../common/button/Button";
import { addTodo, deleteTodo } from "./todoSlice";
import _uniqueId from "lodash/uniqueId";

export default function Todo() {
  const todo = useSelector((state: AppState) => state.todo);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Button
          label="add"
          onClick={() => dispatch(addTodo({ id: _uniqueId(), title: "hello" }))}
        />
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
