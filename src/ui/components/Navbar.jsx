import { NavLink, json, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../auth/hooks/useAuthContext';


function Navbar() {

  const navigate = useNavigate();
  const { authState, logout } = useAuthContext();

  

  const onLogout = ()=>{
    
    logout();
    navigate( '/login', { replace: true } );
  };



  return (
    <div className='flex flex-col md:flex-row gap-10 bg-gray-800 px-2 py-5 items-center'>

      <h1 className='text-3xl font-bold text-emerald-500'>Heros</h1>
      <nav className='flex justify-between w-full'>
        <div className='flex gap-3'>
          <NavLink
            
            to={'marvel'}
            className={(arg)=> `font-semibold md:text-lg text-gray-500 hover:text-gray-200  px-2 py-1  rounded-md ${arg.isActive ? 'bg-emerald-500 text-white' : ''}`}
          >
            Marvel
          </NavLink>
          <NavLink 
            
            to={'dc'}
            className={(arg)=> `font-semibold md:text-lg text-gray-500 hover:text-gray-200  px-2 py-1  rounded-md ${arg.isActive ? 'bg-emerald-500 text-white' : ''}`}
          >
            DC
          </NavLink>
          <NavLink
           
            to={'search'}
            className={(arg)=> `font-semibold md:text-lg text-gray-500 hover:text-gray-200  px-2 py-1  rounded-md ${arg.isActive ? 'bg-emerald-500 text-white' : ''}`}
          >
            Search
          </NavLink>
          
        </div>

        <div className='flex items-center gap-2'>
          <p className='text-xl font-semibold capitalize text-emerald-500'>
            {
              authState.user?.name
            }
          </p>
          <button
            onClick={ onLogout }
            className='font-semibold md:text-lg text-gray-500 hover:text-gray-200 px-2 py-1  rounded-md'
          >
            Logout
          </button>
        </div>
  
      </nav>

    </div>
  )
}

export default Navbar