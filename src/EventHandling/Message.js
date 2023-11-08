import React from 'react';

function Message() {
  function displayMessage(num){
    alert("button clicked"+num)
  }
  return (
    // <button onClick={displayMessage}>Click</button>  (or)
<button onClick={()=>(displayMessage(10))}>click</button>

    );
}

export default Message;
