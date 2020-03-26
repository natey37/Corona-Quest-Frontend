import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";


// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function SimpleTable(props) {

  const useStyles = makeStyles({
    table: {
      maxWidth: '50%',
      backgroundColor: '#f7b01f'
    },
  });
  
  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }
  
  function createData(username, character, score) {
    return { username, character, score};
  }
  
  const rows = props.highScores.map(score => createData(score.username, score.name, score.score))
  
  const classes = useStyles();

  return (
    <TableContainer component={Paper} align='center' style={{backgroundColor: '#008080'}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight: "bold", fontSize: 30 + 'px'}}>Username</TableCell>
            <TableCell align="right" style={{fontWeight: "bold", fontSize: 30 + 'px'}}>Character</TableCell>
            <TableCell align="right" style={{fontWeight: "bold", fontSize: 30 + 'px'}}>Score</TableCell>
            {/* <TableCell align="right"># times played</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" style={{fontSize: 20 + 'px'}}>
                     {row.username}
              </TableCell>
              <TableCell align="right" style={{fontSize: 20 + 'px'}}>{row.character}</TableCell>
              <TableCell align="right" style={{fontSize: 20 + 'px'}}>{row.score}</TableCell>
              {/* <TableCell align="right">{row.score}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}