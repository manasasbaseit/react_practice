import React,{useState} from 'react';

function FunctionalComponents(){
  
  let[counter,updateCounter]=useState(0)
  //usestate return the array [Value,set] means [Input, function]
  return(
    <>
    <h1>Counter Value:{counter}</h1>
    <button onClick={()=>{
      updateCounter(++counter)
      }}>Change</button>
    </>
  )
}
export default FunctionalComponents
