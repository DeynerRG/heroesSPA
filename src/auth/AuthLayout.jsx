import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"

function AuthLayout() {

  const { authState } = useAuthContext();
  const { logged } = authState
  
  const lastPath = localStorage.getItem('lastPath') || '/';
  if(logged) return <Navigate to={lastPath}/>

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