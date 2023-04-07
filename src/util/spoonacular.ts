import { getRequestNutrientParameters, RequestNutrientParameters } from './conversions';

export interface GetRecipesInput {
  calories: number;
  carbs: number;
  fat: number;
  protein: number;
  tolerance: number;
}

const getRequestParameters = (requestData: RequestNutrientParameters) => {
  return {
    ...requestData,
    instructionsRequired: true,
    addRecipeInformation: true,
    addRecipeNutrition: true,
    number: 10,
    apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
  };
};

const getQueryStringParameters = (parameters: RequestNutrientParameters): string => {
  const queryParams: string[] = [];
  for (const key in parameters) {
    let queryParam = encodeURIComponent(key) + '=' + encodeURIComponent(parameters[key]);
    queryParams.push(queryParam);
  }
  return queryParams.join('&');
};

export default async function getRecipes(input: GetRecipesInput): Promise<any> {
  let { calories, carbs, fat, protein, tolerance } = input;
  let requestParameters = getRequestParameters(getRequestNutrientParameters(carbs, fat, protein, calories, tolerance));
  let url = `https://api.spoonacular.com/recipes/complexSearch?${getQueryStringParameters(requestParameters)}`;
  return (await fetch(url)).json();
}
