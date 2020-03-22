import React from 'react';
import NavBar from './NavBar';



class ScoreBoard extends React.Component {

    // state = {
    //     characters: []
    // }

    // componentDidMount(){
    //     fetch('http://localhost:3000/characters')
    //     .then(resp => resp.json())
    //     .then(characters => {
    //         this.setState({
    //             characters: characters
    //         })
    //     })
    // }

    render(){
        console.log(this.props)
        return (
            <div className="Scoreboard">
                <NavBar/>
                <br></br>
                 <h1>Leaders!</h1>

                {this.props.highScores.map(character => <h2 key={character.id}>Name: {character.name} - Score: {character.score} </h2>)}
            </div>
          );
    }

}

export default ScoreBoard;
