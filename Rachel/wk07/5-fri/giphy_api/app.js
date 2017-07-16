$('form').submit(function(event) {
  event.preventDefault();
  console.log('form submission');

  var phrase = $('input').val()
  console.log('Search phrase found!');

  var request = {
    url: 'http://api.giphy.com/v1/gifs/search',
    data: {
      api_key: 'd9807d778cd44cec98f3de770feb582f',
      q: phrase,
      limit: 10,
      offset: 0
    }
  }

  $.ajax(request).done(displayResults)

  $(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
      $('.results').append($.ajax(request).done(displayResults))
    }
  })
})

function displayResults(response) {
  console.log(response);
  // debugger
  response.data.forEach(function(picture) {
    // debugger
    var giphy = $('<img>').attr('src', picture.images.original.url)
    // debugger
    $('.results').append(giphy)
  })

}
