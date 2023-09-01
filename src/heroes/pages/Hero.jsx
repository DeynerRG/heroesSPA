import { Navigate,  useNavigate,  useParams } from "react-router-dom"
import { getHeroeById } from "../helpers";
import { useEffect, useMemo, useState } from "react";

function Hero() {

  const navigate = useNavigate();
  const params = useParams();
  const { id } = params

  const heroe = getHeroeById( id );
  

  if( !heroe ){
    return <Navigate to={'/'} replace/>
    
  }
  const { characters, alter_ego, first_appearance, publisher, superhero } = heroe 
  
  const urlImage = `/img/${id}.jpg`

  const onNavigateBack = ()=>{
    navigate(-1)
  }

  return (
    
    <div className= "flex flex-col md:flex-row justify-center items-center mt-0 mb-5 md:my-32 gap-5">
      <div className="">
        <img 
          src={urlImage} 
          alt={ superhero } 
          className="animate__animated animate__zoomInLeft w-dull md:w-96 block md:rounded-lg shadow-sm " 
        />
      </div>
      <div className="flex flex-col">
        <h1 className="animate__animated animate__zoomInDown text-2xl md:text-5xl font-bold text-gray-800 my-5">{superhero}</h1>
        <p className="font-semibold text-gray-700 my-1">Alter ego: <span className="text-gray-500">{ alter_ego }</span></p>
        <p className="font-semibold text-gray-700 my-1">Publisher: <span className="text-gray-500">{ publisher }</span></p>
        <p className="font-semibold text-gray-700 my-1">First appearance: <span className="text-gray-500">{ first_appearance }</span></p>
        <button 
          className="py-1 px-2 border-2 border-emerald-500 hover:bg-emerald-500 hover:text-white rounded-md text-emerald-500 font-bold block my-2 self-end"
          onClick={ onNavigateBack }
        >volver</button>
      </div>
      
    </div>
  )
}

export default Hero