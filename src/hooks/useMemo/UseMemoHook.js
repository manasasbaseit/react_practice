
import React, { useState, useMemo } from 'react';
 
function FactorialCalculator() {

  const [number, setNumber] = useState(5); // Initial number is 5
 
  // Use useMemo to calculate and memoize the factorial

  const factorial = useMemo(() => {

    console.log(`Calculating factorial of ${number}`);

    if (number <= 1) return 1;

    return number * factorialize(number - 1);

  }, [number]);
 
  const factorialize = (num) => {

    if (num <= 1) return 1;

    return num * factorialize(num - 1);

  };
 
  return (

    <div>

      <h1>Factorial Calculator</h1>

      <p>Number: {number}</p>

      <p>Factorial: {factorial}</p>

      <button onClick={() => setNumber(number + 1)}>Increment Number</button>

    </div>

  );

}
 
function UseMemoHook() {

  return (

    <div>

      <FactorialCalculator />

    </div>

  );

}
 
export default UseMemoHook;
