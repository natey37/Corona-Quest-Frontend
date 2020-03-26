import React from 'react';
import NavBar from './NavBar'
import { Link, Redirect } from "react-router-dom";
import { Box, Grommet, Nav, Header, Button } from "grommet";
import styled from "styled-components"
import cb5 from './cb5.png'


class StartScreen extends React.Component {


    state = {
        instructions: false, 
        submitted: false
    }
        
    ///show instructions if button is pressed 
    showInstructions = () => {
        this.setState({
            instructions: !this.state.instructions
        })
    }

    submitCharacter = (event) => {
        event.preventDefault()
        this.setState({
            submitted: true
        })
    }

    instructionText = () => {
        return  (
        <div>  
            <h3 style={{textAlign: 'center', fontSize: "30px"}}>
                How to Play : Move your character around the map to discover hidden treasures but be wary of the corona out to get you!  
            </h3>     
            <h4> 
            <h4 style={{textAlign: 'center',fontSize: "30px"}}>a - to move left </h4> 
            <h4 style={{textAlign: 'center',fontSize: "30px"}}>d - to move right </h4> 
            <h4 style={{textAlign: 'center',fontSize: "30px"}}>w - to move up </h4> 
            <h4 style={{textAlign: 'center',fontSize: "30px"}}>x - to move down </h4> 
            <h4 style={{textAlign: 'center',fontSize: "30px"}}>q - diagonally up / left </h4> 
            <h4 style={{textAlign: 'center',fontSize: "30px"}}>r - diagonally up / right </h4> 
            <h4 style={{textAlign: 'center',fontSize: "30px"}}>z - diagonally down / left</h4> 
            <h4 style={{textAlign: 'center',fontSize: "30px"}}>c - diagonally down / right </h4> 

              
            </h4>       
       
        </div>  
    )}
   

    render(){

        const Button = styled.button`
            background: #6bfa0b;
            
            font-size: 1em;
            margin: 1em;
            padding: 0.25em 1em;
            border: 2px solid red;
            border-radius: 3px;
            `;
        return (
     
            <div className="StartScreen" style={{backgroundImage: `url(${cb5})`, height:"100vh"}}>
            <NavBar/>
            {this.props.userLogged === false && <Redirect to='/' />}
            {this.state.submitted === true && <Redirect to='/game' />}
                <div >
                {/* <Button  type="submit" value="Log-In" style={{width: "200px", height: '40px', fontSize: "22px"}}>Log In</Button> */}
                    {/* <h1 style={{textAlign: 'center', fontSize: "60px"}}>Begin Your Corona Quest!</h1> */}
                        <div style={{textAlign: 'center', fontSize: '30px'}}>
                            <Button style={{width: "200px", height: '40px', fontSize: "22px"}}onClick={this.showInstructions}>
                                Instructions!
                            </Button>
                        </div>
                       
                    
                    {this.state.instructions ? this.instructionText() : null}

                    
        
                </div>
    
               
                <br></br>
                <br></br>
                <h1 style={{textAlign: 'center', fontSize: '40px'}}>Name your Character! </h1>
                <div style={{textAlign: 'center'}}>
                    <form onSubmit={(event) => this.submitCharacter(event)}>
                    
                            <input onChange={this.props.handleNewCharacter}
                            value={this.props.characterForm.name} 
                            type="text" name="name" />
                    <br></br>
                    <br></br>
                        <div style={{fontSize: "60px"}}>
                        Begin Your Corona Quest {this.props.characterForm.name.toUpperCase()}
                        </div>
                        <br></br>
                        <Button style={{width: "200px", height: '40px', fontSize: "22px"}} >
                           Start
                        </Button>
                    </form>
                </div>
               

                
            </div>
        
         
      );
    }
  
}

export default StartScreen;
