var apiurl =
  "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}";

fetch(apiurl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
