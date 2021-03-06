import React from 'react';
import StartScreen from './StartScreen'
import SignUp from './SignUp'
import ScoreBoard from './ScoreBoard'
import Game from './Game'
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from './history';
import NavBar from './NavBar'
import ShowPage from './ShowPage'

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
          username: '' 
      },
      userForm: {
        username: '', 
        password: '',
        passwordConfirmation: ''
      }, 
      userLogged: false,  
      loginForm: {
        username: '', 
        password: '', 
      },
      currentUser: null, 
      endGame: false,
      myChars: [],
      // seconds: 90,
      // timerPoints: 0
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

      // this.myInterval = setInterval(() => {
      //   const { seconds} = this.state
      //   if (seconds > 0) {
      //     this.setState(({ seconds }) => ({
      //       seconds: seconds - 1
      //     }))
      //   }
      //   if (seconds === 0) {
      //     clearInterval(this.myInterval)
      //   }
      // }, 1000)
  }

  // componentDidUnmount(){
  //   clearInterval(this.myInterval)
  // }

  //set user 
  setUser = (user) => {
    console.log(this.props.history)
    this.setState({
      currentUser: user
    }, () => {
      // this.props.history.push("/startscreen")
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
     
      this.setState({
        characterForm: {...this.state.characterForm, score: points},
        gameOver: true, 
        endGame: true 
      }, () => {
      console.log(this.state.characterForm)
      fetch('http://localhost:3000/characters', {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(this.state.characterForm)})
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                this.setState({
                  highScores: [...this.state.highScores, resp]
                })
            })
    },

      )
    // this.history.push('/scoreboard')
    // this.props.history.push("/startscreen")

  }



  resetEndGame = () => {
    this.setState({
      endGame: false 
    })
  }
  

  handleNewUserChange = (event) => {
    this.setState({
      userForm: {
        ...this.state.userForm, [event.target.name]: event.target.value
      }
    })
  }

  handleLoginChange = (event) => {
    this.setState({
      loginForm: {
        ...this.state.loginForm, [event.target.name]: event.target.value
      }
    })
  }

  handleNewUserSubmit = (event) => {
    event.preventDefault()

    if(this.state.userForm.password === this.state.userForm.passwordConfirmation) {
      fetch('http://localhost:3000/users', {
      method: "POST", 
      headers: {
          'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(this.state.userForm)
    })
    .then(resp => resp.json())
    .then(response => {
      console.log(response)
      if(response.errors){
        alert(response.errors)
      } else {
        this.setUser(response)
        this.setState({
              userLogged: true,
              characterForm: {...this.state.characterForm, user_id: response.user_id, username: response.user.username}
            })
     }
    })
    } else {
      alert("Passwords don't match!")
    }

  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    console.log("working")
    fetch('http://localhost:3000/login', {
      method: "POST", 
      headers: {
          'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(this.state.loginForm)
    })
    .then(resp => resp.json())
    .then(response => {
      console.log(response)
      if(response.errors){
        alert(response.errors)
      } else {
        this.setUser(response)
        this.setState({
          userLogged: true,
          characterForm: {...this.state.characterForm, user_id: response.id, username: response.username}

        })
      }
     
    })
   
  }

   getMyChars = () => {
  
      fetch(`http://localhost:3000/users/${this.state.characterForm.user_id}`)
      .then(resp => resp.json())
      .then(characters => {
          console.log(characters)
          if(characters.length === 0){
            this.setState({
              myChars: []
            })
          } else {
            this.setState({
              myChars: characters.sort((a,b) => a.score > b.score ? 1 : -1).reverse()
          })
          }
          
      })
  
   }

//    timerPoints = () => {
//     if(this.state.seconds > 80){
//         this.setState({
//             seconds: this.state.seconds + 500
//         })
//     } else if(this.state.seconds > 70){
//         this.setState({
//             timerPoints: this.state.timerPoints + 400
//         })
//     } else if(this.state.seconds > 60){
//         this.setState({
//             timerPoints: this.state.timerPoints + 300
//         })
//     } else if(this.state.seconds > 50){
//         this.setState({
//             timerPoints: this.state.timerPoints + 200
//         })
//     } else if(this.state.seconds > 40){
//         this.setState({
//             timerPoints: this.state.timerPoints + 100
//         })
//     } else if(this.state.seconds > 30){
//         this.setState({
//             timerPoints: this.state.timerPoints + 50
//         })
//     } else if(this.state.seconds > 20){
//         this.setState({
//             timerPoints: this.state.timerPoints + 25
//         })
//     } else if(this.state.seconds > 10){
//         this.setState({
//             timerPoints: this.state.timerPoints + 10
//         })
//     } else if(this.state.seconds > 0){
//         this.setState({
//             timerPoints: this.state.timerPoints + 5
//         })
//     }
// }

  render(){
    console.log(this.state.currentUser)
    console.log(this.state.highScores)
    return (
      
      <div className="App" >

          <div >
          <Router history={history}>
         <Switch>
            <Route exact path="/navbar"
            render={(props) => <NavBar {...props} userLogged={this.state.userLogged} />}/> 
            <Route exact path="/" 
            render={(props) => <SignUp {...props} setUser={this.setUser} userForm={this.state.userForm} handleNewUserChange={this.handleNewUserChange} handleNewUserSubmit={this.handleNewUserSubmit} userLogged={this.state.userLogged} errors={this.state.errors} loginForm={this.state.loginForm} handleLoginChange={this.handleLoginChange} handleLoginSubmit={this.handleLoginSubmit}/>}
            /> 
            <Route exact path="/startscreen" 
            render={(props) => <StartScreen {...props} characterForm={this.state.     characterForm} createNewCharacter={this.createNewCharacter} handleNewCharacter={this.handleNewCharacter} userLogged={this.state.userLogged}/>}
            />
            <Route exact path="/game" 
            render={(props) => <Game {...props} seconds={this.state.seconds} endGame={this.state.endGame}characterName={this.state.characterForm.name} characterForm={this.state.characterForm} finishGame={this.finishGame} points={this.state.points} userLogged={this.state.userLogged} />}
            />
            <Route exact path="/scoreboard" 
             render={(props) => <ScoreBoard {...props} resetEndGame={this.resetEndGame} highScores={this.state.highScores} characterForm={this.state.characterForm} userLogged={this.state.userLogged}/>}
            />
             <Route exact path="/show" 
             render={(props) => <ShowPage {...props} getMyChars={this.getMyChars}myChars={this.state.myChars} userLogged={this.state.userLogged}/>}
            />
        </Switch> 
        </Router>
        </div>
      </div>
     
    );
  }

}

export default App;
