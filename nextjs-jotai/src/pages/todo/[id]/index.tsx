import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import client from "../../../store/client";
import { TodoListProps } from "../../../store/todo";

const TodoDetailPage = ({
  todo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(todo);

  return <div>{todo.id}</div>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    return {
      props: {},
    };
  }

  const { id } = context.params;
  const todo = await client
    .get(`https://development/api/todos/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    props: {
      todo,
    },
    revalidate: true,
  };
};

export const getStaticPaths = async () => {
  const res = await axios
    .get("https://development/api/todos", {
      params: { _start: "0", _end: "10" },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });

  const todo = res?.map((item: TodoListProps) => ({
    params: {
      id: item.id.toString(),
    },
  }));
  return {
    paths: todo,
    fallback: "blocking",
  };
};

export default TodoDetailPage;
