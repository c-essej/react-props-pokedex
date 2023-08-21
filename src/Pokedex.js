import Pokecard from './Pokecard';
import './Pokedex.css';

/** Is provided, via props, an array of objects describing different pokemon,
 * and renders a sequence of Pokecard components.
 */

function Pokedex( { pokemon } ) {

  console.log('*****pokemon from Pokedex=', pokemon);

  let pokeCards = pokemon.map(p => <Pokecard pokemon={p}/>);

  console.log('*****pokeCards from Pokedex=', pokeCards);

  return(
    <div className='Pokedex'>
      <h1>Pokedex</h1>
      { pokeCards }
    </div>
  )
}


export default Pokedex;