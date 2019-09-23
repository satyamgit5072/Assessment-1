//Ques 1)

//Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

//Ans)

function Equal_NotEqual(obj1, obj2) {
    var skeys = Object.keys(obj1);
    var nkeys = Object.keys(obj2);
    if (skeys.length != nkeys.length) {
        return "NotEqual";
    }
    for (var i = 0; i < skeys.length; i++) {
        var Keyname = skeys[i];
        if (obj1[Keyname] !== obj2[Keyname]) {
            return "NotEqual";
        }
    }
    return "Equal";
}
var satyam = {
    age : 21,
    gender : 'male',
    nationality:"India"
}
var naidu = {
    age : 21,
    gender : 'male',
    nationality:"India"
}
console.log(Equal_NotEqual(satyam,naidu));
console.log();

//Ques 2)

//How to create a Javascript class in ES6? Write code with example using inheritance.

//Ans)

//In JavaScript class is a type of function. Classes are declared with the class keyword. We will use class expression syntax to initialize a class. In classes the body of the class definition becomes the contents of the prototype object (except for static methods), and among them, we define a constructor.

class Employee
{
constructor(name,dept,salarywithoutBonus)
{
    this.name = name;
    this.dept = dept;
    this.salarywithoutBonus = salarywithoutBonus;
}
salary()
{
return `${this.name}s salary is ${this.salarywithoutBonus}`
}
}


class DataScientist extends Employee
{
constructor(name,dept,salarywithoutBonus,bonus)
{
    super(name,dept,salarywithoutBonus);
    this.bonus = bonus;
}
salary()
{
return `${super.salary()} with a bonus ${this.bonus}`;
}
Leaves()
{
return `${this.name} who is a datascientist can have maximum 3 days leave per month`
}
}
var SatyamEmp = new DataScientist('naidu','IT',48000,10000);
console.log(SatyamEmp.salary());
console.log(SatyamEmp.Leaves());
console.log();

//Ques 3)

//Explain Destructuring Assignment in ES6? Write code with example.

//Ans)

//In ECMAScript 6 destructuring assignment allows you to extract individual items from arrays or objects and place them into variables using a shorthand syntax. In all destructuring assignments the left-hand side of the assignment is the destructuring target. The pattern which defines the variables being assigned the right-hand side of the assignment is the destructuring source — the array or object which holds the data being extracted.

var myArray = ['a', 'b', 'c'];

//ES6 destructuring permits a simpler and less error-prone alternative:
var [one, two, three] = myArray;
console.log(one);
console.log(two);
console.log(three);
console.log();

//Swapping values in ES5 requires a temporary third variable,but it’s very simple with destructuring:

 var a = 1, b = 2;
 [a, b] = [b, a];
 console.log(a);
 console.log(b);
 console.log();

 //we  can rerrange any number of items.

 var c=7, d=8, e=9, g=6;
 [c,d,e,g]=[g,e,d,c];
 console.log(c);
 console.log(d);
 console.log(e);
 console.log(g);
 console.log();
 
//Ques 4)

//What are string and template literals in Es6? Write code with example.

//Ans)

//- Template literals is just another way of writing strings that makes use of backticks instead of single quotes '' or double quotes"". It was referred to as template strings prior to ES6.
//- To embed an expression (placeholder) in template literals, we enclose them in a dollar sign and curly braces like this${expression}.
//- Everything in the back-ticks gets passed to a default function which concatenates to a single string unless a function is specified.

//String Interpolation

//Older versions doesn't have Template literals. so, The code loooks somewhat complex

var name = "Satyam";
var job = "Backend Developer";
var tools = "Nodejs and mongo";
console.log("My name is " + name + " and I am a " + job + ". I write " + tools + "." );


//In older versions \n in strings is used for next line. But Template literals allows you to move to a new line by literally moving to a new line without using any character. 

const animal = {
    kind: "Monkey",
    food: "bananas", 
    hobby: "jumping trees"
};
const display = `Hey, this is a ${animal.kind}
It eats ${animal.food} and loves ${animal.hobby}`;
console.log(display);
console.log();

//Ques 5)

//Write a program for converting two arrays into a single array using arrow-function, map and iterators (without ‘for’) of Javascript ES6

//Ans)

var smallalphabets = ['a','b','c']
var alphabets = ['A','B','C','d','e']

alphabets.map( element =>{smallalphabets.push(element);
})
console.log(smallalphabets);

//Before Ecma6
var arrayA = [1,2,3]
var arrayB = [5,6,7]
var arrayC = arrayA.concat(arrayB);
console.log(arrayC)
console.log();


//Ques 6)

//Write a regex in Javascript ES6 to check if the email address provided is valid or not?

//Ans)

var a = "naidu.bojanki98@gmail.com";
var b = /^([a-z A-Z 0-9 \._]+)@([a-z A-Z 0-9]+).([a-z]{2,86})(.[a-z]{2,6})?$/;
if(b.test(a))
{
    console.log(`Entered mail ${a} is valid`);
}
else
{
    console.log(`Entered mail ${a} is not valid`);  
}
console.log();
