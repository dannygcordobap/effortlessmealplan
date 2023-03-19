import './App.css';
import React from 'react';
import { AppBar, Box, CssBaseline, Toolbar, Typography, Divider, Grid } from '@mui/material';
import Form from './components/Form';
import { LocalDining } from '@mui/icons-material';
import Results from './components/Results';

function App() {
  const appbar = (
    <AppBar position="fixed">
      <Toolbar>
        <LocalDining />
        <Typography variant="h4">&ensp; Effortless Meal Plan</Typography>
      </Toolbar>
    </AppBar>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {appbar}
      <Box component="main" sx={{ margin: 'auto', p: 2, flexDirection: 'column' }}>
        <Toolbar />
        <Form />
        <Divider sx={{ marginTop: 2.5, marginBottom: 2.5 }} />
        <Results />
      </Box>
    </Box>
  );
}

export default App;
