import View from "./view.js";
import editIcon from "../../img/icons/edit.png";
import binIcon from "../../img/icons/bin.png";
import addIcon from "../../img/icons/add.png";

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
            id="meal-add"
            class="meal-icon"
            src="${addIcon}"
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
