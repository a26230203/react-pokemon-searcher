import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  state = {
    showCarFront: true
  }

  toggleFronBack = () => {
   this.setState({
    showCarFront: !this.state.showCarFront
   })
  }

  
  render() {
    return (
      <Card.Group itemsPerRow={6}>
          {
            this.props.pokemon.map((pokemon, index) => {
              return <PokemonCard key={index} pokemon={pokemon} toggleFronBack={this.toggleFronBack} 
              showCarFront={this.state.showCarFront} creatPokemon={this.props.creatPokemon}/>
            })
          }
      </Card.Group>
    )
  }
}

export default PokemonCollection
