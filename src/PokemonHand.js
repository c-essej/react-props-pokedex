import Pokecard from './Pokecard';
import './PokemonHand.css';

/** Is provided, via props, an array of objects describing different pokemon,
 * and renders a sequence of Pokecard components.
 */

function PokemonHand( { pokemon } ) {

  console.log('*****pokemon from PokemonHand=', pokemon);

  let pokeCards = pokemon.map(p => <Pokecard pokemon={p}/>);

  console.log('*****pokeCards from PokemonHand=', pokeCards);

  return(
    <div className='PokemonHand'>
      { pokeCards }
    </div>
  )
}


export default PokemonHand;