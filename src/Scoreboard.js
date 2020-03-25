import React from 'react';
import NavBar from './NavBar';
import { Grommet, Box, List } from "grommet";
import { grommet } from "grommet/themes";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import { FixedSizeList } from 'react-window';



class ScoreBoard extends React.Component {

    renderRow = (props) => {
        const { index, style } = props;
      
        return (
          <ListItem button style={style} key={index}>
            <ListItemText primary={`Item ${index + 1}`} />
          </ListItem>
        );
      }

    render(){
        console.log(this.props.highScores)
        return (

            <div className="Scoreboard">
               
                <NavBar/>
                {/* <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
                    {this.renderRow}
                </FixedSizeList> */}
                <Grommet theme={grommet}>
                    <h1 style={{textAlign: "center"}}>{this.props.userLogged ? this.props.characterForm.name.toUpperCase() + "your score is: " + this.props.characterForm.score + " !!!": "Click Play Game to Begin Your Quest!"}
                    </h1>
                    <br></br>
                    <h1 style={{textAlign: "center"}}>Leaders!</h1>
                    <Box align="center" pad="large">
                        <List data={this.props.highScores.map(score => score.name)} />
                        {/* <List data={this.props.highScores.map(score => score.score)} /> */}
                    </Box>
                   
                </Grommet>
            </div>

            // <div className="Scoreboard">
            //     <NavBar/>
            //     <br></br>
            //      <h1>Your score was {this.props.characterForm.score}</h1>
            //      <h1>Leaders!</h1>

            //     {this.props.highScores.map(character => <h2 key={character.id}>Name: {character.name} - Score: {character.score} </h2>)}
            // </div>
          );
    }

}

export default ScoreBoard;

