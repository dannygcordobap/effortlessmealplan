import './App.css';
import React, { useState } from 'react';
import { AppBar, Box, CssBaseline, Toolbar, Typography, Divider, Alert, AlertTitle } from '@mui/material';
import Form from './components/Form';
import { LocalDining } from '@mui/icons-material';
import Results from './components/Results';

function App() {
  const [recipes, setResponse] = useState([]);

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
        <Form setResponse={setResponse} />
        <Divider sx={{ marginTop: 2.5, marginBottom: 2.5 }} />
        {recipes.length > 0 ? (
          <Results recipes={recipes} />
        ) : (
          <Alert severity="info">
            <AlertTitle>No Results Yet</AlertTitle>
            Recipe results will render here when received, in the meantime fill out the form and simplify meal planning!
          </Alert>
        )}
      </Box>
    </Box>
  );
}

export default App;
