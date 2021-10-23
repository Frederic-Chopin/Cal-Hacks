import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import * as d3 from 'd3';
import data from './data.csv';

function getData() {
    var courseNames = [];
    d3.csv(data, function(data) {
        console.log(data.courseName.toUpperCase());
        courseNames.push({ label: data.courseName.toUpperCase() });
    });
    console.log("courseNames:\n", courseNames);
    return courseNames;
}

const courseNames = getData()

export default function SearchBar() {

    return (
        <div>
        <Box
            sx={{
            m: 2,
            }}
        >
            <Grid
            container
            columnSpacing={2}
            alignItems="center"
            justifyContent="center"
            >
            <Grid item>
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={courseNames}
                sx={{ width: 350 }}
                renderInput={(params) => (
                    <TextField {...params} label="Course Name" />
                    )}
                    />
                </Grid>
                <Grid item>
                    <Button
                    type="submit"
                    variant="contained"
                    sx={{ height: 53 }}
                    >
                    Add Course
                    </Button>
                </Grid>
                </Grid>
            </Box>
        </div>
    );
}

