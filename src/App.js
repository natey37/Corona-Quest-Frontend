import React from 'react';
import StartScreen from './StartScreen'
import Login from './Login'
import Scoreboard from './Scoreboard'
import Game from './Game'
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Switch>
          <Route exact path="/" component={Login} /> 
          <Route exact path="/startscreen" component={StartScreen} />
          <Route exact path="/scoreboard" component={Scoreboard} />
          <Route exact path="/game" component={Game} />

      </Switch>
    </div>
   
    
  );
}

export default App;
