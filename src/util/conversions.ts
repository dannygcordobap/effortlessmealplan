const CALORIES_PER_GRAM = {
  carbs: 4,
  fat: 9,
  protein: 4,
};

interface NutrientConstraints {
  min: number;
  max: number;
}

export interface RequestNutrientParameters {
  minCalories: number;
  maxCalories: number;
  minCarbs: number;
  maxCarbs: number;
  minFat: number;
  maxFat: number;
  minProtein: number;
  maxProtein: number;
}

const getCalorieConstraints = (calories: number, tolerance: number): NutrientConstraints => {
  return {
    min: calories * (1.0 - tolerance / 100),
    max: calories * (1.0 + tolerance / 100),
  };
};

const getMacroInGrams = (
  macroPercentage: number,
  caloriesPerGram: number,
  calorieConstraints: NutrientConstraints
): NutrientConstraints => {
  return {
    min: (calorieConstraints.min * (macroPercentage / 100)) / caloriesPerGram,
    max: (calorieConstraints.max * (macroPercentage / 100)) / caloriesPerGram,
  };
};

export const getRequestNutrientParameters = (
  carbs: number,
  fat: number,
  protein: number,
  calories: number,
  tolerance: number
): RequestNutrientParameters => {
  let calorieConstraints = getCalorieConstraints(calories, tolerance);
  let carbConstraints = getMacroInGrams(carbs, CALORIES_PER_GRAM.carbs, calorieConstraints);
  let fatConstraints = getMacroInGrams(fat, CALORIES_PER_GRAM.fat, calorieConstraints);
  let proteinConstraints = getMacroInGrams(protein, CALORIES_PER_GRAM.protein, calorieConstraints);

  return {
    minCalories: calorieConstraints.min,
    maxCalories: calorieConstraints.max,
    minCarbs: carbConstraints.min,
    maxCarbs: carbConstraints.max,
    minFat: fatConstraints.min,
    maxFat: fatConstraints.max,
    minProtein: proteinConstraints.min,
    maxProtein: proteinConstraints.max,
  };
};
