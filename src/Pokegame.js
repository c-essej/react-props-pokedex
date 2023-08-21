import PokemonHand from './PokemonHand'
import './Pokegame.css'

function Pokegame({ pokemon }) {
  shufflePokemon(pokemon);

  const hand1 = [ pokemon[0], pokemon[1], pokemon[2], pokemon[3] ];
  const hand2 = [ pokemon[4], pokemon[5], pokemon[6], pokemon[7] ];

  const score1 = calculateScore(hand1);
  const score2 = calculateScore(hand2);

  return (
    <div className="Pokegame">
      <div className="Pokegame-hand1">
        <h1>Hand 1</h1>
        <PokemonHand pokemon={ hand1 } />
        <h3> { score1 > score2 ? "Winner!" : null } </h3>
        <h4>Total score: { score1 } </h4>
      </div>
      <div className="Pokegame-hand2">
        <h1>Hand 2</h1>
        <PokemonHand pokemon={ hand2 } />
        <h3> { score2 > score1 ? "Winner!" : null } </h3>
        <h4>Total score: { score2 } </h4>
      </div>
    </div>
  )
}

function shufflePokemon(pokemon) {
  for (let i = pokemon.length - 1; i > 0; i--) {

    // generate random number between 0 and i
    let j = Math.floor(Math.random() * i);

    // swap item at i with item at j
    [pokemon[i], pokemon[j]] = [pokemon[j], pokemon[i]];
  }
}

function calculateScore(hand) {
  const returnThingWithInitial = hand.reduce( (score, pokemon) => {
    return score+= pokemon.base_experience;
  }, 0);
  const returnThingNoInitial = hand.reduce( (score, pokemon) => {
    return score+= pokemon.base_experience;
  });
  console.log("with initial:", returnThingWithInitial);
  console.log("without initial:", returnThingNoInitial);
  debugger;

  return returnThingWithInitial;
}

export default Pokegame;