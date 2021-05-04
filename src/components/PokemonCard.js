import React from 'react'
import { Card } from 'semantic-ui-react'
import Back from './Back'
import Front from './Front'

class PokemonCard extends React.Component {
  render() {
    return (
      <Card>
        <div onClick={() => {this.props.toggleFronBack()}}>
          <div className="image">
            {
            this.props.showCarFront? <Front img={this.props.pokemon.sprites.front} alt=""/> : 
            <Back img={this.props.pokemon.sprites.back} alt=""/>
            }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
