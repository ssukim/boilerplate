import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TodoListProps } from "../../../components/todoList/store";

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
  const todo = await axios
    .get(`https://development/api/posts/${id}`)
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
    .get("https://development/api/posts", {
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
