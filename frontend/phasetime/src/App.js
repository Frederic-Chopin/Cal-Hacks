import './App.css';
import * as React from 'react';
import MyClass from './MyClass.js';
import SearchBar from './SearchBar.js'
import ClassList from './ClassList.js'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

  const [classListRows, setClassListRows] = React.useState(["", ""])
  const [coursePhase, setCoursePhase] = React.useState([])
  
  // React.useEffect(() => {
  //   fetch("/phase").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setCoursePhase(data);
  //       console.log(data);
  //     }
  //   )
  // }, classListRows);

  const handlePost = e => {
    e.preventDefault();
    fetch('http://localhost:5000/phase/post', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"courses": [
        {"courseName": "COMPSCI 188", "priority": 8},
        {"courseName": "EE 120", "priority": 3},
      ]})
    })
      .then(response => response.json())
      .then(json => console.log('json:', json));
  };

  return (
    <div className="App">
      <h1>phase time</h1>

      <form>
        <button onClick={handlePost}>Post</button>
      </form>

      <SearchBar onClick={setClassListRows}/>
      
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Item> <ClassList newRawRow={classListRows}/></Item>
          </Grid>
          <Grid item md={6}>
            <Item><MyClass rows={coursePhase}/></Item>
          </Grid>

        </Grid>
    </Box>
    </div>
  );
}

export default App;
