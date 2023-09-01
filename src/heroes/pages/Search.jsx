import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm"
import queryString from 'query-string'
import { getHeroesByName } from "../helpers";
import HeroeCard from "../components/HeroeCard";
import { heroes as dataHeroes} from "../data/heroes";
import { useEffect } from "react";
/*
  queryString:
  la libreria query-string es una libreria que permite obtener los parametros 
  de una url de forma facil. 
*/

/*
  useLocation:
  es un hook de react router dom que permite obtener informacion de la ruta actual
  mediante la informacion proporcionada es posible obtener los parametros de la url
*/


function Search() {

  const navigate = useNavigate();
  const location = useLocation();
  const { searchText, onInputChange } = useForm({ searchText: '' })
 
  const { q = '' } = queryString.parse( location.search )
  let heroes = getHeroesByName( q );
  

  const handleSubmit = ( e )=>{
   
    e.preventDefault();
    
    // Navega sobre otra ruta en donde se envia parametros a la url.
    navigate(`/search?q=${ searchText.toLowerCase().trim()}`)
    
  }

  

  return (
    <>

      <div className="grid md:grid-cols-2 gap-4 w-11/12 xl:w-6/12 mx-auto my-10">
        <aside>
          <form 
            action="#" 
            className="flex flex-col"
            onSubmit={ handleSubmit }
          >
              <input
                value={ searchText }
                onChange={ onInputChange } 
                type="text" 
                name="searchText"
                className="border-2 rounded-md p-2  focus:outline-emerald-200"
              />
              <button
                type="submit"
                className="mt-3 bg-emerald-500 py-2 rounded-md hover:bg-emerald-400 font-bold text-white capitalize text-xl"
              >
                Search
              </button>

          </form>
        </aside>
        <main >
          {
            heroes.length < 1 ? (
              <h2 className="text-2xl font-bold text-center text-gray-400 flex items-center justify-center h-full"><span>No existe</span></h2>
            ):(
              <div className="grid grid-cols-2 gap-2 2xl:grid-cols-3">
              {
                heroes.map((heroe)=>(
                  <HeroeCard key={ heroe.id } heroe={ heroe }/>
                ))
              }
              </div>
            )
          }
        </main>
      </div>
    </>
  )
}

export default Search