import React from "react";
import "./Header.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
//   return (
//     <Header>
//       <div className="head">
//         <h2 align="left">Cal Phase Time </h2>
//         <p align="center" >
//             {/* &copy;{new Date().getFullYear()} CalHacks 8.0 | All rights reserved */}
//         </p>
//       </div>
//     </Header>
//   );
return (
    // <Header>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phase Time
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    // </Header>
  );
}

export default Header;