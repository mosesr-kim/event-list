import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, Outlet } from 'react-router-dom';

export default function header() {
  return(
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Event List
            </Typography>
            <Link to="/login" style={{textDecoration: 'none', color: 'white'}}>
              <Button color="inherit">LOGIN</Button>
            </Link>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">SIGNUP</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet/>
    </>
  );
}
