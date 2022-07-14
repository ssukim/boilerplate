import axios from "axios";
import { TodoListProps } from "./store";

export async function postTodoList(params: TodoListProps) {
  const res = await axios.post("https://development/api/posts", params);
  return res.data;
}
