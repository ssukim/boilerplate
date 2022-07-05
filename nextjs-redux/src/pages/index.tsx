import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/common/button/Button";
import Input from "../components/common/input/Input";
import Todo from "../components/todo/Todo";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>redux</title>
      </Head>
      <header></header>
      <div className={styles.main}>
        <Todo />
      </div>
    </div>
  );
};

export default Home;
