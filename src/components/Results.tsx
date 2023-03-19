import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Grid,
  Divider,
  Typography,
  Button,
  Tooltip,
} from '@mui/material';
import React from 'react';
import ModeFanOffIcon from '@mui/icons-material/ModeFanOff';
import GrassIcon from '@mui/icons-material/Grass';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FlareIcon from '@mui/icons-material/Flare';
import { Link } from '@mui/icons-material';

export default function Results(props) {
  const getIcons = (recipe) => {
    let iconCategories = ['vegan', 'vegetarian', 'dairyFree', 'glutenFree', 'veryHealthy'];
    let style = {
      marginTop: 1.5,
    };

    return iconCategories.map((category) => {
      switch (category) {
        case 'vegan':
          return recipe[category] === true ? (
            <Tooltip title="Vegan">
              <GrassIcon sx={style} />
            </Tooltip>
          ) : null;
        case 'vegetarian':
          return recipe[category] === true ? (
            <Tooltip title="Vegetarian">
              <ModeFanOffIcon sx={style} />
            </Tooltip>
          ) : null;
        case 'dairyFree':
          return recipe[category] === true ? (
            <Tooltip title="Dairy Free">
              <FiberManualRecordIcon sx={style} />
            </Tooltip>
          ) : null;
        case 'glutenFree':
          return recipe[category] === true ? (
            <Tooltip title="Gluten Free">
              <FlareIcon sx={style} />
            </Tooltip>
          ) : null;
        case 'veryHealthy':
          return recipe[category] === true ? (
            <Tooltip title="Very Healthy">
              <FavoriteBorderIcon sx={style} />
            </Tooltip>
          ) : null;
      }
    });
  };

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
        <Grid container item xs={12} sx={{ justifyContent: 'space-around' }}>
          {getIcons(recipe)}
        </Grid>
      </Grid>
    );
  };

  const getRecipePreviewCard = (recipe) => (
    <Grid item xs={6}>
      <Card variant="outlined">
        <CardHeader
          title={recipe.title}
          titleTypographyProps={{ variant: 'subtitle1', gutterBottom: true }}
          sx={{ height: '5em', overflow: 'hidden' }}
          action={
            <Button startIcon={<Link />} href={recipe.sourceUrl} target="blank">
              View
            </Button>
          }
        />
        <CardMedia
          component="img"
          image={recipe.image}
          alt={`Prepared ${recipe.title}`}
          sx={{ minWidth: '100%', overflow: 'hidden' }}
        />
        <CardContent>{getNutritionContent(recipe)}</CardContent>
      </Card>
    </Grid>
  );

  const grid = (
    <Grid container item columnSpacing={2} rowSpacing={2}>
      {props.recipes.map((recipe) => getRecipePreviewCard(recipe))}
    </Grid>
  );

  return <Box sx={{ margin: 'auto', maxWidth: '800px' }}>{grid}</Box>;
}
