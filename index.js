
function getDogImage(numberOfDogs, typeOfDog) {
  fetch(`https://dog.ceo/api/breed/${typeOfDog}/images/random/${numberOfDogs}`)
    .then((response) => response.json())
    .then((responseJson) => {
      displayResults(responseJson);
    })
    .catch((error) => console.log('nope, something went wrong'));
}

function whatchSubmit() {
  $('body').on('submit', 'form', (event) => {
    event.preventDefault();
    const numberOfDogs = $('#js-input-num').val();
    const typeOfDog = $('#js-input-breed').val();
    console.log(typeOfDog)
    getDogImage(numberOfDogs, typeOfDog);
  });
}

function displayResults(responseJson) {
  let imgArr = responseJson.message;
  $('#results').empty();
  imgArr.forEach((img) => {
    $('#results').append(`<img src="${img}" class="img-result"/>`);
  });
}

$(whatchSubmit);