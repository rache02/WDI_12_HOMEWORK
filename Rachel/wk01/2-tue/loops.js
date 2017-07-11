console.log('Homework Loops');

//The Even/Odd Reporter
for (var count = 1; count <= 20; count++) {
    // if number is even
  if (count % 2 === 0) {
    console.log(count + ' is even');
    // else number is odd
  } else {
    console.log(count + ' is odd');
  }
}

// Multiplication Tables
    // number * 9 =
for (var count = 0;  count <= 10; count++) {
  for (var num = 0; num <= 10; num++) {
      console.log(count + ' x ' + num + ' = ' + count*num);
  }
}

// Your Top Choices
var myfavoritecolor = ['red','green','blue','orange'];
var suffix = ['st','nd','rd','th']
  for (var index = 0; index < myfavoritecolor.length; index++) {
    console.log(' my ' + (index+1) + suffix[index] + ' choice is ' + myfavoritecolor[index]);
}

// // JS else if statements
// if the year is 2015 Im in the present
// if before 2015 Whoa! Blast from the past!
// if after 2015 Greetings form the future!

//if year truth 2015
// else if truth 

var year = ;
if (year === 2015) {
  console.log('Im in the present!');
} else if (year < 2015) {
  console.log('Whoa! Blast from the past!');
} else {
  console.log('Greetings from the future!');
}
