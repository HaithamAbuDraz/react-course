import { useOptimistic, useRef, useState, startTransition } from 'react';

const initialTodos = [
  { id: 1, title: 'Learn React', isPending: false },
  { id: 2, title: 'Build a Todo App', isPending: false },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        { id: crypto.randomUUID(), title: action.payload, isPending: true },
      ];
    default:
      throw new Error('Not valid');
  }
};

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [optimisticTodos, dispatch] = useOptimistic(todos, reducer);
  const inputRef = useRef(null);

  async function onSubmit(e) {
    e.preventDefault();

    if (inputRef.current == null) return;

    startTransition(async () => {
      dispatch({ type: 'ADD', payload: inputRef.current.value });
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
  return wait({ id: crypto.randomUUID(), title, isPending: false }, 1000);
}

function wait(value, duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), duration);
  });
}
