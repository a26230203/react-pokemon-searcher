import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""   
  }

  submitNewPokemon = (e) => {
    const newPoke = {
      name : this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }

    e.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoke)
    })
      .then(res=> res.json())
        .then(postPokemon => {
            this.props.creatPokemon(postPokemon)
              this.setState({
                name: "",
                hp: "",
                frontUrl: "",
                backUrl: ""
              })
        })
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => {this.submitNewPokemon(e)}}>
          <Form.Group widths="equal">
            <Form.Input value={this.state.name} fluid label="Name" placeholder="Name" name="name"  
            onChange={(e)=> this.setState({name: e.target.value})} />
            <Form.Input value={this.state.hp}fluid label="hp" placeholder="hp" name="hp" 
            onChange={(e)=> this.setState({hp: e.target.value}) }  />
            <Form.Input value={this.state.front} fluid label="Front Image URL" placeholder="url" name="frontUrl" 
             onChange={(e)=> this.setState({frontUrl: e.target.value})} />
            <Form.Input value={this.state.back} fluid label="Back Image URL" placeholder="url" name="backUrl" 
            onChange={(e)=> this.setState({backUrl: e.target.value})}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
