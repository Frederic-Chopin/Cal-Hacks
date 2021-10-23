import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';

function createData(name, phase) {
  return {name: name, phase: phase};
}

const rows = [
  createData('cs61a', 'phase 1'),
  createData('cs61b', 'phase 1'),
  createData('cs61c', 'phase 1'),
  createData('cs70', 'phase 2'),
];

function MyClass() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Class Name </TableCell>
            <TableCell align="center">Phase Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
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
