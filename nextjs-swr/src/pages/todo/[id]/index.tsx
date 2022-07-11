import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TodoListState } from "../../../components/todoRedux/todoSlice";

const TodoDetail = ({
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
    .get(`${process.env.DEV_API_URL}/api/todo/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });

  //   const todo = await res.json();

  return {
    props: {
      todo,
    },
  };
};

export const getStaticPaths = async () => {
  // const res = await axios
  //   .get(`${process.env.DEV_API_URL}/api/todo`)
  //   .then((res) => {
  //     return res.data;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // const todo = res?.map((item: TodoListState) => ({
  //   params: {
  //     id: item.id,
  //   },
  // }));
  return {
    paths: [],
    fallback: false,
  };
};

export default TodoDetail;
