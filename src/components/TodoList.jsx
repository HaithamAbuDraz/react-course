import { useRef, useState } from 'react';

const initialTodos = [
  { id: 1, title: 'Learn React' },
  { id: 2, title: 'Build a Todo App' },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const inputRef = useRef(null);

  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input type='text' ref={inputRef} placeholder='Add a new todo' />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
