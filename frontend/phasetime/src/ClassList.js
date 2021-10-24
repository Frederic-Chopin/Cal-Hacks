import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Switch from '@mui/material/Switch';
import './App.css';



function ClassList(props) {
  var empty = true

  const ratings = [
    {
      value: 1,
      label: 'Unimportant',
    },
    {
      value: 5,
      label: 'Average',
    },
    {
      value: 10,
      label: 'Important',
    },
  ];

  const [rows, setRows] = React.useState([]);
  const [state, flipstate] = React.useState(false);

  function createData(name, unit, priority, toDelete, exist) {
    if (name === "") {
      return [];
    }
  
    // var exist = false;
    rows.forEach(row => {
      if (row.name === name) {
        exist = true;
      }
    })
    if (!exist) {
      // empty = false;
      return {name: name, unit: unit, priority:priority, delete:toDelete};
    } else {
      return [];
    }
  }

  const deleteRow = (name) => {
    var newRows = rows;
    rows.forEach(row => {
      if (row.name === name) {
        let i = rows.indexOf(row);
        newRows.splice(i, 1);
      }
    })
    setRows(newRows);
    flipstate(!state);
  }

  React.useEffect(
    () => {
      console.log('reset rows');
      setRows(
        rows.concat(
          // createData(props.newRawRow[0], props.newRawRow[1], <Switch  defaultChecked />, <Switch  defaultChecked />)
          createData( 
            // <Box sx={{ width: 50, m: 2}}>
            //   {props.newRawRow[0]}
            // </Box>,s
            props.newRawRow[0],
            // <Box sx={{ width: 50, m: 2}}>
            //   {props.newRawRow[1]}
            // </Box>,   
            props.newRawRow[1], 
            <Box sx={{ width: 200, m: 2}}>
              <Slider
                aria-label="Priority"
                defaultValue={5}
                valueLabelDisplay="auto"
                step={1}
                marks = {ratings}
                min={1}
                max={10}
              />
            </Box>,
                <IconButton aria-label="delete" >
                <DeleteIcon />
              </IconButton>
          )
        )
      );
      console.log("rows:\n", rows);
    }, props.newRawRow);

  var checkedCourses = [];

  const handleCheck = (event) => {
    console.log(event.target.checked, event.target.name);
    if (event.target.checked) {
      if (!checkedCourses.includes(event.target.name)) {
        checkedCourses.push(event.target.name);
      }
    } else {
      if (checkedCourses.includes(event.target.name)) {
        checkedCourses = checkedCourses.filter(function(item) {
          return item !== event.target.name;
      })
      }
    }
  }


  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 300}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">select </TableCell>
            <TableCell align="center">Class Name </TableCell>
            <TableCell align="center">unit</TableCell>
            <TableCell align="center">Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            > 
              <TableCell align="center">
                <Checkbox name={row.name} onChange={handleCheck}/>
              </TableCell>
              <TableCell align="center" component="th" scope="row"> {row.name}</TableCell>
              <TableCell align="center">{row.unit}</TableCell>
              <TableCell align="center">{row.priority}</TableCell>
              <TableCell align="center" onClick={() => deleteRow(row.name)}>{row.delete}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
  
}

export default ClassList;
