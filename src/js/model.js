import { API_KEY } from "./config.js";

export const state = {
  allNutrition: [],
  userNutrition: {},
  mealsNutrition: [],
  totalNutrition: {},
  meals: {
    selectedMeals: [],
    unselectedMeals: [],
    id: 0
  },
  ingredientList: []
};

const nutrObj = {
  calories: "",
  protein: "",
  fat: "",
  carbohydrates: "",
  fiber: "",
  sugar: "",
  sodium: "",
  cholesterol: "",
  iron: "",
  potassium: "",
  calcium: "",
  vitamin_d: ""
};

//Gathers nutritional data from Spoonacular API of selected meals
export const showNutrition = async function () {
  try {
    state.ingredientList = [];
    state.meals.selectedMeals.forEach(function (meal) {
      meal.ingredientList.forEach(function (ingredient) {
        let ingreArray = ingredient.split("+");
        ingreArray.splice(0, 1, String(Number(ingreArray[0]) / meal.servings));
        state.ingredientList.push(ingreArray.join("+"));
      });
    });

    const ingredientList = `ingredientList=${state.ingredientList.join("%0A")}`;

    const res = await fetch(
      `https://api.spoonacular.com/recipes/parseIngredients?includeNutrition=true&apiKey=${API_KEY}`,
      {
        method: "POST",
        body: ingredientList
      }
    );
    const data = await res.json();

    data.forEach(function (ingredient) {
      ingredient.nutrition.nutrients.forEach(function (nutrient) {
        Object.hasOwn(nutrObj, nutrient.name.toLowerCase().replace(" ", "_"))
          ? state.mealsNutrition.push(nutrient)
          : "";
      });
    });

    state.totalNutrition = groupBy(state.mealsNutrition, "name");

    state.allNutrition = state.totalNutrition.map((nutrient) => {
      return {
        nutrient: nutrient.name,
        unit: nutrient.unit,
        mealsAmount: nutrient.amount.toFixed(2),
        userReqAmount:
          state.userNutrition[nutrient.name.toLowerCase().replace(" ", "_")]
      };
    });
  } catch (error) {
    alert(error);
  }
};

//Handles creation of a new meal
export const createMeal = function (searchParamsStrArr, searchParamsStr) {
  state.meals.selectedMeals.push({
    id: Number(searchParamsStrArr[0].substring(3)),
    mealName: searchParamsStrArr[1].substring(10).replaceAll("+", " "),
    servings: Number(searchParamsStrArr[2].substring(14)),
    ingredientList: searchParamsStrArr[3].substring(17).split("%0A"),
    searchParamsStr: searchParamsStr
  });
  state.meals.id = state.meals.selectedMeals.at(-1).id + 1;
  persistMeals();
};

//Handles movement of a meal from being selected to unselected or vice versa
export const moveMeal = function (mealData) {
  const mealDataArr = mealData.split("&");
  const id = Number(mealDataArr[0].substring(3));

  let objectIndex = state.meals.selectedMeals.findIndex(
    (meal) => meal.id === id
  );
  if (objectIndex !== -1) {
    state.meals.unselectedMeals.push(
      ...state.meals.selectedMeals.splice(objectIndex, 1)
    );
  } else {
    objectIndex = state.meals.unselectedMeals.findIndex(
      (meal) => meal.id === id
    );
    state.meals.selectedMeals.push(
      ...state.meals.unselectedMeals.splice(objectIndex, 1)
    );
  }
  persistMeals();
};

//Handles deletion of a meal
export const deleteMeal = function (mealData) {
  const mealDataArr = mealData.split("&");
  const id = Number(mealDataArr[0].substring(3));

  let objectIndex = state.meals.selectedMeals.findIndex(
    (meal) => meal.id === id
  );

  if (objectIndex !== -1) state.meals.selectedMeals.splice(objectIndex, 1);
  else {
    objectIndex = state.meals.unselectedMeals.findIndex(
      (meal) => meal.id === id
    );
    state.meals.unselectedMeals.splice(objectIndex, 1);
  }
  persistMeals();
};

//Handles the modification of a meal
export const editMeal = function (mealData) {
  const mealDataArr = mealData.split("&");
  const mealName = mealDataArr[1].substring(10).replaceAll("+", " ");
  const servings = Number(mealDataArr[2].substring(14));
  const ingredientList = mealDataArr[3].substring(17).split("%0A");
  const id = Number(mealDataArr[0].substring(3));

  let objectIndex = state.meals.selectedMeals.findIndex(
    (meal) => meal.id === id
  );

  if (objectIndex !== -1) {
    state.meals.selectedMeals.at(objectIndex).mealName = mealName;
    state.meals.selectedMeals.at(objectIndex).servings = servings;
    state.meals.selectedMeals.at(objectIndex).ingredientList = ingredientList;
    state.meals.selectedMeals.at(objectIndex).searchParamsStr = mealData;
  } else {
    objectIndex = state.meals.unselectedMeals.findIndex(
      (meal) => meal.id === id
    );
    state.meals.unselectedMeals.at(objectIndex).mealName = mealName;
    state.meals.unselectedMeals.at(objectIndex).servings = servings;
    state.meals.unselectedMeals.at(objectIndex).ingredientList = ingredientList;
    state.meals.unselectedMeals.at(objectIndex).searchParamsStr = mealData;
  }
  persistMeals();
};

//Calculates the user required nutrition from the calories entered by the user
export const calcUserNutrition = function (calories) {
  const proteinLow = ((calories * 0.1) / 4).toFixed(2);
  const proteinHigh = ((calories * 0.35) / 4).toFixed(2);
  console.log("Protein: " + proteinLow + "-" + proteinHigh);
  const fibre = (calories * 0.014).toFixed(2);
  console.log("Fibre: " + fibre);
  const fat = ((calories * 0.3) / 9).toFixed(2);
  console.log("Fat: " + fat);
  const carbsLow = ((calories * 0.45) / 4).toFixed(2);
  const carbsHigh = ((calories * 0.65) / 4).toFixed(2);
  console.log("Carbs: " + carbsLow + "-" + carbsHigh);

  state.userNutrition = {
    calories: calories,
    protein: `${proteinLow}-${proteinHigh}`,
    fat: fat,
    carbohydrates: `${carbsLow}-${carbsHigh}`,
    fiber: `${fibre}^`,
    sugar: `${30}*`,
    sodium: `${500}-${2300}`,
    cholesterol: `${200}*`,
    iron: `${8.7}-${14.8}~`,
    potassium: `${3500}-${4700}`,
    calcium: `${700}-${1300}`,
    vitamin_d: `${25}-${50}`
  };

  persistUserNutrition();
};

const persistUserNutrition = function () {
  localStorage.setItem("userNutrition", JSON.stringify(state.userNutrition));
};

const persistMeals = function () {
  localStorage.setItem("meals", JSON.stringify(state.meals));
};

//calculates total nutrition of all meals
const groupBy = function (arr, key) {
  return arr
    .sort((a, b) => a[key].localeCompare(b[key]))
    .reduce((total, currentValue) => {
      const newTotal = total;
      if (total.length && total[total.length - 1][key] === currentValue[key])
        newTotal[total.length - 1] = {
          ...total[total.length - 1],
          ...currentValue,
          amount: total[total.length - 1].amount + currentValue.amount
        };
      else newTotal[total.length] = currentValue;
      return newTotal;
    }, []);
};

const init = function () {
  const storedUserNutrition = localStorage.getItem("userNutrition");
  if (storedUserNutrition)
    state.userNutrition = JSON.parse(storedUserNutrition);

  const storedMeals = localStorage.getItem("meals");
  if (storedMeals) state.meals = JSON.parse(storedMeals);
};

init();
