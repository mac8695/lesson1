/**
 * Created by MaC on 2016-09-09.
 */
// link to node's file system module to read text files
var fs = require('fs');

//open and read food list
var food = fs.readFileSync('food.txt','utf8');

// print a food heading and the list of food
console.log('FOOD');
console.log(food);

//repeate with the drinks
var drinks = fs.readFileSync('drinks','utf8');

// print heading and the list of drinks
console.log('\nDRINKS');
console.log(drinks);
