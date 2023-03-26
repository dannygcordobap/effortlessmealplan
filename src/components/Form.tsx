import React, { useState, useEffect } from 'react';
import { Card, Grid, Button, Alert, AlertTitle, CardHeader } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import getRecipes, { GetRecipesInput } from '../util/spoonacular';
import { DEFAULT_SINGLE_MEAL_FORM } from '../util/forms/defaultSingleMealForm';

export default function Form(props) {
  const [formData, setFormData] = useState(DEFAULT_SINGLE_MEAL_FORM);
  const [loading, setLoading] = useState(false);
  const [emptyResponse, setEmptyResponse] = useState(false);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    for (let item of Object.values(formData)) {
      if (item.hasError) {
        setValid(false);
        break;
      }
      setValid(true);
    }
  }, [formData]);

  const onFormChangeHandler = (key, e) => {
    let inputValue = parseInt(e.target.value);
    let hasError: boolean;

    if (formData[key].minimum !== undefined) {
      // Calorie and tolerance validation
      hasError = inputValue < formData[key].minimum || inputValue > formData[key].maximum;
    } else {
      // Macro validation
      let macroSum = Object.keys(formData)
        .map((ref) => {
          if (formData[ref].minimum === undefined) {
            if (ref === key) {
              return inputValue;
            }
            return formData[ref].value;
          }
          return 0;
        })
        .reduce((sum, cur) => sum + cur, 0);
      hasError = macroSum !== 100;

      // Set all macro errors if changed
      setMacroErrors(hasError);
    }

    // Set form data
    setFormData((formData) => ({ ...formData, [key]: { ...formData[key], value: inputValue, hasError: hasError } }));
  };

  const setMacroErrors = (hasError) => {
    Object.keys(formData).forEach((key) => {
      if (formData[key].minimum === undefined) {
        setFormData((formData) => ({
          ...formData,
          [key]: {
            ...formData[key],
            hasError: hasError,
          },
        }));
      }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (valid) {
      setLoading(true);
      let input = Object.fromEntries(
        Object.keys(formData).map((key) => {
          return [key, formData[key].value];
        })
      ) as GetRecipesInput;
      getRecipes(input)
        .then((response) => {
          console.log(response);
          props.setResponse(response.results);
          setEmptyResponse(response.results.length === 0);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <>
      <Card variant="outlined">
        <CardHeader title="Macro Input Form" titleTypographyProps={{ variant: 'h4' }} sx={{ textAlign: 'center' }} />
        <Box component="main" sx={{ p: 2 }}>
          <Grid container spacing={2} sx={{ maxWidth: '750px' }}>
            {Object.keys(formData).map((key) => (
              <Grid item xs={6} margin="0 auto">
                <TextField
                  type={formData[key].type}
                  label={formData[key].label}
                  required
                  fullWidth
                  defaultValue={formData[key].defaultValue}
                  onChange={(e) => onFormChangeHandler(key, e)}
                  error={formData[key].hasError}
                  helperText={formData[key].hasError ? formData[key].errorText : null}
                />
              </Grid>
            ))}
          </Grid>
          <Box>
            <Button
              sx={{ float: 'right', marginBottom: 2 }}
              type="submit"
              variant="contained"
              onClick={onSubmit}
              disabled={loading}
            >
              Show Recipes
            </Button>
          </Box>
        </Box>
      </Card>
      <Box sx={{ marginTop: 2 }}>
        {emptyResponse && valid ? (
          <Alert severity="error">
            <AlertTitle>Oops!</AlertTitle>
            No results were returned, try adjusting your constraints or increasing the tolerance to get more recipe
            matches!
          </Alert>
        ) : null}
      </Box>
    </>
  );
}
