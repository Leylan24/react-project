import './App.css';
import { Component } from 'react';
import Ingredient from './Ingredient';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      ingredients:["Bun", "Lettuce", "Tomato","Cheese","Pickel","Pineapple"]
    };
  }
  render(){
  return (
    <div className="App">
      <h1> Burger Builder</h1>
      {
        this.state.ingredients.map( ingredients => {
          return(
            <Ingredient name={ingredients}/>
          )
        }
        )
      }
    </div>
  );
}
}
export default App;
