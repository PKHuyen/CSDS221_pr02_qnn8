import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function Banner() {
    return (
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        align="center"
                        sx={{flex: 1}}>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        FRAMEWORKS
                    </Typography>
                    <Button
                        variant="contained"
                        disableRipple={true}
                    >
                        <IconButton
                            size="small"
                            color="inherit"
                        >
                            <AddCircleIcon fontSize="small" />
                        </IconButton>
                        ADD
                    </Button>
                </Toolbar>
            </AppBar>
    );
}
