import View from "./view.js";

class UnselectedMealsView extends View {
  #parentElement = document.getElementById("meals-repo");
  #errorMessage = "No meals to be found here...";

  #generateMarkup() {
    return this.getData()
      .map((meal) => {
        this.setData(meal);
        return this.getMealMarkup();
      })
      .join("");
  }

  getMarkup() {
    return this.#generateMarkup();
  }

  #generateMealMarkup() {
    return `
      <div class="meal" data-meal="${this.getData().searchParamsStr}">
        <span class="meal-name">${this.getData().mealName}</span>
        <div id="meal-icons">
          <img
            id="meal-edit"
            class="meal-icon"
            src="static/edit.png"
            alt="edit"
            title="Edit Meal"
          />
          <img
            id="meal-bin"
            class="meal-icon"
            src="static/bin.png"
            alt="bin"
            title="Delete Meal"
          />
          <img
            id="meal-add"
            class="meal-icon"
            src="static/add.png"
            alt="add"
            title="Add to Selected Meals"
          />
        </div>
      </div>`;
  }

  getMealMarkup() {
    return this.#generateMealMarkup();
  }

  getParentElement() {
    return this.#parentElement;
  }

  getErrorMessage() {
    return this.#errorMessage;
  }
}

export default new UnselectedMealsView();
