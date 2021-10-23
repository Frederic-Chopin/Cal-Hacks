import './App.css';
import MyClass from './MyClass.js';
import SearchBar from './SearchBar.js'
import ClassList from './ClassList.js'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      phase time
      <SearchBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item m={12}>
            <Item> <ClassList /></Item>
          </Grid>
          <Grid item m={12}>
            <Item><MyClass /></Item>
          </Grid>

        </Grid>
    </Box>
    </div>
  );
}

export default App;
