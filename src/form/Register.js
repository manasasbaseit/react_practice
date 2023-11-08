import React,{useState} from 'react'

const SignUp=()=>{
    const[data,setData]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''

    })
    const{username,email,password,confirmPassword}=data;//Object destructuring
    const changeHandler=e=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler=e=>{
        e.preventDefault()
        if(password === confirmPassword){
            console.log(data);
        }
       else{
        console.log("passwords are not matching")
       }
    }
    return(
        <>
        <center>
            <form onSubmit={submitHandler}>
                <input type="text" name="username" value={username} onChange={changeHandler}/>
                <br />
                <input text="email" name="email" value={email} onChange={changeHandler}/>
                <br />
                <input type="password" name="password" value={password} onChange={changeHandler}/>
                <br />
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/>
                <br />
                <input type="submit" name="submit" />
            </form>
        </center>
        </>
    )
}
export default SignUp