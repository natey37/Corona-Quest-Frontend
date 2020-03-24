
import React from 'react';
import NavBar from './NavBar';
// import { Route } from 'react-router-dom';
import { Link, Redirect } from "react-router-dom";
import {Button} from "grommet";



class SignUp extends React.Component {

 
  render () {
    
    return (
      <div>
      <NavBar />
      {this.props.userLogged === true && <Redirect to='/startscreen' />}
      
        <br></br>
        <br></br>
        <div>
            <h2 style={{textAlign: "center"}}>Sign Up</h2>        
        </div>
        <div style={{textAlign: "center"}}>
          <form onSubmit={(event) => this.props.handleNewUserSubmit(event)}>
            <label>
              Username:
              <input onChange={(event) => this.props.handleNewUserChange(event)} value={this.props.userForm.username} type="text" name="username" />
            </label>
            <br></br>
            <label>
              Password:
              <input onChange={(event) => this.props.handleNewUserChange(event)} value={this.props.userForm.password} type="text" name="password" />
            </label>
            <br></br>
            <br></br>
           

              <input  type="submit" value="Create Account" ></input>
          </form>
          {this.props.userLogged === false && this.props.errors.map(error => <h3 key={error}>{error}</h3>)}
            
        </div>
        <br></br>
        <br></br>

        <div>
          <h4 style={{textAlign: "center"}}>OR</h4>
        </div>

        <br></br>
        <div>
            <h2 style={{textAlign: "center"}}>Login</h2>
        </div>
        <div style={{textAlign: "center"}}>
          <form onSubmit={(event) => this.props.handleLoginSubmit(event)}>
            <label>
              Username:
              <input onChange={(event) => this.props.handleLoginChange(event)} value={this.props.loginForm.username} type="text" name="username" />
            </label>
            <br></br>
            <label>
              Password:
              <input onChange={(event) => this.props.handleLoginChange(event)} value={this.props.loginForm.password} type="text" name="password" />
            </label>
            <br></br>
            <br></br>

              <input  type="submit" value="Sign In" ></input>
          </form>
         
            
        </div>
      </div>
  
     
    );
  }
  
}

export default SignUp;
