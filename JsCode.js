var values = 2;
switch(values){
  case 1:
    document.write(6);
    break;
  case 2:
    document.write(1 + '.' + ' ');
    break;
  default:
    document.write("NO VALUE");
}


//objects
let aaron = {
  name: "Aaron",
  age: 28,
}

aaron.name  = "Aaron Edward";//Global 'dot' notation.

document.write(aaron.name + ' ' + ' is a computer programmer.');

let me = {
  occupation: "Engineer",
  class: "Computer programmer",
  languages: "html, css, JavaScript"
}
me.occupation = "Software Engineer";

console.log(me.class);
console.log('I write computer programs with ' + me.languages + ' as a ' + me.occupation + '.' );
console.log(me);

var person = {
  firstName: "Aaron",
  lastName: " Bevans",
  age: 28,
  skills: "html, css and JavaScript",
  skills1: "object oriented Programming in JavaScript"
};

// Display some data from the object:
document.write(' ' + person.firstName + ' ' + person.lastName + " is " + person.age + " years old. His skills are " + person.skills + ', along with ' + person.skills1 + '.');

//Arrays are data structrues we usew to identify a list of items.
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';


console.log(selectedColors.length);

//function perform tasks or calculate a value.

function greet(){
  //body of function
  console.log('Hello World');
}
greet();


function greeting(name, profession){
  //body of function
  console.log('Hello ' + name + ' the ' + profession + '.');
}
greeting('Aaron Bevans', 'computer programmer');

//DIFFERENT TYPES OF FUNCTIONS: calculates value.
function square(number){
  return number * number;
}
console.log(square(3));

//operators
//arithmatic operators
let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x % y);

//INCREMENT
console.log(x);//10
console.log(++x);//10 + 1
console.log(++x);//11 + 1
console.log(x);//12
console.log(++x);//13
console.log(--x);//12


//variables
var activities = 'computer programming ';
let salary = '$1000,000 salary';
console.log(activities, salary);

//constants cannont be reassigned.
const computerProgrammer = 'Aaron Bevans';
console.log(computerProgrammer);

//Primitive TYPES
let alias = 'AB';//strings
let myAge = 28;//numbers
let notDefined = undefined;//undefined
let noviceSkills = null;//object
console.log(alias);
console.log(myAge);
console.log(notDefined);
console.log(noviceSkills);


//Dynamic typing allows you to change the value of a variable to a different type.
let skillSet = 'computer programming';
skillSet = 3;
console.log(skillSet);

//objects
const mySkills = {
  languages: 'html, css and javaScript',
  product: 'user interface',
  goal: function myGoal(){
    return ' I want to use ' + this.languages + ' to build a good ' +  this.product + '.'
  }
}
document.write(mySkills.goal());

//Arrays
let simpleArray = ['aaron', 'angelica', 'avrie'];
simpleArray[3] = 'puppy';
console.log(simpleArray);
console.log(simpleArray[0]);


//types of functions
function calculate(number){
  return number * number;
}
console.log(calculate(3));

function ifFunction(name){
  if(name === 'Aaron Bevans'){
    return "Yes it is!";
  }else{
    return "No it is not!";
  }
}
console.log(ifFunction('Eric'));
