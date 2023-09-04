import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../ui/components/Navbar"
import { useAuthContext } from "../auth/hooks/useAuthContext"
import { Navigate } from "react-router-dom";

function HeroesLayout() {
  
  const { authState } = useAuthContext();

  const { logged } = authState;

  const { pathname, search } = useLocation();
  const lastPath = pathname + search;
  localStorage.setItem( 'lastPath', lastPath );


  // si no esta logeado retorna la ruta del login
  if(!logged) return <Navigate to={'/login'}/>
  
  return (
    <>
      <Navbar />
      <main className="mb-16">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-center p-2  text-white font-bold fixed bottom-0 left-0 right-0">
        <p>made by <span className="text-emerald-500">codey</span></p>
      </footer>
    </>
  )
}

export default HeroesLayout