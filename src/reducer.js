export const initialState = 0;

export const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + action.payload;
    case 'decrement':
      return state - action.payload;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}