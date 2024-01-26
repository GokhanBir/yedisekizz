import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Mainsearch from "./Mainsearch";
import img from "../Image/LOGO.png";


export default function Main() {
    return (
        <Box sx={{ flexGrow: 1 }} >

            <div style={{ backgroundImage: `url(${img})`, height: "100vh", position: "relative", opacity: "0.8", backgroundSize: "cover" }}></div>
            <Box sx={{ position: "absolute", top: "0", width: "99vw" }}>

                <Grid container
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: "100vh" }}
                >
                    <Grid item >
                        <Mainsearch />
                    </Grid>

                </Grid>
            </Box>

        </Box>

    );
}


/*

        <Box sx={{paddingTop:"5px",flexGrow: 1,backgroundImage:`url(${img2})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }} >
           
                <Grid container
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: "100vh" }}
                >
                    <Grid item >
                        <Mainsearch />
                    </Grid>

                </Grid>
           
        </Box>

*/
