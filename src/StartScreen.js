import React from 'react';
import NavBar from './NavBar'


function StartScreen() {
  return (
     
        <div className="StartScreen">
        <NavBar/>
        <br></br>
            <div>
                Begin Your Corona Quest!
                <button>How to Play</button>
                <button>Start your Quest!</button>
            </div>
        </div>
    
     
  );
}

export default StartScreen;
