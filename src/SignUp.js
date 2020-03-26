
import React from 'react';
import NavBar from './NavBar';
// import { Route } from 'react-router-dom';
import { Link, Redirect } from "react-router-dom";
import {Button} from "grommet";
import styled from "styled-components"
import coronaBackground from './coronaBackground.png';
import cb2 from './cb2.png'
import cb3 from './cb3.png'
import cb4 from './cb4.png'
class SignUp extends React.Component {

 
  render () {

    const Button = styled.button`
    background: #6bfa0b;
    
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid red;
    border-radius: 3px;
    `;

    // backgroundColor: '#008080'
    return (
      <div style={{backgroundImage: `url(${cb2})`, height:"100vh"}}>
      <NavBar />
      {this.props.userLogged === true && <Redirect to='/startscreen' />}
    

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      
        <div>
            <h2 style={{textAlign: "center"}}>Login</h2>
        </div>
        <div style={{textAlign: "center"}}>
          <form onSubmit={(event) => this.props.handleLoginSubmit(event)}>
            <label style={{fontSize: "30px"}}>
              Username:
              <input onChange={(event) => this.props.handleLoginChange(event)} value={this.props.loginForm.username} type="text" name="username" style={{marginRight: '75px'}} />
            </label>
            <br></br>
            <br></br>
            <label style={{fontSize: "30px"}}>
              Password:
              <input onChange={(event) => this.props.handleLoginChange(event)} value={this.props.loginForm.password} type="text" name="password" style={{marginRight: '70px'}}/>
            </label>
            <br></br>

            <Button  type="submit" value="Log-In" style={{width: "200px", height: '40px', fontSize: "22px"}}>Log In</Button>
          </form>
         
            
        </div>



        
        

        <div>
          <h4 style={{textAlign: "center"}}>OR</h4>
        </div>

        
        <div>
            <h2 style={{textAlign: "center"}}>Sign Up</h2>        
        </div>
        <div style={{textAlign: "center"}}>
          <form onSubmit={(event) => this.props.handleNewUserSubmit(event)}>
            <label style={{fontSize: "30px"}}>
              Username: 
              <input onChange={(event) => this.props.handleNewUserChange(event)} value={this.props.userForm.username} type="text" name="username" style={{marginRight: '70px'}}/>
            </label>
            <br></br>
            <br></br>
            <label style={{fontSize: "30px"}}>
              Password:
              <input onChange={(event) => this.props.handleNewUserChange(event)} value={this.props.userForm.password} type="text" name="password" style={{marginRight: '65px'}}/>
            </label>
            <br></br>
            <br></br>
            <label style={{fontSize: "30px"}}>
              Password Confirmation:
              <input onChange={(event) => this.props.handleNewUserChange(event)} value={this.props.userForm.passwordConfirmation} type="text" name="passwordConfirmation" style={{marginRight: '230px'}} />
            </label>
            <br></br>
           

            <Button  type="submit" value="Create-Account" style={{width: "200px", height: '40px', fontSize: "22px"}}>Create Account</Button>          
            </form>
          {/* {this.props.userLogged === false && this.props.errors.map(error => <h3 key={error}>{error}</h3>)} */}
            
        </div>
       
      </div>
  
     
    );
  }
  
}

export default SignUp;
