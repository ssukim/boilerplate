import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Todo from "../components/todo/Todo";
import { TodoState } from "../components/todo/todoSlice";
import axios from "axios";
import styles from "../styles/Home.module.css";

export const getServerSideProps: GetServerSideProps = async () => {
  const todoData: TodoState[] = await axios
    .get("http://localhost:3000/api/todo")
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

const Home: NextPage = ({
  todoData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>redux</title>
      </Head>
      <header></header>
      <div className={styles.main}>
        <Todo initialTodo={todoData} />
      </div>
    </div>
  );
};

export default Home;
