
// //variables to store a reference to the <form> el and id of user form
var cityFormEl = document.querySelector("#city-form");
var nameInputEl = document.querySelector("#city-name");
var apiKey = "65f5c26cfffe1860cc7a2aca1a96630d"

var apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=524901&lang=fr&appid=" + apiKey;

//formatting the response in the fetch logic 
fetch(apiUrl)

  .then(function (response) {
    response.json().then(function(data) {
        console.log(data);
      })
  
  });

  
//take lat and lon data point from first fetch request to make second api call



/// form submission event function 
var formSubmitHandler =  function(event) {
    //prevent page from refreshing 
    event.preventDefault();
      // get value from input element


    console.log(event);
}

// add event listeners to forms
cityFormEl.addEventListener("submit", formSubmitHandler);
//languageButtonsEl.addEventListener("click", buttonClickHandler);
//