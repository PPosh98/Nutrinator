import View from "./view.js";

class CaloriesView extends View {
  #parentElement = document.getElementById("calories");
  #errorMessage = "NA";

  #generateMarkup() {
    return `
			<h1 id="calories-value">${this.getData()}<span id="kcal">kcal</span></h1>`;
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

export default new CaloriesView();
