import type {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import CommonLayout from "../../components/common/layout/CommonLayout";
import HeadInfo from "../../components/common/headInfo/HeadInfo";
import TodoList from "../../components/todoList/TodoList";
import { SWRConfig } from "swr";

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
      fallback: {
        "/api/todo": todoData,
      },
    },
    revalidate: 10,
  };
};

const TodoListPage = ({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <SWRConfig value={{ fallback }}>
      <CommonLayout>
        <HeadInfo
          title="todo practice"
          keywordContents="todo practice nextjs"
        />
        <TodoList />
      </CommonLayout>
    </SWRConfig>
  );
};

export default TodoListPage;
