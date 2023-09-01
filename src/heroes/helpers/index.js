import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher )=>{

    const validPublishers = [ 
        'DC Comics',
        'Marvel Comics'
    ]

    // si el publisher no existe en mi data lanza un error
    if( !validPublishers.includes( publisher ) ){
        throw new Error(`${ publisher } is not a valid publisher`);
    }

    return heroes.filter( ( heroe )=> heroe.publisher === publisher )
}

export const getHeroeById = ( id )=>{
    return heroes.find(( heroe )=> heroe.id === id)
}

export const getHeroesByName = ( name )=>{
    name = name.toLowerCase().trim();
    if( name.length === 0 ) return heroes;
    return heroes.filter(( heroe )=> heroe.superhero.toLowerCase().includes( name ) )
}