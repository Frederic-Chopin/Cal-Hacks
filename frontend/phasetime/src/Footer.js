import React from "react";
import "./Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid } from "@mui/material";

function Footer() {
  return (
    <div className="main-footer">
      <div className="1stLine">
        <h4 align="center">Cal Phase Time <hr />
        <Grid align="center" item xs={8}>
            <GitHubIcon />
        </Grid>
        </h4>
      </div>
      <div className="2ndLine">
        <p align="center" className="col-sm">
            &copy;{new Date().getFullYear()} CalHacks 8.0 | All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;