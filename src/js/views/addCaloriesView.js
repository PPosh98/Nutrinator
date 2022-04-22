import View from "./view.js";

class AddCaloriesView extends View {
  #parentElement = document.getElementById("form-save-calories");
  #message = "Calories saved successfully! 🎈";

  #window = document.getElementById("calories-window");
  #overlay = document.getElementById("overlay-calories");
  #btnOpen = document.getElementById("btn-edit");
  #btnClose = document.getElementById("btn-close-calories");
  #messageDiv = document.getElementById("message-save");

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

  addHandlerAddCalories(handler) {
    this.#parentElement.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputCalories = document.getElementById("input-calories").value;

      handler(Number(inputCalories));

      document.getElementById(
        "calories-value"
      ).innerHTML = `${inputCalories}<span id="kcal">kcal</span>`;
    });
  }

  getMessage() {
    return this.#message;
  }

  getMessageDiv() {
    return this.#messageDiv;
  }
}

export default new AddCaloriesView();
