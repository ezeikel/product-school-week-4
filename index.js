// lets save a reference to our button element
var button = document.querySelector('button');

// lets save a reference to our paragraph (this is where the joke will be displayed)
var display = document.querySelector('p');

// this url to access the API
var url = 'https://api.chucknorris.io/jokes/random';

// we add function that listens to a click on the button then calls a function
button.addEventListener('click', function() {
  // once the button is clicked, we use fetch to make a call to the API
  fetch(url)
    // getting the data can take some time so fetch returns a Promise which basically says
    // when the data finally arrives we will pass it .then()
    .then(function (jsonResponse) {
      // the API returns JSON and we convert that to an object using .json()
      return jsonResponse.json();
    })
    .then(function (data) {
      // finally with the object we set the text of the display element to the .value property
      display.innerText = data.value;
    });
});
