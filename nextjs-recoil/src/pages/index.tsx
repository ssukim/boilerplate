import type { NextPage } from 'next';
import ChracterCounter from '../components/ChracterCounter';
import TodoList from '../components/TodoList';
const Home: NextPage = () => {
  return (
    <div>
      {/* <ChracterCounter /> */}
      <TodoList />
    </div>
  );
};

export default Home;
