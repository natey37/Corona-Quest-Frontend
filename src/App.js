import React from 'react';
import StartScreen from './StartScreen'
import Login from './Login'
import ScoreBoard from './ScoreBoard'
import Game from './Game'
import SignupPage from './SignupPage'
import { Route, Switch } from "react-router-dom";


class App extends React.Component {

    state = {
      points: 0, 
      highScores: [],
      characters: [],
      characterForm: {
          name: "", 
          strength: 10, 
          hp: 100,
          score: 0, 
          user_id: 1, 
      },
      charID: null
    }
  //fetch characters
  componentDidMount(){
      fetch('http://localhost:3000/characters')
      .then(resp => resp.json())
      .then(characters => {
        console.log(characters)
          this.setState({
              characters: characters,
              highScores: characters.sort((a,b) => a.score > b.score ? 1 : -1).reverse().splice(1, 10)
          })
      }) 
  }

 
   ///reset newChar form
//    resetForm = () => {
//     this.setState({
//         characterForm: {
//             name: "", 
//             strength: 10, 
//             hp: 100,
//             score: 0, 
//             user_id: 1 
//         }
//     })
// }

  ///handle char form change
  handleNewCharacter = (event) => {
      this.setState({
          characterForm: {...this.state.characterForm, [event.target.name]: event.target.value}
      })
  }
  
  ////add new character to backend 
  createNewCharacter = (event) => {
      event.preventDefault()
     
      // console.log(this.state.characterForm)
     
      
      // .resp(resp => resp.json()).then(data => {console.log(data)})
      console.log("form sent?")
      // this.resetForm()
  }


   //test finish game --> send points to scoreboard
   finishGame = (points) => {
     console.log(this.state.characterForm)
    this.setState({
      characterForm: {...this.state.characterForm, score: points}
    }, () => {
      console.log(this.state.characterForm)
      fetch('http://localhost:3000/characters', {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(this.state.characterForm)}, 
              () => {
                fetch('http://localhost:3000/characters')
                  .then(resp => resp.json())
                  .then(characters => {
                    console.log(characters)
                      this.setState({
                          characters: characters
                      }, () => {
                        let highScores = characters.sort((a,b) => a.score > b.score ? 1 : -1).slice(0,15)
                        this.setState({
                          highScores: highScores
                        })
                      })
                }) 
            
              }
            )
            // .then(resp => resp.json())
            // .then(characters => {
            //   console.log(characters)
            //   this.setState({
            //     characters: characters
            //   }, () => {
            //     console.log(characters)
            //     let highScores = characters.sort((a,b) => a.score > b.score ? 1 : -1).slice(0,15)
            //     this.setState({
            //       highScores: highScores
            //     })
            //   })
            // })
            
    
    })

    

    
}

  render(){

    return (
   
      <div className="App">
         <Switch>
            <Route exact path="/" component={Login} /> 
            <Route exact path="/startscreen" 
            render={(props) => <StartScreen {...props} characterForm={this.state.     characterForm} createNewCharacter={this.createNewCharacter} handleNewCharacter={this.handleNewCharacter}/>}
            />
            <Route exact path="/game" 
            render={(props) => <Game {...props} characterName={this.state.characterForm.name} finishGame={this.finishGame} points={this.state.points} />}
            />
            <Route exact path="/scoreboard" 
             render={(props) => <ScoreBoard {...props} highScores={this.state.highScores} characterForm={this.state.characterForm} />}
            />
            <Route exact path="/signuppage" component={SignupPage} />
        </Switch> 
      </div>
     
    );
  }

}

export default App;
