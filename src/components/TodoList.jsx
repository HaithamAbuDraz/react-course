import { useOptimistic, useState, startTransition } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

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
      return state;
  }
};

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [optimisticTodos, dispatch] = useOptimistic(todos, reducer);

  async function handleForm(prevState, formData) {
    const title = formData.get('title');
    if (typeof title !== 'string') return { message: 'Wrong Text' };

    startTransition(async () => {
      dispatch({ type: 'ADD', payload: title });

      const newTodo = await createTodo(title);
      setTodos((prev) => [...prev, newTodo]);
    });
  }

  const [state, action] = useFormState(handleForm, {});
  console.log(state);

  return (
    <div>
      <h1>Todo List</h1>

      <form action={action}>
        <input type='text' placeholder='Add a new todo' name='title' />
        <SubmitButton />
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

const SubmitButton = () => {
  const data = useFormStatus();
  console.log(data);
  return (
    <button type='submit' disabled={data.pending}>
      {data.pending ? 'Adding...' : 'Add Todo'}
    </button>
  );
};

function createTodo(title) {
  return wait({ id: crypto.randomUUID(), title, isPending: false }, 1000);
}

function wait(value, duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), duration);
  });
}
