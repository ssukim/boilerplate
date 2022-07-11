import axios from "axios";
import useSWR from "swr";
import { TodoListState } from "../components/todoRedux/todoSlice";

export default () => {
  const { data, error, isValidating, mutate } = useSWR(
    "/api/todo",
    (url: string) => axios.get(url).then((res) => res.data as TodoListState[]),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error, isValidating, mutate };
};
