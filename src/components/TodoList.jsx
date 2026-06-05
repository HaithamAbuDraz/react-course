import { useOptimistic, useRef, useState, startTransition } from 'react';

const initialTodos = [
  { id: 1, title: 'Learn React' },
  { id: 2, title: 'Build a Todo App' },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos);
  const inputRef = useRef(null);

  async function onSubmit(e) {
    e.preventDefault();

    if (inputRef.current == null) return;

    startTransition(async () => {
      const optimisticTodo = {
        id: crypto.randomUUID(),
        title: inputRef.current.value,
      };
      setOptimisticTodos((prev) => [...prev, optimisticTodo]);
      const newTodo = await createTodo(inputRef.current.value);
      setTodos((prev) => [...prev, newTodo]);
    });
  }

  return (
    <div>
      <h1>Todo List</h1>

      <form onSubmit={onSubmit}>
        <input type='text' ref={inputRef} placeholder='Add a new todo' />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {optimisticTodos.map((todo) => (
          <li
            key={todo.id}
            style={{
              opacity: todo.isPending ? '0.5' : undefined,
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

function createTodo(title) {
  return wait({ id: crypto.randomUUID(), title }, 1000);
}

function wait(value, duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), duration);
  });
}
