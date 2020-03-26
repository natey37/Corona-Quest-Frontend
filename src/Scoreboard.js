import React from 'react';
import NavBar from './NavBar';

import SimpleTable from './SimpleTable';
import cb6 from './cb6.png'



class ScoreBoard extends React.Component {


    // state = {
    //     highScores: []
    // }

    // componentDidMount(){
    //     fetch('http://localhost:3000/characters')
    //     .then(resp => resp.json())
    //     .then(characters => {
    //         this.setState({
    //             highScores: characters.sort((a,b) => a.score > b.score ? 1 : -1).reverse().slice(0, 15)
    //         })
    //     }) 
    // }

    componentDidMount(){
        this.props.resetEndGame()
    }



    render(){
       let newScores = this.props.highScores.sort((a,b) => a.score > b.score ? 1 : -1).reverse()
        return (

            <div className="Scoreboard" style={{backgroundImage: `url(${cb6})`}}>

                <NavBar/>
                <br></br>
                    {/* <h1 style={{textAlign: "center", fontStyle: 'italic', fontSize: '40px'}}>{this.props.userLogged ? this.props.characterForm.name.toUpperCase() + " your score is: " + this.props.characterForm.score + " !!!": "Click Play Game to Begin Your Quest!"}
                    <br></br>
                       <span>_______________________________________________</span>
                    </h1>       
                             
                    <h1 style={{textAlign: "center", fontStyle: 'italic'}}>Leader Board!</h1> */}

                    <SimpleTable userLogged={this.props.userLogged} characterForm={this.props.characterForm} highScores={this.props.userLogged ? newScores : this.props.highScores}/>

            </div>
          );
    }

}

export default ScoreBoard;

