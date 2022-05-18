export default class View {
  // #parentElement = document.querySelector("body");
  #data;
  mealsViewTab = document.getElementById("link-my-meals");
  resultsTab = document.getElementById("link-results");
  static mealsView;
  static resultsView;

  addEventsHandler(handler) {
    const views = document.getElementById("views");
    views.addEventListener("click", function (e) {
      console.log(e.target.id);
      if (e.target.id === "btn-edit") handler(e.target.id);
      if (e.target.id === "icon-create") handler(e.target.id);
      if (e.target.id === "icon-nutritionalise") handler(e.target.id);
      if (e.target.classList.contains("meal-icon"))
        handler(e.target.id, e.target.closest("div .meal").dataset.meal);
    });
  }

  toggleMealsViewTab() {
    if (!this.mealsViewTab.classList.contains("tablinkActive")) {
      this.mealsViewTab.classList.add("tablinkActive");
      if (this.resultsTab.classList.contains("tablinkActive")) {
        this.resultsTab.classList.remove("tablinkActive");
      }
    }
  }

  toggleResultsViewTab() {
    if (!this.resultsTab.classList.contains("tablinkActive")) {
      this.resultsTab.classList.add("tablinkActive");
      if (this.mealsViewTab.classList.contains("tablinkActive")) {
        this.mealsViewTab.classList.remove("tablinkActive");
      }
    }
  }

  showResultsView() {
    View.resultsView = document.getElementById("results-view");
    if (View.resultsView)
      if (View.resultsView.classList.contains("hidden")) {
        View.resultsView.classList.remove("hidden");
      }
  }

  hideMealsView() {
    View.mealsView = document.getElementById("my-meals-view");
    if (View.mealsView)
      if (!View.mealsView.classList.contains("hidden")) {
        View.mealsView.classList.add("hidden");
        View.mealsView.style.display = "none";
      }
  }

  hideResultsView() {
    View.resultsView = document.getElementById("results-view");
    if (View.resultsView)
      if (!View.resultsView.classList.contains("hidden"))
        View.resultsView.classList.add("hidden");
  }

  showMealsView() {
    View.mealsView = document.getElementById("my-meals-view");
    if (View.mealsView)
      if (View.mealsView.classList.contains("hidden")) {
        View.mealsView.classList.remove("hidden");
        View.mealsView.style.display = "grid";
      }
  }

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this.setData(data);

    const markup = this.getMarkup();

    this.clear();
    this.getParentElement().insertAdjacentHTML("afterbegin", markup);
  }

  show(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this.setData(data);

    const markup = this.getMarkup();
    this.getParentElement().insertAdjacentHTML("afterbegin", markup);
  }

  clear() {
    this.getParentElement().innerHTML = "";
  }

  renderSpinner() {}

  renderError(message = this.getErrorMessage()) {
    const markup = `<p>${message}</p>`;

    this.clear();
    this.getParentElement().insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(message = this.getMessage()) {
    const markup = `
      <p>${message}</p>
    `;
    this.getMessageDiv().innerHTML = markup;
    this.getMessageDiv().classList.toggle("hidden");
    setTimeout(() => {
      this.getMessageDiv().classList.toggle("hidden");
    }, 3000);
  }

  setData(data) {
    this.#data = data;
  }

  getData() {
    return this.#data;
  }
}
