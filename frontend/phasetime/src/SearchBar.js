import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import * as d3 from 'd3';
import data from './data.csv';

function getData() {
    var courseNames = [];
    d3.csv(data, function(data) {
        // console.log(data.courseName.toUpperCase());
        // console.log("data unit:", data);
        courseNames.push({ label: data.courseName.toUpperCase(), unit: data.unit });
    });
    // console.log("courseNames:\n", courseNames);
    return courseNames.sort((a, b) => (a.label > b.label) ? 1 : -1);
}

const courseNames = getData();



let courseSelected = "";

export default function SearchBar(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("adding course");
        console.log("tags: ", courseSelected.label);
        console.log("units:", courseSelected.unit);
        props.onClick([courseSelected.label, courseSelected.unit]);
    };

    return (
        <div>
        <Box
            component="form"
            sx={{
            m: 2
            }}
            onSubmit={(event) => handleSubmit(event)}
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
                // freeSolo
                id="combo-box-demo"
                options={courseNames}
                sx={{ width: 500 }}
                onChange={(event, value) =>
                    {
                      courseSelected = (value)
                    }
                }
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

