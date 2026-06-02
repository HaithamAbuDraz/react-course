import { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from '../reducer';

const CountContext = createContext();

const CountContextProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ count, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useCountContext = () => {
  return useContext(CountContext);
};
