import './App.css';
import * as React from 'react';
import MyClass from './MyClass.js';
import SearchBar from './SearchBar.js'
import ClassList from './ClassList.js'
import Footer from './Footer.js';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { CenterFocusStrong } from '@material-ui/icons';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function MainPage() {

  const [classListRows, setClassListRows] = React.useState(["", ""]);
  const [coursePhase, setCoursePhase] = React.useState([]);
  const [checkedCourses, setCheckedCourses] = React.useState([]);
  
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
      .then(json => {
        
        console.log('json:', json.phases)
        for (const courseName in json.phases) {
          console.log(`${courseName}: phase = ${json.phases[courseName]}`)
        }
      });
  };

    if (classListRows[0] !== "") {
      return (
        <div className="App">
          <h1>Phase Time</h1>
          <form>
        <button onClick={handlePost}>Post</button>
      </form>
          <SearchBar onClick={setClassListRows}/>
      `    <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <Item> <ClassList newRawRow={classListRows} setCheckedCourses={setCheckedCourses}/> </Item>
              </Grid>
              <Grid item md={6}>
                <Item><MyClass courses={checkedCourses} /></Item>
              </Grid>
            </Grid>
            <Footer />
          </Box>`
        </div>
    );
    } else {
      return (
        <div className="App-header">
          <h1>Phase Time</h1>
          <SearchBar onClick={setClassListRows}/>
          <Footer />
        </div>
      );
    }

}

export default MainPage;