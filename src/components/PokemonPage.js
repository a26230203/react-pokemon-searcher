import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    serachText: "",
    pokemon:this.props.pokemon
  }

  filterSearch = (inputValue) => {
      this.setState({
        serachText: inputValue
      }) 

  }

  creatPokemon = (pokemonObj) => {
      this.setState({
        pokemon: [...this.state.pokemon, pokemonObj]
      })
  }

  render() {
    const filterPokemon = this.props.pokemon.filter((pokemon)=> pokemon.name.includes(this.state.serachText))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm creatPokemon={this.creatPokemon}  />
        <br />
        <Search filterSearch={this.filterSearch}/>
        <br />
        <PokemonCollection pokemon={filterPokemon} creatPokemon={this.creatPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
