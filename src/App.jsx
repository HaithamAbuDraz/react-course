import { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  loading: false,
  posts: [],
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PENDING':
      return {
        loading: true,
        posts: [],
        error: '',
      };
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        posts: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        posts: [],
        error: JSON.stringify(action.payload) ?? 'Something went wrong',
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getPosts = async () => {
      try {
        dispatch({ type: 'FETCH_PENDING' });
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        );
        if (res.status === 200) {
          dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
        } else {
          dispatch({ type: 'FETCH_ERROR' });
        }
        console.log(res.data);
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error });
        console.error(error);
      }
    };
    getPosts();
  }, []);
  return (
    <>
      <div>
        {state.loading && <p>Loading...</p>}
        {!state.loading && state.error && <p>Error: {state.error}</p>}
        {!state.loading && state.posts && (
          <ul>
            {state.posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default App;
