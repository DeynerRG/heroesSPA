import { getHeroesByPublisher } from "../helpers"
import HeroeCard from "./HeroeCard";

function HeroList({ publisher }) {
  
    const heroes = getHeroesByPublisher( publisher );
  
    return (
        <ul className="card__container p-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 md:gap-5">
            {
                heroes.map(( heroe )=>(
                    <HeroeCard key={ heroe.id } heroe={ heroe }/>
                ))
            }
        </ul>
    )
}

export default HeroList