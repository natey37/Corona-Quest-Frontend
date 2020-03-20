import React from 'react';
import NavBar from './NavBar'


class StartScreen extends React.Component {

    

    state = {
        characters: [],
        instructions: false 
    }

    componentDidMount(){
        fetch('http://localhost:3000/characters')
        .then(resp => resp.json())
        .then(characters => {
            this.setState({
                characters: characters
            })
        })
    }

    showInstructions = () => {
        this.setState({
            instructions: !this.state.instructions
        })
    }

    render(){
        return (
     
            <div className="StartScreen">
            <NavBar/>
            <br></br>
                <div>
                    Begin Your Corona Quest!
                    <br></br>
                    <button onClick={this.showInstructions}>How to Play</button>
                    <div>
                    {this.state.instructions ? "These are the instructions" : null}

                    </div>
                    <br></br>
                </div>
    
                Choose Your Character! 
                <select>
                    {this.state.characters.map(character => <option>Name: {character.name} - Strength: {character.strength} - HP: {character.hp} </option>)}
                </select>

                <div>
                    <button>Start your Quest!</button>
                </div>
            </div>
        
         
      );
    }
  
}

export default StartScreen;
