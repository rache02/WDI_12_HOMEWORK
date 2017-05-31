console.log('Homework Wednesday');

console.log('Days of the Week');
  var days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  var pop = days_of_the_week.pop ()
  var unshift = days_of_the_week.unshift('Sunday')
    console.log(days_of_the_week);
  var days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  var weekdays = days_of_the_week.slice(0,5)
    console.log(weekdays);
  var weekend = days_of_the_week.slice(5,7)
    console.log(weekend);
  var remove = days_of_the_week.splice(5,2)
    console.log(days_of_the_week);
  var sort = days_of_the_week.sort()
    console.log(days_of_the_week);

  // var weekdays = days_of_the_week.filter()
  //   var days_of_the_week = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],['Saturday', 'Sunday']]
  //   console.log();

// console.log('Favourite Recipe');

// // title_string
//   console.log('Mole');
// // serving_number
//   servings = 2;
//   console.log('Serves: ' + servings);
// // ingredients_array of stings
// var ingredients = ['Cinnamon', 'Cumin','Cocoa']
//   console.log(' Ingredients ');
//   console.log(ingredients);

// console.log('The Reading List');

// title-string
// author-string
// alreadyRead-boolean
// title = 'Pride and Prejudice', 'Frankenstein'
// author = 'Jane Austen', 'Mary Shelley'
// read = 'you have already read', 'you still need to read'

// var books = [book1,book2]
  // console.log(books);
// var book1 = {
//     title: 'Pride and Prejudice',
//     author: 'Jane Austen',
//     read: false,
// }
// var book2 = {
//     title: 'Frankenstein',
//     author: 'Mary Shelley',
//     read: true,
// if (read true) text = 'You already read'
//   else {
//   text = 'You still need to read'
//   }
// }
//   console.log(book2.title + ' by ' + book2.author + book2.read);

console.log('The Movie Database');

// titlesting
// durationnumber
// starsarray

var movie1 = {
    title: 'Inception',
    duration: 148,
    stars: ['Leonardo DiCaprio','Joseph Gordon-Levitt','Ellen Page','Tom Hardy'],
    // getmovieinfo: function () {
    //   console.log(this.title + ' lasts for ' + this.duration + ' minutes and stars: ' + this.stars);
    // }
}
  console.log(movie1.title + ' lasts for ' + movie1.duration + ' minutes and stars: ' + movie1.stars);

var movie2 = {
    title: 'The Dark Knight',
    duration: 152,
    stars: ['Christian Bale','Heath Ledger','Maggie Gyllenhaal','Morgan Freeman','Gary Oldman'],
    // getmovieinfo: function () {
    //   console.log(this.title + ' lasts for ' + this.duration + ' minutes and stars: ' + this.stars);
    // }
}
  console.log(movie2.title + ' lasts for ' + movie2.duration + ' minutes and stars: ' + movie2.stars);
