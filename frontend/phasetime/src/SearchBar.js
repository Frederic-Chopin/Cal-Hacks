import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
 
export default function SearchBar() {
 return (
   <div>
     <Box
       sx={{
         width: 800,
         height: 100,
         // bgcolor: 'primary.dark',
       }}
     >
       <Grid container columnSpacing={2} >
         <Grid item>
           <Autocomplete
             disablePortal
             id="combo-box-demo"
             options={courseDepartments}
             sx={{ width: 200 }}
             renderInput={(params) => (
               <TextField {...params} label="Department" />
             )}
           />
         </Grid>
         <Grid item>
           <Autocomplete
             disablePortal
             id="combo-box-demo"
             options={courseNumbers}
             sx={{ width: 200 }}
             renderInput={(params) => (
               <TextField {...params} label="Course Number" />
             )}
           />
         </Grid>
        <Grid item>
            <Button
               type="submit"
               variant="contained"
               // sx={{ mt: 3, mb: 2 }}
            >
               Add Course
           </Button>
        </Grid>
         </Grid>
           
     </Box>
   </div>
 );
}
 
const courseDepartments = [{ label: "COMPSCI" }];
const courseNumbers = [
 { label: "10" },
 { label: "160" },
 { label: "184" },
 { label: "189" },
 { label: "195" },
 { label: "152" },
 { label: "161" },
 { label: "170" },
 { label: "172" },
 { label: "174" },
 { label: "186" },
 { label: "61A" },
 { label: "61B" },
 { label: "61C" },
];
