// (1.) Write the correct javascript to select the second h1 element:

document.querySelectorAll('h1')[1]


// (2.) How would you change the contents of the element to be 'Friend'?
//
// ```html
// <html>
//   <div>
//     <h1>Hello</h1>
//   </div>
//
//   <ul>
//     <h1>Goodbye<h1>
//   </ul>
// </html>
// ```

document.querySelectorAll('h1')[1].textContent = 'Friend'

// (3.) How would you add an event listener to the button element inside the div, so that when it is clicked the background colour of the div changes to red?
//
// ```html
// <html>
//   <div>
//     <button>Click me!</button>
//   </div>
//
//   <button>Dont click me</button>
// </html>
// ```

var button = document.querySelectorAll('button')[0]
var changeColor = function() {
  document.querySelector('button').style.backgroundColor = "red"
}
button.addEventListener('click', changeColor)

// (4.) Store the contents of the input box element with id 'favCol' into a variable called 'favouriteColor'.
//
// ```html
// <html>
//   <input type="text" id="favCol"/>
//   <input type="text" id="leastFavCol"/>
//   <input type="text" id="favFood"/>
// </html>
// ```

var favouriteColor = document.getElementById('favCol').value

// (5.) Append a paragraph tag to the div with class 'my-articles'.
//
// ```html
// <html>
//   <body>
//   <input type="text" id="search"/>
//
//   <div class="my-articles">
//
//   </div>
//   </body>
//
// </html>
// ```

$( "div" ).append( $( "p" ) )

// (6.) Write the necessary code to figure out how many list items are in the ul tag below:
//
// ```html
// <html>
//   <body>
//   <input type="text" id="search"/>
//
//   <ul>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//   </ul>
//   </body>
//
// </html>
// ``

$("ul").children().length

// (7.) Write the neccessary code so when the button is clicked a new list item with a random number is appended to the unordered list with the class 'lucky-numbers'
//
// ```html
// <html>
//   <body>
//     <button>draw number</button>
//     <ul class="lucky-numbers">
//       <li>7</li>
//       <li>12</li>
//       <li>45</li>
//     </ul>
//   </body>
//
// </html>
// ```

var $btn = $('button');

$btn.on('click', function(event) {

  event.preventDefault();
  $( "ul" ).append('<li></li>')

})
