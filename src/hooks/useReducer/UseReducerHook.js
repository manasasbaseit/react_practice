
import React, { useReducer } from 'react';
 
// Step 1: Define the reducer function

const counterReducer = (state, action) => {

  switch (action.type) {

    case 'INCREMENT':

      return { count: state.count + 1 };

    case 'DECREMENT':

      return { count: state.count - 1 };

    default:

      return state;

  }

};
 
// Step 2: Create the initial state

const initialState = { count: 0 };
 
function Counter() {

  // Step 3: Use useReducer to manage state

  const [state, dispatch] = useReducer(counterReducer, initialState);
 
  return (

    <div>

      <h1>Counter: {state.count}</h1>

      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>

      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>

    </div>

  );

}
 
function UseReducerHook() {

  return (

    <div>

      <Counter />

    </div>

  );

}
 
export default UseReducerHook;
