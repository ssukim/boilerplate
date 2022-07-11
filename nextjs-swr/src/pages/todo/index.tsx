import type {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import TodoRedux from "../../components/todoRedux/TodoRedux";
import { TodoState } from "../../components/todoRedux/todoSlice";
import axios from "axios";
import CommonLayout from "../../components/common/layout/CommonLayout";
import HeadInfo from "../../components/common/headInfo/HeadInfo";
import TodoSWR from "../../components/todoSWR/TodoListSwr";
import { SWRConfig } from "swr";

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
//        <TodoRedux initialTodo={todoData}/>
//       </>
//     );
//   };

export const getStaticProps: GetStaticProps = async () => {
  const todoData = await axios
    .get(`${process.env.DEV_API_URL}/api/todo`)
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
        todoData,
      },
    },
  };
};

const TodoList = ({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <SWRConfig value={fallback}>
      <CommonLayout>
        <HeadInfo
          title="todo practice"
          keywordContents="todo practice nextjs"
        />
        <TodoSWR />
      </CommonLayout>
    </SWRConfig>
    //   <CommonLayout>
    //   <HeadInfo title="todo practice" keywordContents="todo practice nextjs" />
    //   <TodoRedux initialTodo={todoData} />
    // </CommonLayout>
  );
};

export default TodoList;
