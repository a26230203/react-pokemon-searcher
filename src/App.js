import React from 'react'
import PokemonPage from './components/PokemonPage'
import './App.css'

class App extends React.Component {

  state = {
    pokemon: []
  }
  

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
        .then(pokemon => this.setState({pokemon}))
  }


  render() {
    
    return (
      <div className="App">
      <PokemonPage pokemon={this.state.pokemon} />
      </div> 
  )
}
}

export default App








// const App = () => {

//  
//   <div className="App">
//     <PokemonPage pokemon={pokemons}/>
//   </div> 
//  
// }
// export default App