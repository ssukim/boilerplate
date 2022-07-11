import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TodoListState } from "../../../components/todoList/todoSlice";

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
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
  };
};

export const getStaticPaths = async () => {
  const res = await axios
    .get("https://jsonplaceholder.typicode.com/posts", {
      params: { _start: "0", _end: "10" },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });

  const todo = res?.map((item: TodoListState) => ({
    params: {
      id: item.id.toString(),
    },
  }));
  return {
    paths: todo,
    fallback: false,
  };
};

export default TodoDetailPage;
