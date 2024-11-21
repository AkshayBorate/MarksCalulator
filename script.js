"use strict";

document.getElementById("btn").addEventListener("click", function () {
  const d1 = document.getElementById("x1").value;
  const d2 = document.getElementById("x2").value;
  const d3 = document.getElementById("x3").value;

  const v = parseInt(d1);
  const w = parseInt(d2);
  const x = parseInt(d3);

  if (isNaN(v) || isNaN(w) || isNaN(x)) {
    alert("Please enter valid numbers for all subjects");
    return;
  }

  const res = v + w + x;
  const per = Math.round(res / 3);
  let msg = "";

  if (per < 35) {
    msg = "Failed Tu shiku nakos";
  } else if (per < 50) {
    msg = "F😢";
  } else if (per < 60) {
    msg = "E😫";
  } else if (per < 70) {
    msg = "D😉";
  } else if (per < 80) {
    msg = "C😊";
  } else if (per < 90) {
    msg = "B😎";
  } else {
    msg = "Bas kr re amchya tondakade pn bg 😫";
  }

  document.getElementById("mark").innerHTML = `
    <p>Total Marks: ${res}</p>
    <p>Percentage: ${per}%</p>
    <p>Grade: ${msg}</p>
  `;

  renderHighchartsPieChart([v, w, x]);
});

function renderHighchartsPieChart(marks) {
  Highcharts.chart("container", {
    chart: {
      type: "pie",
    },
    title: {
      text: "Marks Distribution",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "{point.name}: {point.y} ({point.percentage:.1f}%)",
        },
      },
    },
    series: [
      {
        name: "Marks",
        colorByPoint: true,
        data: [
          {
            name: "Physics   ",
            y: marks[0],
          },
          {
            name: "Chemistry    ",
            y: marks[1],
          },
          {
            name: "Mathematics     ",
            y: marks[2],
          },
        ],
      },
    ],
  });
}
