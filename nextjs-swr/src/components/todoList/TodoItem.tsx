import Link from "next/link";
import { TodoListState } from "../../app/type";
import useTodoHook from "../../app/useTodoHook";

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
