import './App.css';
import React from 'react';
import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import Form from './Components/Form';

function App() {
  const appbar = (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h5" sx={{ margin: 'auto' }}>
          Effortless Meal Plan
        </Typography>
      </Toolbar>
    </AppBar>
  );
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {appbar}
      <Box component="main" sx={{ margin: 'auto', p: 2 }}>
        <Toolbar />
        <Form />
      </Box>
    </Box>
  );
}

export default App;
