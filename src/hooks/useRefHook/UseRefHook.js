import {useRef} from 'react';
import {useState} from 'react';
function UseRefHook(){
  let x=useRef(10);
  const [y,setY]=useState(100)
  return(
    <>
    
    <h1>x value:{x.current}</h1>

<button onClick={()=>{
  x.current=x.current+10;
  console.log(x.current);
  setY(y+100)
}}  >increment</button>  </>
    
  )
}
export default UseRefHook