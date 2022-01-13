import { ChangeEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { TodoListState, todoListState } from '../../atoms/todoState';

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return `id${id++}`;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');

  const setTodoList = useSetRecoilState<TodoListState[]>(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList: TodoListState[]) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isCompleted: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;
