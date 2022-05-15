import View from "./view.js";
// import wellnessIcon from "../../img/icons/wellness.png";
// import createIcon from "../../img/icons/create.png";

class MealsView extends View {
  #errorMessage =
    "You don't have any meals here, create one now by clicking the 'Create Meal' button!";
  #parentElement = document.getElementById("views");

  constructor() {
    super();
    this.getParentElement().innerHTML = this.getMarkup();
  }

  addHandlerMealsViewTab(handler) {
    this.mealsViewTab.addEventListener("click", () => {
      View.prevResultsViewHTML = this.getParentElement().innerHTML;
      if (View.prevMealsViewHTML)
        this.getParentElement().innerHTML = View.prevMealsViewHTML;
      this.toggleMealsViewTab();
      handler();
    });
    this.mealsViewTab.click();
  }

  getResults(handler) {
    // const btnNutritionalise = document.getElementById("icon-nutritionalise");
    // btnNutritionalise.addEventListener("click", () => {
    View.prevMealsViewHTML = this.getParentElement().innerHTML;
    this.toggleResultsViewTab();
    handler();
    setTimeout(() => {
      View.prevResultsViewHTML = this.getParentElement().innerHTML;
    }, 1000);
    // });
  }

  // addHandlerControls(handler) {
  //   const meals = document.getElementById("meals");
  //   meals.addEventListener("click", function (e) {
  //     if (e.target.classList.contains("meal-icon"))
  //       handler(e.target.id, e.target.closest("div .meal").dataset.meal);
  //   });
  // }

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
          <div id="calories">
            <h1 id="calories-value">2000<span id="kcal">kcal</span></h1>
          </div>
          <button id="btn-edit" class="btn-submit">Edit</button>
        </div>
        <div id="meals">
          <div id="selected-meals-section">
            <span id="header-selected-meals"><b>Selected Meals</b></span>
            <img 
              id="icon-nutritionalise"
              class="icon" 
              src="static/wellness.png"
              title="Nutritonalise"
            />
            <img 
              id="icon-create"
              class="icon" 
              src="static/create.png"
              title="Create a Meal"
            />
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
