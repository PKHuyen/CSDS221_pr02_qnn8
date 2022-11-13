import * as React from "react";
import {Box, Checkbox, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Todo() {
    const date = new Date();
    return (
        <Box sx={{
            flexGrow: 1,
            padding: 2
        }}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Typography align="center">
                        title01
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography align="center">
                        description01
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography align="center">
                        {date.getMonth()}/{date.getDay()}/{date.getFullYear()}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography align="center">
                        low
                    </Typography>
                </Grid>

                <Grid item xs={2}>
                    <Checkbox
                        disableRipple={true}
                        sx={{
                            display: "flex",
                            flexDirection: 'column'
                        }}/>
                </Grid>

                <Grid item xs={2}>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid item xs>
                            {/*TODO: fix button white out when hover*/}
                            <Button
                                item
                                disableTouchRipple={true}
                                disableFocusRipple={true}
                                sx={{
                                    bgcolor: "primary.main",
                                    color: "white"
                                }}
                                startIcon={<EditIcon/>}
                            >
                                Update
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Button
                                item
                                sx={{
                                    bgcolor: "error.main",
                                    color: "white"
                                }}
                                startIcon={<CancelIcon/>}
                            >
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
