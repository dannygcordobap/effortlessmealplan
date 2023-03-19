import React from 'react';
import { Typography, Card, Grid, Container, Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function App() {
  const [calories, setCalories] = React.useState(600);
  const [fats, setFats] = React.useState(30);
  const [carbs, setCarbs] = React.useState(50);
  const [protein, setProtein] = React.useState(20);
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
      <Card variant="outlined">
        <div>
          <Container sx={{ marginTop: 3 }}>
            <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
              Macro Constraints Input Form
            </Typography>
          </Container>
        </div>
        <div>
          <Box component="main" sx={{ margin: 'auto', p: 2 }}>
            <Card sx={{ padding: 2, borer: 'none', boxShadow: 'none' }}>
              <Grid container spacing={2} sx={{ maxWidth: '750px' }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="number"
                    InputProps={{ inputProps: { min: 50 } }}
                    name="calories"
                    id="calories"
                    label="Calories"
                    required
                    fullWidth
                    defaultValue={600}
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
                    defaultValue={30}
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
                    defaultValue={20}
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
                    defaultValue={50}
                    onChange={(e) => setCarbs(parseInt(e.target.value))}
                    error={!!macroErrorText}
                    helperText={macroErrorText}
                  />
                </Grid>
                <Grid item xs={4} sm={6} sx={{ margin: 'auto' }}>
                  <TextField
                    fullWidth
                    type="number"
                    InputProps={{ inputProps: { min: 50 } }}
                    id="wiggleRoom"
                    label="Wiggle Room"
                    name="wiggleRoom"
                    defaultValue={0}
                  />
                </Grid>
              </Grid>
            </Card>
            <Grid item xs={12}>
              <Box sx={{ float: 'right' }}>
                <Button type="submit" variant="contained" onClick={onSubmit} sx={{ mt: 3, mb: 2 }}>
                  Show Recipes
                </Button>
              </Box>
            </Grid>
          </Box>
        </div>
      </Card>
    </>
  );
}
