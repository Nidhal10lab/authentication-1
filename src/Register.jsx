import axios from 'axios'
import {  useNavigate } from "react-router-dom"
import { useState } from 'react'
function Register(){
    const nav=useNavigate()
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const[cpass,setCpass]=useState("")

    async function register(){
       if (pass !== cpass) {
         alert("Passwords do not match")
          return; 
        } 
        try { 
            const users = { name: name,
                 email: email,
                  password: pass 
                };
                 await axios.post(
                     "http://localhost:3000/users"
                     , users 
                    );
                     alert("Registration successful")
                      nav("/");
                     } catch(error) { 
                        console.log(error)
                         alert("Registration failed") 
                        }
                    }
    return (
        <div className="min-h-screen border-2  flex item-center justify-center">
        <div className="border-2  border-transparent h-fit w-fit m-30 flex flex-col items-center justify-center bg-white rounded-4xl shadow-2xl">
           <div className="mt-5 mb-4 ml-20 mr-20 flex flex-col items-center -transl">
           <h1 className="text-3xl font-mono text-red-500">Register </h1>
           <p className="font-serif text-gray-400">Please Enter your Details</p>
           </div>          
             <div className="m-4 mt-0 ">
            <label htmlFor="name" className="text-lg font-serif -translate-x-7">Enter Your Name</label><br/>
            <input type="text" id="name" placeholder="  Name......." className="border-2 w-[230px] rounded-lg" value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>
             <div className="m-4 mt-0 ">
            <label htmlFor="email" className="text-lg font-serif -translate-x-7">Enter Your Email</label><br/>
            <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="  Email......." className="border-2 w-[230px] rounded-lg"></input>
            </div>
            <div className="mb-6">
            <label htmlFor="pass" className="text-lg font-serif">Enter Your Password</label><br/>
            <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" id="pass" placeholder="  Password......."className="border-2  w-[230px] rounded-lg"></input> 
            </div>
             <div className="mb-6">
            <label htmlFor="passconf" className="text-lg font-serif">Confirm Your Password</label><br/>
            <input value={cpass} onChange={(e)=>setCpass(e.target.value)}type="password" id="passconf" placeholder="  Confirm Password......."className="border-2  w-[230px] rounded-lg"></input> 
            </div>
            <button className="border-2 mb-2 w-[230px] cursor-pointer rounded-3xl hover:bg-gray-700 bg-black text-white p-1" onClick={register}>Register</button>
            <p className="mb-1">Already have an account?</p>
            <button className=" mb-5 text-yellow-600 cursor-grab hover:underline" onClick={()=>nav("/")} >Log in</button>
        </div>
        </div>
    )
}
export default Register