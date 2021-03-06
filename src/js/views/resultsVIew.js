import View from "./view.js";

class ResultsView extends View {
  #errorMessage =
    "You don't have any meals here, create one now by clicking the 'Create Meal' button!";
  #parentElement = document.getElementById("views");

  addHandlerResultsTab() {
    this.resultsTab.addEventListener("click", () => {
      if (View.resultsView) {
        this.hideMealsView();
        this.toggleResultsViewTab();
        this.showResultsView();
      }
    });
  }

  #generateMarkup() {
    return `
			<div id="results-view">
				<h2 id="header-nutrition-table">Table of Nutrition</h3>
				<table id="nutrition-table">
					<thead>
						<tr>
							<th>You Require</th>
							<th>Nutrient(unit)</th>
							<th>You Consume</th>
						</tr>
					</thead>
					<tbody>
            ${this.getData().map(this.#generateRowMarkup).join("")}
					</tbody>
				</table>
			</div>`;
  }

  getMarkup() {
    return this.#generateMarkup();
  }

  #generateRowMarkup(data) {
    return `
      <tr>
        <td>${data.userReqAmount}</td>
        <td>${data.nutrient}(${data.unit})</td>
        <td>${data.mealsAmount}</td>
      </tr>`;
  }

  getParentElement() {
    return this.#parentElement;
  }

  getErrorMessage() {
    return this.#errorMessage;
  }
}

export default new ResultsView();
