import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext";

function Login() {

  const navigate = useNavigate();
  const { login } = useAuthContext();
  
  const onLogin = ()=>{
    const lastPath = localStorage.getItem('lastPath') || '/';
    login('deyner')
    navigate( lastPath, { replace: true } )
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="font-bold text-5xl">Login</h1>
      <button 
        className="rounded-md mt-5 bg-rose-500 p-2 text-white font-semibold"
        onClick={ onLogin }  
      >
        Iniciar sesión
      </button>
    </div>
  )
}

export default Login