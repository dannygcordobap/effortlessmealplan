import { Box, Card, CardHeader, CardMedia, CardContent, Grid, Divider, Typography } from '@mui/material';
import mock_response from '../util/mock_response.json';
import React from 'react';

export default function Results(): JSX.Element {
  let response = mock_response.results;
  let border = { border: '1px solid #000' };

  const getNutritionContent = (recipe) => {
    let nutrients = {
      Calories: 0,
      Carbs: 3,
      Fat: 1,
      Protein: 8,
    };

    let nutrition = recipe.nutrition.nutrients;
    return (
      <Grid container item xs={12}>
        {Object.keys(nutrients).map((key) => (
          <>
            <Grid item xs={1.25}></Grid>
            <Grid item xs={3.5}>
              <Typography variant="overline">{`${key}: `}</Typography>
              <Typography variant="overline">{Math.round(nutrition[nutrients[key]].amount)}</Typography>
            </Grid>
            <Grid item xs={1.25}></Grid>
          </>
        ))}
        <Divider />
      </Grid>
    );
  };

  const getRecipePreviewCard = (recipe) => (
    <Grid item xs={6}>
      <Card variant="outlined">
        <CardHeader
          title={recipe.title}
          titleTypographyProps={{ variant: 'h6' }}
          sx={{ height: '2.5em', overflow: 'hidden' }}
        />
        <CardMedia
          component="img"
          image={recipe.image}
          alt={`Prepared ${recipe.title}`}
          sx={{ minWidth: '100%', overflow: 'hidden' }}
        />
        <CardContent>
          {getNutritionContent(recipe)}
          {
            //getIcons(recipe)}
          }
        </CardContent>
      </Card>
    </Grid>
  );

  const grid = (
    <Grid container item columnSpacing={2} rowSpacing={2}>
      {response.map((recipe) => getRecipePreviewCard(recipe))}
    </Grid>
  );

  return <Box sx={{ margin: 'auto', maxWidth: '750px' }}>{grid}</Box>;
}
