import View from "./view.js";

export default class AddMealView extends View {
  #parentElement = document.getElementById("form-create-meal");
  #message = "Meal was created successfully! 🥳";

  #window = document.getElementById("create-meal-window");
  #overlay = document.getElementById("overlay-create");
  #btnOpen = document.getElementById("btn-create-meal");
  #btnClose = document.getElementById("btn-close-create");
  #messageDiv = document.getElementById("message-create");
  #inputMealName = document.getElementById("meal-name-create");
  #inputServings = document.getElementById("servings-create");
  #inputIngredients = document.getElementById("ingredients-create");

  #searchParamsStr;
  static mealId = 0;

  constructor() {
    super();
    this.#addHandlerShowWindow();
    this.#addHandlerHideWindow();
  }

  toggleWindow() {
    this.#overlay.classList.toggle("hidden");
    this.#window.classList.toggle("hidden");
  }

  #addHandlerShowWindow() {
    this.#btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  }

  #addHandlerHideWindow() {
    this.#btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this.#overlay.addEventListener("click", this.toggleWindow.bind(this));
  }

  addHandlerCreateMeal(handler) {
    this.getParentElement().addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(this.getParentElement());
      const searchParams = new URLSearchParams();

      for (const pair of formData) {
        searchParams.append(pair[0], pair[1]);
      }

      this.#searchParamsStr = `id=${AddMealView.mealId++}&${searchParams.toString()}`;
      const searchParamsStrArr = this.#searchParamsStr.split("&");

      handler(searchParamsStrArr, this.#searchParamsStr);

      this.#inputIngredients.value = "";
      this.#inputMealName.value = "";
      this.#inputServings.value = "";
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
