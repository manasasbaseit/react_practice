
import React, { createContext, useContext, useState } from 'react';
 
// Step 1: Create a Context

const CounterContext = createContext();
 
// Step 2: Create a Provider

function CounterProvider({ children }) {

  const [count, setCount] = useState(0);
 
  const increment = () => {

    setCount(count + 1);

  };
 
  const decrement = () => {

    setCount(count - 1);

  };
 
  return (

    <CounterContext.Provider value={{ count, increment, decrement }}>

      {children}

    </CounterContext.Provider>

  );

}
 
// Step 3: Create custom hooks to access the context

function useCounter() {

  const context = useContext(CounterContext);

  if (!context) {

    throw new Error('useCounter must be used within a CounterProvider');

  }

  return context;

}
 
// Step 4: Create components that use the context

function CounterDisplay() {

  const { count } = useCounter();

  return <div>Count: {count}</div>;

}
 
function CounterButtons() {

  const { increment, decrement } = useCounter();

  return (

    <div>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

    </div>

  );

}
 
function ContextHook() {

  return (

    <CounterProvider>

      <div>

        <CounterDisplay />

        <CounterButtons />

      </div>

    </CounterProvider>

  );

}
 
export default ContextHook;
