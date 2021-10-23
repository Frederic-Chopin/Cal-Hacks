import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import './App.css';



function ClassList(props) {

  const [rows, setRows] = React.useState([]);
  
  function createData(name, unit, reserved, gradReq) {
    if (name === "") {
      return [];
    }
  
    var exist = false;
    rows.forEach(row => {
      if (row.name === name) {
        exist = true;
      }
    })
    if (!exist) {
      return {name: name, unit: unit, reserved:reserved, gradReq: gradReq};
    } else {
      return [];
    }
  }

  React.useEffect(
    () => {
      console.log('reset rows');
      setRows(
        rows.concat(
          createData(props.newRawRow[0], props.newRawRow[1], <Switch  defaultChecked />, <Switch  defaultChecked />)
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">select </TableCell>
            <TableCell align="center">Class Name </TableCell>
            <TableCell align="center">unit</TableCell>
            <TableCell align="center">reserved</TableCell>
            <TableCell align="center">gradReq</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            > 
              <TableCell align="center">
                <Checkbox defaultChecked name={row.name} onChange={handleCheck}/>
              </TableCell>
              <TableCell align="center" component="th" scope="row"> {row.name}</TableCell>
              <TableCell align="center">{row.unit}</TableCell>
              <TableCell align="center">{row.reserved}</TableCell>
              <TableCell align="center">{row.gradReq}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ClassList;
