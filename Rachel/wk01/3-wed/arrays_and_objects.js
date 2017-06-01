// console.log('Homework Wednesday');
//
// console.log('Days of the Week');
//   var days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//   var pop = days_of_the_week.pop ()
//   var unshift = days_of_the_week.unshift('Sunday')
//     console.log(days_of_the_week);
//   var days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//   var weekdays = days_of_the_week.slice(0,5)
//     console.log(weekdays);
//   var weekend = days_of_the_week.slice(5,7)
//     console.log(weekend);
//   var remove = days_of_the_week.splice(5,2)
//     console.log(days_of_the_week);
//   var sort = days_of_the_week.sort()
//     console.log(days_of_the_week);

  // var weekdays = days_of_the_week.filter()
  //   var days_of_the_week = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],['Saturday', 'Sunday']]
  //   console.log();

console.log('Favourite Recipe');

// title_string
// serving_number
// ingredients_array of stings

// var Recipe = [{
//   name: 'Pancake',
//   servings:6,
//   ingredients: ['self raising flour','salt','eggs','sugar','milk'],
// } , {
//   name: 'Mole',
//   servings:2,
//   ingredients: ['Cinnamon', 'Cumin','Cocoa'],
// }]

  // console.log('name: ' + Recipe.name);
  // console.log('Servings: ' + Recipe.servings);
  // console.log(Recipe.ingredients.toString());
  // //join turns array into string
  // console.log(Recipe.ingredients.join('\n'));

console.log('The Reading List');
//
// title-string
// author-string
// alreadyRead-boolean
// title = 'Pride and Prejudice', 'Frankenstein'
// author = 'Jane Austen', 'Mary Shelley'
// read = 'you have already read', 'you still need to read'

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
  // var books = [book1,book2]
  // console.log(books);
  // console.log(book2.title + ' by ' + book2.author);

// var books = [{
//   title: 'Pride and Prejudice',
//       author: 'Jane Austen',
//       read: false,
//     }, {
//         title: 'Frankenstein',
//         author: 'Mary Shelley',
//         read: true,
// }]
// for (var index = 0; index < books.length; index++) {
//   var currentBook = books[index]
//   if (currentBook.read) {
//     console.log('already read' + currentBook.title + 'by' + currentBook.author);
//   } else {
//     console.log('you should read ' + currentBook.title);
//   }
// }

console.log('The Movie Database');

// titlesting
// durationnumber
// starsarray

var movie = [{
    title: 'Inception',
    duration: 148,
    stars: ['Leonardo DiCaprio','Joseph Gordon-Levitt','Ellen Page','Tom Hardy'],
    // getmovieinfo: function () {
    //   console.log(this.title + ' lasts for ' + this.duration + ' minutes and stars: ' + this.stars);
    // }
} , 
  // console.log(movie1.title + ' lasts for ' + movie1.duration + ' minutes and stars: ' + movie1.stars);

// var movie2 =
    {
    title: 'The Dark Knight',
    duration: 152,
    stars: ['Christian Bale','Heath Ledger','Maggie Gyllenhaal','Morgan Freeman','Gary Oldman'],
    // getmovieinfo: function () {
    //   console.log(this.title + ' lasts for ' + this.duration + ' minutes and stars: ' + this.stars);
    // }
}]
  // console.log(movie2.title + ' lasts for ' + movie2.duration + ' minutes and stars: ' + movie2.stars);

var decribeMovie = function(movie) {
  return (movie.title + ' lasts for ' + movie.duration + ' minutes and stars: '
  + movie.stars.join(', '));
}
var result = decribeMovie(movie);
  console.log(result);
// return allows choose to console
