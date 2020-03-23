import React from 'react';
import NavBar from './NavBar';
import { Link } from "react-router-dom";
import {Button} from "grommet";



class SignupPage extends React.Component {

    handleSubmit = (event) => {
        console.log(event.target)
    }

    render () {
        return (
            <div>
            <NavBar/>
              <div>
                <label>Welcome! </label>
              </div>
              <div >
                <form onSubmit={(event) => this.handleSubmit(event)}>
                  <label>
                    Username:
                    <input type="text" name="name" />
                  </label>
                  <br></br>
                  <label>
                    Password:
                    <input type="text" name="name" />
                  </label>
                      
                    <Button color="default" ><div><Link to="/startscreen">Begin Your Quest!</Link></div></Button>
                </form>
                 
              </div>
             
            </div>
        
           
          );
    }
    
  }
  
  export default SignupPage;