$(document).ready(function() {
  $.ajax("https://cq055i5m06.execute-api.us-east-1.amazonaws.com/recipes", {
    type: "GET"
  })
  .done(function (data, textStatus, jqXHR) {
    console.log(data.Items);
    createGrid(data.Items);
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
    console.log(jqXHR.responseText);
    alert("Server error. Try again later.");
  });
});

function createGrid(gridData) {
  new gridjs.Grid({
    columns: [
      {id: "name", name: "Name"},
      {id: "by", name: "Made By"}
    ],
    data: gridData,
    search: true,
    sort: true,
    pagination: {
      limit: 10
    },
    fixedHeader: true
  }).render(document.getElementById("wrapper"));
}