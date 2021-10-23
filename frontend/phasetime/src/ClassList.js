import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import './App.css';

function createData(name, unit, reserved, gradReq) {
  return {name: name, unit: unit, reserved:reserved, gradReq: gradReq};
}

const rows = [
  createData('cs61a', '4', 'yes', 'yes'),
  createData('cs61b', '4', 'yes', 'yes'),
  createData('cs61c', '4', 'yes', 'yes'),
  createData('cs70', '4', 'yes', 'yes'),
];

function ClassList() {
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
            > <Checkbox defaultChecked />
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
