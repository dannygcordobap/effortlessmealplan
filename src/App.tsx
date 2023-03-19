import './App.css';
import React from 'react';
import { Typography, AppBar, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LocalDining } from '@mui/icons-material';

function App() {
  const [calories, setCalories] = React.useState(0);
  const [fats, setFats] = React.useState(0);
  const [carbs, setCarbs] = React.useState(0);
  const [protein, setProtein] = React.useState(0);
  const [macroErrorText, setMacroErrorText] = React.useState('');
  const [caloriesErrorText, setCaloriesErrorText] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (calories < 50 || calories > 2500) {
      setCaloriesErrorText('Please enter a number between 50 and 2500');
    } else setCaloriesErrorText('');

    if (fats + carbs + protein !== 100) {
      setMacroErrorText('Please have  the sum of Fats, Carbs, and Protein equal 100');
    } else setMacroErrorText('');
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LocalDining />
          <Typography variant="h5">Effortless Meal Plan</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Macro Constraints
            </Typography>
          </Container>
        </div>
        <div>
          <Box
            component="form"
            sx={{ alignItems: 'center', marginTop: 8, display: 'flex', flexDirection: 'column', width: 1250 }}
            noValidate
            autoComplete="off"
          >
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  type="number"
                  InputProps={{ inputProps: { min: 50 } }}
                  name="calories"
                  id="calories"
                  label="Calories"
                  required
                  fullWidth
                  onChange={(e) => setCalories(parseInt(e.target.value))}
                  error={!!caloriesErrorText}
                  helperText={caloriesErrorText}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="number"
                  name="fats"
                  id="fats"
                  label="Fats %"
                  fullWidth
                  onChange={(e) => setFats(parseInt(e.target.value))}
                  error={!!macroErrorText}
                  helperText={macroErrorText}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="number"
                  id="protein"
                  label="Protein %"
                  name="protein"
                  onChange={(e) => setProtein(parseInt(e.target.value))}
                  error={!!macroErrorText}
                  helperText={macroErrorText}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="number"
                  name="carbs"
                  label="Carbs %"
                  id="carbs"
                  onChange={(e) => setCarbs(parseInt(e.target.value))}
                  error={!!macroErrorText}
                  helperText={macroErrorText}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="number"
                  id="wiggleRoom"
                  label="Wiggle Room"
                  name="wiggleRoom"
                  defaultValue={0}
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <Button type="submit" fullWidth variant="contained" onClick={onSubmit} sx={{ mt: 3, mb: 2 }}>
                  Show Recipes
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </main>
    </>
  );
}

export default App;
