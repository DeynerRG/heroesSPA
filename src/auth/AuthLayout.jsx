import { Outlet } from "react-router-dom"

function AuthLayout() {

  
  return (
    <>
       <div className="absolute left-0 right-0">
        <div className="font-bold text-4xl text-gray-300 m-2 ">Heros</div>
        <hr />
       </div>
        <Outlet /> 
    </>

  )
}

export default AuthLayout