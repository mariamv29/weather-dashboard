var cityNameEl = document.querySelector("#city-name");
//variables to store a reference to the <form> el and id of user form
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=austin&appid=65f5c26cfffe1860cc7a2aca1a96630d`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

//take lat and lon data point from first fetch request to make second api call

var getCity = function () {
    
  // grab city name from url query string
  var queryString = document.location.search;
  var cityName = queryString.split("=")[1];

  if (cityName) {
    //display city name on the page
    cityNameEl.textContent = cityName;
  }
};

// /// form submission event function 
// var formSubmitHandler =  function(event) {
//     //prevent page from refreshing 
//     event.preventDefault();
//     //value of input elment 
//     console.log(event);
// }