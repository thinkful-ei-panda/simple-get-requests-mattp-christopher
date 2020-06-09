'use-strict';

function getDogImage(value) {
  console.log(value);
  fetch(`https://dog.ceo/api/breeds/image/random/${value}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  responseJson.message.forEach(
    $('#js-results').append(
      `<img src="${responseJson.message}" class="results-img">`
    )
  );
  //display the results section
  $('.results').removeClass('hidden');
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const value = $('#js-input').val();
    console.log(value)
    getDogImage(value);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

$(getDogImage);