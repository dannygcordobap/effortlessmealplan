import { Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

export default function Form(): JSX.Element {
  const formCategories = ['Calories', 'Carbs', 'Fat', 'Protein', 'Tolerance'];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid container spacing={2} sx={{ maxWidth: '900px' }}>
      {formCategories.map((element) => (
        <Grid container item xs={12}>
          <Grid item xs={3}>
            <Typography>{element}</Typography>
          </Grid>
          <Grid item xs={7}>
            <Item>Slider selector</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>Input</Item>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
