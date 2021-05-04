import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    serachText: ""
  }


    componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
        .then(pokemon => this.setState({pokemon}))
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
    const filterPokemon = this.state.pokemon.filter((pokemon)=> pokemon.name.includes(this.state.serachText))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm creatPokemon={this.creatPokemon}  />
        <br />
        <Search filterSearch={this.filterSearch}/>
        <br />
        <PokemonCollection pokemon={filterPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
