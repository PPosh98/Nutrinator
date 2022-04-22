import View from "./view.js";

class EditMealView extends View {
  #parentElement = document.getElementById("form-update-meal");
  #message = "Meal was updated successfully! 🎉";

  #window = document.getElementById("update-meal-window");
  #overlay = document.getElementById("overlay-update");
  #btnClose = document.getElementById("btn-close-update");
  #inputMealName = document.getElementById("meal-name-update");
  #inputServings = document.getElementById("servings-update");
  #inputIngredients = document.getElementById("ingredients-update");
  #messageDiv = document.getElementById("message-update");

  #searchParamsStr;
  #mealId;

  constructor() {
    super();
    this.#addHandlerHideWindow();
  }

  openWindow(mealData) {
    const searchParamsStrArr = mealData.split("&");
    this.#mealId = Number(searchParamsStrArr[0].substring(3));
    const mealName = searchParamsStrArr[1].substring(10).replaceAll("+", " ");
    const servings = Number(searchParamsStrArr[2].substring(14));
    const ingredientList = searchParamsStrArr[3].substring(17).split("%0A");

    this.toggleWindow();

    const ingredients = ingredientList
      .map((ingredient) => {
        return ingredient.replaceAll("+", " ");
      })
      .join("\n");

    this.#inputIngredients.value = ingredients;
    this.#inputMealName.value = mealName;
    this.#inputServings.value = servings;
  }

  toggleWindow() {
    this.#overlay.classList.toggle("hidden");
    this.#window.classList.toggle("hidden");
  }

  #addHandlerHideWindow() {
    this.#btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this.#overlay.addEventListener("click", this.toggleWindow.bind(this));
  }

  addHandlerUpdateMeal(handler) {
    this.getParentElement().addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(this.getParentElement());
      const searchParams = new URLSearchParams();

      for (const pair of formData) {
        searchParams.append(pair[0], pair[1]);
      }

      this.#searchParamsStr = `id=${this.#mealId}&${searchParams.toString()}`;

      handler(this.#searchParamsStr);
    });
  }

  getParentElement() {
    return this.#parentElement;
  }

  getMessage() {
    return this.#message;
  }

  getMessageDiv() {
    return this.#messageDiv;
  }
}

export default new EditMealView();
