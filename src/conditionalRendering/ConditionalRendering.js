import './conditionalrendering.css'
import React from 'react';
let loggedIn=true;
let isAdmin=true;
function ConditionalRendering(){
  return(
    <>
    <Header></Header>
    {
      //isAdmin?<Admin></Admin>:null //if isAdmin is true
      //(or)
      isAdmin&&<Admin></Admin>
    }
    </>
  )
}
//login display if loggedIn=true;it shows logout
function Header(){
return(
  <ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    {
      loggedIn?(<li>Logout</li>):null
    }
  </ul>
)
}
function Admin(){
  return(
    <h1>This is admin dashboard</h1>
  )
}
export default ConditionalRendering