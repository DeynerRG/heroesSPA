import { Link } from "react-router-dom";


function HeroeCard({ heroe }) {

    const { id, superhero, publisher, alter_ego, first_appearance, characters  } = heroe;

    const urlImage = `/img/${ id }.jpg`


    return (
        <Link to={`/hero/${id}`}>
            <li 
                className='card__li list-none'
            >
                <div className="card__div rounded-md overflow-hidden">
                    <img src={ urlImage } alt={ superhero} className="animate__animated animate__fadeIn w_full aspect-[]"/>
                    <p className="text-xl font-bold text-gray--500">{ superhero }</p>

                </div>
            </li>
        </Link>
    )
}

export default HeroeCard;