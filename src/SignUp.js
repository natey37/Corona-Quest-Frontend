
import React from 'react';
import NavBar from './NavBar';
// import { Route } from 'react-router-dom';
import { Link, Redirect } from "react-router-dom";
import {Button} from "grommet";
import styled from "styled-components"



class SignUp extends React.Component {

 
  render () {

    const Button = styled.button`
    background: #f7b01f;
    
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid red;
    border-radius: 3px;
    `;
    
    return (
      <div style={{backgroundColor: '#008080', height:"100vh"}}>
      <NavBar />
      {this.props.userLogged === true && <Redirect to='/startscreen' />}
    

        <br></br>
        <br></br>
        <div>
            <h2 style={{textAlign: "center"}}>Login</h2>
        </div>
        <div style={{textAlign: "center"}}>
          <form onSubmit={(event) => this.props.handleLoginSubmit(event)}>
            <label>
              Username:
              <input onChange={(event) => this.props.handleLoginChange(event)} value={this.props.loginForm.username} type="text" name="username" style={{marginRight: '75px'}} />
            </label>
            <br></br>
            <br></br>
            <label>
              Password:
              <input onChange={(event) => this.props.handleLoginChange(event)} value={this.props.loginForm.password} type="text" name="password" style={{marginRight: '70px'}}/>
            </label>
            <br></br>
            <br></br>

            <Button  type="submit" value="Log-In" >Log In</Button>
          </form>
         
            
        </div>



        
        <br></br>

        <div>
          <h4 style={{textAlign: "center"}}>OR</h4>
        </div>

        <br></br>
        <div>
            <h2 style={{textAlign: "center"}}>Sign Up</h2>        
        </div>
        <div style={{textAlign: "center"}}>
          <form onSubmit={(event) => this.props.handleNewUserSubmit(event)}>
            <label>
              Username:    
              <input onChange={(event) => this.props.handleNewUserChange(event)} value={this.props.userForm.username} type="text" name="username" style={{marginRight: '70px'}}/>
            </label>
            <br></br>
            <br></br>
            <label>
              Password:
              <input onChange={(event) => this.props.handleNewUserChange(event)} value={this.props.userForm.password} type="text" name="password" style={{marginRight: '65px'}}/>
            </label>
            <br></br>
            <br></br>
            <label>
              Password Confirmation:
              <input onChange={(event) => this.props.handleNewUserChange(event)} value={this.props.userForm.passwordConfirmation} type="text" name="passwordConfirmation" style={{marginRight: '155px'}} />
            </label>
            <br></br>
            <br></br>
           

              <Button  type="submit" value="Create Account" >Create Account</Button>
          </form>
          {/* {this.props.userLogged === false && this.props.errors.map(error => <h3 key={error}>{error}</h3>)} */}
            
        </div>
       
      </div>
  
     
    );
  }
  
}

export default SignUp;
