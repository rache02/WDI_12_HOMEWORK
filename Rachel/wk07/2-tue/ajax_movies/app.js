// var btn = document.querySelector('button');
var $btn = $('button');

// btn.addEventListener('click', function(event)) {
$btn.on('click', function(event) {

  event.preventDefault();
  console.log('its working');

  // var movieName = document.querySelector('input').value;
  var $movieName = $('input').val();
// var search = "http://omdbapi.com/?s=sharknado&apikey=2f6435d9"

  // var search = url:"http://omdbapi.com/?t="+movieName+"&apikey=2f6435d9"
  var search = {
    url:"http://omdbapi.com/",
    data: {
      s: $movieName,
      apikey: '2f6435d9'
      }
    }

  $.ajax(search).done(function(response) {
    console.log(response);
    debugger
    for (var i = 0; i < response.length; i++) {
      var newMovie = document.createElement('div');
      newMovie.textContent = response.Title;
      document.querySelector('.response').appendChild(newMovie)
    }
  })
})








//function to loop through for each
