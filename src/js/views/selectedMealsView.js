import View from "./view.js";
import editIcon from "../../img/icons/edit.png";
import binIcon from "../../img/icons/bin.png";
import minusIcon from "../../img/icons/minus.png";

class SelectedMealsView extends View {
  #parentElement = document.getElementById("selected-meals");
  #errorMessage =
    "You don't have any meals here, add one from the repository below or create one now by clicking the 'Create Meal' button!";

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
            src="${editIcon}"
            alt="edit"
            title="Edit Meal"
          />
          <img
            id="meal-bin"
            class="meal-icon"
            src="${binIcon}"
            alt="bin"
            title="Delete Meal"
          />
          <img
            id="meal-remove"
            class="meal-icon"
            src="${minusIcon}"
            alt="remove"
            title="Move to Meals Repository"
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

export default new SelectedMealsView();
