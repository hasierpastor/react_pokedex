import React, { Component } from 'react';
import './Pokecard.css';

// baseUrl missing id and .png
const baseUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
  render() {
    let { name, id, type } = this.props;
    return (
      <div className="PokeCard">
        <h3 className="NamePokemon">{name}</h3>
        <img src={`${baseUrl}${id}.png`} alt="" />
        <h6 className="TypePokemon">Type: {type}</h6>
      </div>
    );
  }
}

export default Pokecard;
