import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




export default function SimpleTable2(props) {

  const useStyles = makeStyles({
    table: {
      maxWidth: '50%',
      backgroundColor: '#f7b01f'
    },
  });
  
  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }
  
  function createData(id, character, score) {
    return { id, character, score};
  }
  
  const rows = props.characters.map((score,index) => createData(score.id, score.name, score.score))
  
  const classes = useStyles();

  return (
    <TableContainer component={Paper} align='center' style={{backgroundColor: '#008080'}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
            <TableRow style={{fontWeight: "bold", fontSize: 30 + 'px', textAlign: 'center'}}>
            Total Number of Characters Played --->  {props.characters.length}
            </TableRow>
          <TableRow>
            <TableCell style={{fontWeight: "bold", fontSize: 30 + 'px'}}>Number</TableCell>
            <TableCell align="right" style={{fontWeight: "bold", fontSize: 30 + 'px'}}>Character</TableCell>
            <TableCell align="right" style={{fontWeight: "bold", fontSize: 30 + 'px'}}>Score</TableCell>
            {/* <TableCell align="right"># times played</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow >
              <TableCell component="th" scope="row" style={{fontSize: 20 + 'px'}}>
                    {row.id}
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