import View from "./view.js";

class MealsView extends View {
  #errorMessage =
    "You don't have any meals here, create one now by clicking the 'Create Meal' button!";
  #parentElement = document.getElementById("views");

  constructor() {
    super();
    this.getParentElement().innerHTML = this.getMarkup();
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  addHandlerGetNutrition(handler) {
    const btnNutritionalise = document.getElementById("btn-nutritionalise");
    btnNutritionalise.addEventListener("click", handler);
  }

  addHandlerControls(handler) {
    const meals = document.getElementById("meals");
    meals.addEventListener("click", function (e) {
      if (e.target.classList.contains("meal-icon"))
        handler(e.target.id, e.target.closest("div .meal").dataset.meal);
    });
  }

  #generateMarkup() {
    return `
      <div id="my-meals-view">
        <div id="greetings-section">
          <h1 id="greeting">Hi, welcome!</h1>
          <span
            >Begin by entering your calories requirement by clicking the Edit button, then create
            some meals and finally get their nutritional data by hitting the
            NUTRITIONALISE button!
          </span>
        </div>
        <div id="calories-section">
          <p>My calories requirement:</p>
          <div id="calories"></div>
          <button id="btn-edit" class="btn-submit">Edit</button>
        </div>
        <div id="meals">
          <div id="selected-meals-section">
            <span id="header-selected-meals"><b>Selected Meals</b></span>
            <button id="btn-nutritionalise" class="btn-submit">NUTRITIONALISE</button>
            <button id="btn-create-meal" class="btn-submit">Create Meal</button>
            <hr class="horizontal-lines" />
            <div id="selected-meals"></div>
          </div>
          <div id="meals-repo-section">
            <span id="header-meals-repo"><b>Meals Repository</b></span>
            <hr class="horizontal-lines" />
            <div id="meals-repo"></div>
          </div>
        </div>
      </div>`;
  }

  getMarkup() {
    return this.#generateMarkup();
  }

  getParentElement() {
    return this.#parentElement;
  }

  getErrorMessage() {
    return this.#errorMessage;
  }
}

export default new MealsView();
