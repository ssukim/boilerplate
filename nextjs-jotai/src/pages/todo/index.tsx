import type { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import CommonLayout from "../../components/common/layout/CommonLayout";
import HeadInfo from "../../components/common/headInfo/HeadInfo";
import TodoList from "../../components/todoList/TodoList";

export const getStaticProps: GetStaticProps = async () => {
  const todoData = await axios
    .get("https://development/api/todos")
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
