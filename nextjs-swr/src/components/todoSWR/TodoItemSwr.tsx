import Link from "next/link";
import useTodoHook from "../../app/useTodoHook";
import { TodoListState } from "../todoRedux/todoSlice";

type Props = {
  item: TodoListState;
};
export default function TodoItemSwr({ item }: Props) {
  const { data, error } = useTodoHook();
//   console.log("🚀 ~ file: TodoItemSwr.tsx ~ line 5 ~ TodoItemSwr ~ data", data);

  return (
    <Link href={`/todo/${item.id}`}>
      <a>{item.title}</a>
    </Link>
  );
}
