import './App.css';
import * as React from 'react';
import MainPage from './MainPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  // const [classListRows, setClassListRows] = React.useState(["", ""]);
  // const [coursePhase, setCoursePhase] = React.useState([]);
  // const [checkedCourses, setCheckedCourses] = React.useState([]);

  //   if (classListRows[0] !== "") {
  //     return (
  //       <div className="App">
  //         <h1>Phase Time</h1>
  //         <SearchBar onClick={setClassListRows}/>
  //     `    <Box sx={{ flexGrow: 1 }}>
  //           <Grid container spacing={2}>
  //             <Grid item md={6}>
  //               <Item> <ClassList newRawRow={classListRows} setCheckedCourses={setCheckedCourses}/> </Item>
  //             </Grid>
  //             <Grid item md={6}>
  //               <Item><MyClass courses={checkedCourses} /></Item>
  //             </Grid>
  //           </Grid>
  //         </Box>`
  //       </div>
  //   );
  //   } else {
  //     return (
  //       <div className="App-header">
  //         <h1>Phase Time</h1>
  //         <SearchBar onClick={setClassListRows} />
  //         {/* <ClassList newRawRow={classListRows}/> */}
  //       </div>
  //     );
  //   }

  return (
    <main>
      <Switch>
        <Route Path="https://phase-time.com/" component={MainPage} exact></Route>
        <Route component={Error}></Route>
      </Switch>
    </main>
  )
}

export default App