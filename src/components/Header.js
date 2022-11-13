import * as React from 'react';
import {Box, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Header() {

    return (
        <Box sx={{
            flexGrow: 1,
            padding: 2
        }}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Typography align="center">
                        Title
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography align="center">
                        Description
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography align="center">
                        Deadline
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography align="center">
                        Priority
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography align="center">
                        Is Complete
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography align="center">
                        Action
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}