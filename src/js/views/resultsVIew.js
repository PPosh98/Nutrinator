import View from "./view.js";

class ResultsView extends View {
  #errorMessage =
    "You don't have any meals here, create one now by clicking the 'Create Meal' button!";
  #parentElement = document.getElementById("views");

  drawChart() {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Task", "Hours per Day"],
        ["Work", 11]
      ]);

      var options1 = {
        pieHole: 0.7,
        backgroundColor: "white",
        chartArea: {
          width: 170,
          height: 170
        },
        width: 200,
        height: 200,
        legend: {
          position: "top",
          alignment: "center"
        }
      };

      var options2 = {
        pieHole: 0.7,
        backgroundColor: "white",
        chartArea: {
          width: 170,
          height: 170
        },
        width: 200,
        height: 200,
        legend: {
          position: "top",
          alignment: "center"
        }
      };

      var chart1 = new google.visualization.PieChart(
        document.getElementById("donutchart1")
      );
      chart1.draw(data, options1);

      var chart2 = new google.visualization.PieChart(
        document.getElementById("donutchart2")
      );
      chart2.draw(data, options2);
    }
  }

  #generateMarkup() {
    return `
			<div id="results-view">
				<div id="charts">
					<div id="donutchart1" class="chart"></div>
					<div id="donutchart2" class="chart"></div>
				</div>
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
				<button class="btn-submit">Select Other Meal(s)</button>
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
