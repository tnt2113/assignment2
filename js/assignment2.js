// Assignment 2

// What is the length of the "data" array (2 pts.)? 

var length1 = data.length;
var string1 = 'The length of the data array is ';
var lengthStatement = string1 + length1;
lengthStatement

// What is the fourth element of the array *hint: remember how indexing for arrays beings (2 pts.)

var fourthElement = data[2];
var string2 = 'The fourth element of the array is ';
var elementStatement = string2 + fourthElement;
elementStatement

// Using the array "map" funcitonality, create a variable "city_names" that has the name of each city (4 pts.)

var city_names = data.map(function(x){
  return x.city;
});

// Using the array "map" funcitonality, create a variable "populations" that the population of each city (4 pts.)

var populations = data.map(function(x){
  return x.populations;
});

// Sort the data variable by median age (4 pts.)

 var sorted = data.sort(function(x,y){
  return x.age - y.age;
});

// Based on this, what are the cities with the youngest/oldest median ages? (2 pts.)

var youngest = sorted[0];
var string3 = 'The city with the youngest median age is ';
var youngestStatement = string3 + youngest.city;
youngestStatement;

var oldest = sorted[99];
var string4 = 'The city with the oldest median age is ';
var oldestStatement = string4 + oldest.city;
oldestStatement

// Write a function called "description" that takes in an object (one element from the data array) and constructs the following sentence (4 pts.):"The median age in " {city} " is " {median age}"


var description = function(x){
  return "The median age in " + x.city + " is "+ x.age;
};
// Pass one of the data elements to your function and view the results

description(data[0])

// Using the array filter functionality, create an array called "maleCities" that has the names of cities where there are more men than women (3 pts.)

var subset = data.filter(function(x){
  return x.males>x.females;
});

var maleCities = subset.map(function(x){
  return x.city;
});

// How many of the top 100 cities have more males than females?

var length2 = maleCities.length;




