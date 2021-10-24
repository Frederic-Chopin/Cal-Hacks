import * as React from 'react';
// import { useState } from 'react-usestateref';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';
import { precisionPrefix } from 'd3-format';

function createData(name, phase) {
  return {name: name, phase: phase};
}

// const rows = [
//   createData('cs61a', 'phase 1'),
//   createData('cs61b', 'phase 1'),
//   createData('cs61c', 'phase 1'),
//   createData('cs70', 'phase 2'),
// ];

function MyClass(props) {

  const [rows, setRows] = React.useState([]);
  const [query, setQuery] = React.useState({"courses": []});


  React.useEffect(
    () => {
      var newQuery = {"courses": [] };
      for (const courseName of props.courses) {
        newQuery.courses.push({ "courseName": courseName, "priority": 5 });
      }
      setQuery(newQuery);
      console.log("query:", query);

      if (query.courses.length > 0) {
        fetch('http://localhost:5000/phase/post', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(query)
        })
          .then(response => response.json())
          .then(json => {
            console.log("json phases:", json.phases);
            let newRows = [];
            for (const course in json.phases) {
              console.log("json phases course:", course, json.phases[course]);
              newRows = newRows.concat([{ name: course, phase: json.phases[course] }]);
            }
            console.log("newRows:", newRows);
            setRows(newRows);
          });
      }
      console.log("myClass rows:\n", rows);

    }, [props.courses]
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Class Name </TableCell>
            <TableCell align="center">Phase Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.phase}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyClass;
