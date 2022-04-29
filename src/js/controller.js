import * as model from "./model.js";
import mealsView from "./views/mealsView.js";
import AddMealView from "./views/addMealView.js";
const addMealView = new AddMealView();
import editMealView from "./views/editMealView.js";
import selectedMealsView from "./views/selectedMealsView.js";
import unselectedMealsView from "./views/unselectedMealsView.js";
import resultsView from "./views/resultsView.js";
import caloriesView from "./views/caloriesView.js";
import addCaloriesView from "./views/addCaloriesView.js";

const controlAddCalories = function (calories) {
  model.calcUserNutrition(calories);

  addCaloriesView.renderMessage();
};

const controlMeals = function () {
  caloriesView.render(model.state.userNutrition.calories);
  renderMeals();
  AddMealView.mealId = model.state.meals.id;
};

const controlCreateMeal = function (searchParamsStrArr, searchParamsStr) {
  model.createMeal(searchParamsStrArr, searchParamsStr);

  addMealView.renderMessage();

  renderMeals();
};

const controlGetNutrition = async function () {
  await model.showNutrition();
  resultsView.render(model.state.allNutrition);
  resultsView.drawChart();
};

const controlOperations = function (operation, mealData) {
  const controlEditMeal = () => {
    editMealView.openWindow(mealData);
  };
  const controlDeleteMeal = () => model.deleteMeal(mealData);
  const controlRemoveFromMeal = () => model.moveMeal(mealData);
  const controlAddToMeal = () => model.moveMeal(mealData);

  const handleClick = {
    "meal-edit": controlEditMeal,
    "meal-bin": controlDeleteMeal,
    "meal-remove": controlRemoveFromMeal,
    "meal-add": controlAddToMeal
  };

  handleClick[operation]();

  renderMeals();
};

const controlUpdateMeal = function (mealData) {
  model.editMeal(mealData);

  editMealView.renderMessage();

  renderMeals();
};

const controlGetMealsNutrition = function () {
  // Get total nutrition value of all meals
  // Render mealsNutritionView
};

const controlGetComparison = function () {
  // Compare userNutrition data with mealsNutrition data and show results
};

const renderMeals = function () {
  selectedMealsView.render(model.state.meals.selectedMeals);
  unselectedMealsView.render(model.state.meals.unselectedMeals);
};

const init = function () {
  mealsView.addHandlerRender(controlMeals);
  mealsView.addHandlerGetNutrition(controlGetNutrition);
  addCaloriesView.addHandlerAddCalories(controlAddCalories);
  mealsView.addHandlerControls(controlOperations);
  editMealView.addHandlerUpdateMeal(controlUpdateMeal);
  addMealView.addHandlerCreateMeal(controlCreateMeal);
};

init();
