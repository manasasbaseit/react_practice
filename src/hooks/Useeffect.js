import React,{useState,useEffect} from 'react';
function Useeffect(){
    const[count,setCount]=useState(0);
    useEffect(()=>console.log(count),[count])
    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
            </div>
    )
}
export default Useeffect