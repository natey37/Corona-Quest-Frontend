import React from 'react';
import StartScreen from './StartScreen'
import Login from './Login'
import Scoreboard from './Scoreboard'
import Gameboard from './Gameboard'
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Switch>
          <Route exact path="/" component={Login} /> 
          <Route exact path="/startscreen" component={StartScreen} />
          <Route exact path="/scoreboard" component={Scoreboard} />
          <Route exact path="/gameboard" component={Gameboard} />
      </Switch>
    </div>
   
    
  );
}

export default App;
