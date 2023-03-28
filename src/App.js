import './App.css';
import { useState } from "react";
import Axios from 'axios';


function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: ""
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
      setPokemon({
        name: pokemonName,
        species: response.data.species.name,
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name
      });
      setPokemonChosen(true);
    })
  }

  return (
    <div className="App">
      <div className='title'>
        <h1>Choose a Pokémon </h1>
        <input type="text" onChange={(event) => {
          setPokemonName(event.target.value);
        }} />
        <button onClick={searchPokemon}>Search Pokemon!</button>
      </div>
      <div className='display'>
        {!pokemonChosen ? (<h1>Please choose a Pokemon</h1>) :
          (<>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img} alt= {`The default sprite image for ${pokemon.name}`} />
            <h3>Species: {pokemon.species}</h3>
            <h3>Type: {pokemon.type}</h3>
            <h4>Hp: {pokemon.hp}</h4>
            <h4>Attack: {pokemon.attack}</h4>
            <h4>Defense: {pokemon.defense}</h4>
          </>
          )}
      </div>
    </div>
  );
}

export default App;

// Create state items for the API data and the user selection from the list
  // pokemon
  // userSelection

// Once the component has been mounted, call the local method to get the data from the Pokemon API

// A local method getPokemon to make the API call for the selected Pokemon from the list
  // when successful, update the state with the API data
  // else display an error message

// Render the app
  // header
  // drop down list of Pokemon
  // footer

// Use the return to render the Pokemon card 
  // picture
  // stats and other info

// Return
  // Create a/some component/s to display an image of the Pokemon along with other text information below it
  // these components will get data passed in a props
  // 