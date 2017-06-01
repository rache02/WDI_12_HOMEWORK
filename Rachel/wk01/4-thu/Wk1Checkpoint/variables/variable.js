console.log('first test');

//JS Variables
var captain = 'Jack'
var phrase = 'Oh '.concat(captain) + ', my '.concat(captain) + '!'
  console.log(phrase);

//JS Conditionals
// if more souls than lifeRafts console.log SOS!

var souls = 3;
var lifeRafts = 2;
if (souls > lifeRafts) {
  console.log('SOS!');
}

//Data Structures - JS Arrays

var weekend = ['Saturday']
  console.log(weekend);
  weekend.push('Sunday')
  console.log(weekend);
  weekend.unshift('Friday')
  console.log(weekend);
var day = weekend[1];
  console.log(day);
  weekend.shift()
  console.log(weekend);

//JS functions

var rectangleArea = function (length,width) {
  var area = length * width;
  console.log(area);
}

  function (3,4) {
  return
  console.log(area);
}
