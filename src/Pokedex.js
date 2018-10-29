import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  // We need { } around it!!!!!

  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire' },
      { id: 7, name: 'Squirtle', type: 'water' },

      { id: 65, name: 'Alakazam', type: 'psychic' },
      { id: 28, name: 'Sandslash', type: 'ground' },
      { id: 26, name: 'Raichu', type: 'electric' },
      { id: 59, name: 'Arcanine', type: 'fire' },
      { id: 129, name: 'Magikarp', type: 'Water' },
      { id: 126, name: 'Magmar', type: 'fire' },
      { id: 100, name: 'Voltorb', type: 'electric' }
    ]
  };

  render() {
    return (
      <div>
        <img
          className="logo"
          src="http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png"
          alt=""
        />
        {this.props.pokemon.map(function(p) {
          return <Pokecard id={p.id} name={p.name} type={p.type} />;
        })}
      </div>
    );
  }
}

export default Pokedex;
