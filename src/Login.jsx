    import { useState } from "react";
     import { useNavigate } from "react-router-dom"; 
     import axios from "axios";
      function Login() { 
        const navi = useNavigate(); 
        const [email, setEmail] = useState("");
         const [pass, setPass] = useState("");
          async function handlelogin() {
             try { 
                const response = await axios.get(
    "http://localhost:3000/users"
);

const users = response.data;

console.log("Users:", users);
console.log("Email:", email);
console.log("Password:", pass);

const user = users.find(
    user =>
        user.email === email &&
        user.password === pass
);

console.log("Matched user:", user);
if (user) {
    localStorage.setItem("isLoggedin", "true");
    navi("/Dashboard", { replace: true });
} else {
    alert("Invalid email or password");
}
                            }
                             catch (error) 
                             { 
                                console.log(error); 
                                alert("Something went wrong");
                             }
                             }
    
    return (
        <div className="min-h-screen border-2  flex item-center justify-center">
        <div className="border-2  border-transparent h-fit w-fit m-30 flex flex-col items-center justify-center bg-white rounded-4xl shadow-2xl">
           <div className="mt-5 mb-4 ml-20 mr-20 flex flex-col items-center -transl">
           <h1 className="text-3xl font-mono text-red-500">Login </h1>
           <p className="font-serif text-gray-400">Log in to your account</p>
           </div>          
             <div className="m-4 mt-0 ">
            <label htmlFor="email" className="text-lg font-serif -translate-x-7" >Enter Your Email</label><br/>
            <input type="email" id="email" placeholder="  Email......." className="border-2 w-[230px] rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="mb-6">
            <label htmlFor="pass" className="text-lg font-serif">Enter Your Password</label><br/>
            <input type="password" id="pass" placeholder="  Password......."className="border-2  w-[230px] rounded-lg" value={pass} onChange={(e) => setPass(e.target.value)}></input> 
            </div>
            <button className="border-2 mb-2 w-[230px] cursor-pointer rounded-3xl hover:bg-gray-700 bg-black text-white p-1" onClick={handlelogin}>Log In</button>
            <p className="mb-1">Don't have an account?</p>
            <button className=" mb-5 text-yellow-600 cursor-grab hover:underline" onClick={()=>navi("/Register")}>Create Account</button>
        </div>
        </div>
    )
      }
export default Login