import * as model from "./model.js";
import View from "./views/view.js";
const view = new View();
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
  if (model.state.userNutrition.calories) {
    caloriesView.render(model.state.userNutrition.calories);
  }
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
  resultsView.show(model.state.allNutrition);
};

const controlUpdateMeal = function (mealData) {
  model.editMeal(mealData);

  editMealView.renderMessage();

  renderMeals();
};

const renderMeals = function () {
  selectedMealsView.render(model.state.meals.selectedMeals);
  unselectedMealsView.render(model.state.meals.unselectedMeals);
};

const controlEvents = function (operation, mealData = undefined) {
  const controlEditCaloriesWindow = () => addCaloriesView.toggleWindow();
  const controlCreateMealWindow = () => addMealView.toggleWindow();
  const controlGetResults = () => mealsView.getResults(controlGetNutrition);
  const controlEditMeal = () => editMealView.openWindow(mealData);
  const controlDeleteMeal = () => model.deleteMeal(mealData);
  const controlRemoveFromMeal = () => model.moveMeal(mealData);
  const controlAddToMeal = () => model.moveMeal(mealData);

  const handleClick = {
    "btn-edit": controlEditCaloriesWindow,
    "icon-create": controlCreateMealWindow,
    "icon-nutritionalise": controlGetResults,
    "meal-edit": controlEditMeal,
    "meal-bin": controlDeleteMeal,
    "meal-remove": controlRemoveFromMeal,
    "meal-add": controlAddToMeal
  };

  handleClick[operation]();

  renderMeals();
};

//Initialises web app and adds event handlers where neccessary
const init = function () {
  view.addEventsHandler(controlEvents);
  mealsView.addHandlerMealsViewTab(controlMeals);
  resultsView.addHandlerResultsTab();
  addCaloriesView.addHandlerAddCalories(controlAddCalories);
  editMealView.addHandlerUpdateMeal(controlUpdateMeal);
  addMealView.addHandlerCreateMeal(controlCreateMeal);
};

init();
