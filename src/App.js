import React from 'react';
import StartScreen from './StartScreen'
import SignUp from './SignUp'
import ScoreBoard from './ScoreBoard'
import Game from './Game'
import LogIn from './LogIn'
import { Router, Route, Switch } from "react-router-dom";
import history from './history';


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
          user_id: null, 
      },
      charID: null,
      userForm: {
        username: '', 
        password: ''
      }, 
      userLogged: null, 
      errors: []
    }

  //fetch characters
  componentDidMount(){
      fetch('http://localhost:3000/characters')
      .then(resp => resp.json())
      .then(characters => {
          this.setState({
              characters: characters,
              highScores: characters.sort((a,b) => a.score > b.score ? 1 : -1).reverse().slice(0, 15)
          })
      }) 
  }

  ///handle char form change
  handleNewCharacter = (event) => {
      this.setState({
          characterForm: {...this.state.characterForm, [event.target.name]: event.target.value}
      })
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
    })
    history.push('/scoreboard')
}

  

  handleLoginChange = (event) => {
    this.setState({
      userForm: {
        ...this.state.userForm, [event.target.name]: event.target.value
      }
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/users', {
      method: "POST", 
      headers: {
          'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(this.state.userForm)
    })
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
      if(resp.status === "User created successfully"){
        this.setState({
          userLogged: true,
          characterForm: {...this.state.characterForm, user_id: resp.user_id}
        })
      } else {
        this.setState({
          userLogged: false,
          errors: resp.errors
        })
      }
    })
    
  }

  render(){

    return (
   
      <div className="App">
          <Router history={history}>
         <Switch>
            <Route exact path="/" 
            render={(props) => <SignUp {...props} userForm={this.state.userForm} handleChange={this.handleLoginChange} handleSubmit={this.handleLoginSubmit}userLogged={this.state.userLogged} errors={this.state.errors}/>}
            /> 
            <Route exact path="/startscreen" 
            render={(props) => <StartScreen {...props} characterForm={this.state.     characterForm} createNewCharacter={this.createNewCharacter} handleNewCharacter={this.handleNewCharacter} userLogged={this.state.userLogged}/>}
            />
            <Route exact path="/game" 
            render={(props) => <Game {...props} characterName={this.state.characterForm.name} characterForm={this.state.characterForm} finishGame={this.finishGame} points={this.state.points} userLogged={this.state.userLogged} />}
            />
            <Route exact path="/scoreboard" 
             render={(props) => <ScoreBoard {...props} highScores={this.state.highScores} characterForm={this.state.characterForm} userLogged={this.state.userLogged}/>}
            />
            <Route exact path="/signuppage" component={LogIn} />
        </Switch> 
        </Router>
      </div>
     
    );
  }

}

export default App;
