
import React from 'react';
import NavBar from './NavBar';
// import { Route } from 'react-router-dom';
import { Link, Redirect } from "react-router-dom";
import {Button} from "grommet";



class LogIn extends React.Component {

 
  render () {
    
    return (
      <div>
      <NavBar/>
      {this.props.userLogged === true && <Redirect to='/startscreen' />}
        <div>
          <label>Log In </label>
        </div>
        <div >
          <form onSubmit={(event) => this.props.handleSubmit(event)}>
            <label>
              Username:
              <input onChange={(event) => this.props.handleChange(event)} value={this.props.userForm.username} type="text" name="username" />
            </label>
            <br></br>
            <label>
              Password:
              <input onChange={(event) => this.props.handleChange(event)} value={this.props.userForm.password} type="text" name="password" />
            </label>
              <input  type="submit" value="Log In" ></input>
          </form>
          {this.props.userLogged === false && this.props.errors.map(error => <h3 key={error}>{error}</h3>)}
            <Button color="default"><div><Link to="/signuppage">Create New User!</Link></div></Button>
        </div>
       
      </div>
  
     
    );
  }
  
}

export default LogIn;
