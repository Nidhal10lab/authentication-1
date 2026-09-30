import {useNavigate} from "react-router-dom"
 
function Dashboard(){
    const navigate = useNavigate()
     function logout() {
    localStorage.removeItem("isLoggedin");
    navigate("/");
  }
    return (
          <div className="min-h-screen border-2  flex item-center justify-center">
        <div className="border-2  border-transparent h-fit w-fit m-30 flex flex-col items-center justify-center bg-white rounded-4xl shadow-2xl">
            <h1 className="text-9xl font-mono m-10">Welcome <span className="text-blue-400 " >User!</span></h1>
            <p className="text-5xl font-serif mb-10">Have a nice Day 🌅</p>
            <button onClick={logout} className="border-2 rounded-3xl mb-10 p-3 text-3xl hover:bg-gray-700 cursor-pointer w-[500px] bg-black text-white">Log out</button>
            </div>
        </div>
    )
}
export default Dashboard