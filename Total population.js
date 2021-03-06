Print the total population of countries using reduce function

var XMLHttpRequest = require("xhr2");
var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);

request.send();

request.onload = function () {
  var data = JSON.parse(request.response);
  //console.log(data[4].currencies);

  let totalPopulation = data
    .map((data) => data.population)
    .reduce((acc, curr) => acc + curr);
  console.log(totalPopulation);
};

//OUTPUT

7349137231
