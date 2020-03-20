
import React from 'react';
import Blue_Virus from './Blue_Virus.png';
import Pink_Virus from './Pink_Virus.png';
import NavBar from './NavBar';
// import { Route } from 'react-router-dom';


function LogIn() {
  return (
    <div>
    <NavBar/>
       {/* <div className="LogIn">
            <div style={{fontSize: 100 + 'px'}}>
            <img src={Pink_Virus}></img>
            CORONA QUEST
            <img src={Blue_Virus}></img>
            </div>
             */}

      <div>
        <label>Log In </label>
      </div>
      <div >
        <form>
          <label>
            Username:
            <input type="text" name="name" />
          </label>
          <br></br>
          <label>
            Password:
            <input type="text" name="name" />
          </label>
            <input type="submit" value="Log In" />
        </form>
          <button>Create New User!</button>
      </div>
     
    </div>

   
  );
}

export default LogIn;
