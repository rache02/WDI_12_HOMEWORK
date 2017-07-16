// When drop-down menu is clicked list will appear
// user selects a city from list
// if the city is already selected
// background image will stay same
// if the city select changes
// background image changes

var cities = ['NYC','SF','LA','ATX','SYD'];
var select = document.getElementById('city-type');

// for(var i = 0; i < cities.length; i++) {
//   var option = document.createElement("option");
//   $('#city-type').append($(option).attr(cities, function(,i++)));
// };
// for(var i = 0; i < cities.length; i++) {
//   $('#city-type').append('<option value='+i+'>'+cities[i]+'</option>');
// };

for (var i = 0; i < cities.length; i++) {
  cities[i];
  var option = document.createElement("option");
  option.textContent = cities[i];
  option.value = cities[i];
  select.appendChild(option);
}

// function changeBackground() {
//   if (event.target.value === "AXT") {
//     document.body.style.background = "url(images/austen.jpg)";
//   } else if (select.value === "SYD") {
//     document.body.style.background = "url(images/sydney.jpg)";
//   } else {
//   document.body.style.background = "url(images/" + event.target.value + ".jpg)"
//   }


// document.body.classList.remove()
var changeBackground = function() {
  if (event.target.value === 'NYC') {
    document.body.classList.add('nyc');
    } else if (event.target.value === 'SF') {
    document.body.classList.add('sf');
    } else if (event.target.value === 'LA') {
      document.body.classList.add('la');
    } else if (event.target.value === 'ATX') {
      document.body.classList.add('austin');
    } else if (event.target.value === 'SYD') {
      document.body.classList.add('sydney');
    } else {
      document.body.classList.add('citipix_skyline');
  }
}
select.addEventListener("change", changeBackground)

// Must use following methods:
// - .append() inserts content at end of selected element
// - .attr() sets or returns attribute and values of the selected elements
// - .val() returns or sets the value attribute of the selected element
// - .change the change event occurs when the value of an element has changed
