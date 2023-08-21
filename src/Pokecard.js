import './Pokecard.css'
/** Shows a single Pokemon, with their name, image, type, base_experience.
*/

const BASE_POKEMON_IMG = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

function Pokecard({ pokemon }) {
console.log('is this running');
console.log('****pokemon  from pokecard=', pokemon)
  return (
    <div className='Pokecard'>
      <h3>{pokemon.name}</h3>
      <img src={`${BASE_POKEMON_IMG}/${pokemon.id}.png`}></img>
      <p>Type: {pokemon.type}</p>
      <p>EXP: {pokemon.base_experience}</p>
    </div>

  );
}


export default Pokecard;