import React from "react";
import "./Footer.css";
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import { Grid } from "@mui/material";

function Footer() {
  return (
    <div className="main-footer">
      <div className="1stLine">
        <h4 align="center">Cal Phase Time 
        <Link href="https://github.com/Frederic-Chopin/Cal-Hacks"> <GitHubIcon /> </Link>
        {/* <a> <Button onclick = {() => {<Link href="https://github.com/Frederic-Chopin/Cal-Hacks"> <GitHubIcon /> </Link>}}> 
            <GitHubIcon />
            </Button> 
        </a> */}
        </h4>
        <p align="center" >
            &copy;{new Date().getFullYear()} CalHacks 8.0 | All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;