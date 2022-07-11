import type {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
// import TodoList from "../../components/todoList/TodoList";
import { TodoState } from "../../components/todoList/todoSlice";
import axios from "axios";
import CommonLayout from "../../components/common/layout/CommonLayout";
import HeadInfo from "../../components/common/headInfo/HeadInfo";
import TodoList from "../../components/todoList/TodoRedux";

// 공식문서에서 getServerSideProps보다는 getStaticProps를 권고
//   export const getServerSideProps: GetServerSideProps = async () => {
//     const todoData: TodoState[] = await axios
//       .get(`${process.env.DEV_API_URL}/api/todo`)
//       .then((res) => {
//         return res.data;
//       })
//       .catch((e) => {
//         console.log(e);
//         throw new Error(e);
//       });

//     return {
//       props: {
//         todoData,
//       },
//     };
//   };

// const TodoList: NextPage = ({
//     todoData,
//   }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
//     return (
//       <>
//        <TodoList initialTodo={todoData}/>
//       </>
//     );
//   };

export const getStaticProps: GetStaticProps = async () => {
  const todoData = await axios
    .get("https://jsonplaceholder.typicode.com/posts", {
      params: { _start: "0", _end: "10" },
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
      throw new Error(e);
    });

  return {
    props: {
      todoData,
    },
  };
};

const TodoListPage = ({
  todoData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <CommonLayout>
      <HeadInfo title="todo practice" keywordContents="todo practice nextjs" />
      <TodoList initialTodo={todoData} />
    </CommonLayout>
  );
};

export default TodoListPage;
