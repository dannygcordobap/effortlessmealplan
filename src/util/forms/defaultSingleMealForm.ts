const [calorieMin, calorieMax] = [150, 1500];
const [toleranceMin, toleranceMax] = [15, 100];

const MACRO_ERROR_TEXT = 'Macronutrient percentages must add up to 100';
const getRangeErrorText = (title, min, max) => {
  return `${title} must be within range ${min}-${max}`;
};

const [calories, carbs, fat, protein, tolerance] = [550, 50, 30, 20, 20];

interface InputFormItem {
  type: string;
  value: number;
  label: string;
  defaultValue: number;
  hasError: boolean;
  errorText: string;
  minimum?: number;
  maximum?: number;
}

interface InputForm {
  calories: InputFormItem;
  carbs: InputFormItem;
  fat: InputFormItem;
  protein: InputFormItem;
  tolerance: InputFormItem;
}

export const DEFAULT_SINGLE_MEAL_FORM: InputForm = {
  calories: {
    type: 'number',
    value: calories,
    label: 'Total Calories',
    defaultValue: calories,
    hasError: false,
    errorText: getRangeErrorText('Calories', calorieMin, calorieMax),
    minimum: calorieMin,
    maximum: calorieMax,
  },
  carbs: {
    type: 'number',
    value: carbs,
    label: 'Carbohydrate %',
    defaultValue: carbs,
    hasError: false,
    errorText: MACRO_ERROR_TEXT,
  },
  fat: {
    type: 'number',
    value: fat,
    label: 'Fat %',
    defaultValue: fat,
    hasError: false,
    errorText: MACRO_ERROR_TEXT,
  },
  protein: {
    type: 'number',
    value: protein,
    label: 'Protein %',
    defaultValue: protein,
    hasError: false,
    errorText: MACRO_ERROR_TEXT,
  },
  tolerance: {
    type: 'number',
    value: tolerance,
    label: 'Tolerance %',
    defaultValue: tolerance,
    hasError: false,
    errorText: getRangeErrorText('Tolerance', toleranceMin, toleranceMax),
    minimum: toleranceMin,
    maximum: toleranceMax,
  },
};
