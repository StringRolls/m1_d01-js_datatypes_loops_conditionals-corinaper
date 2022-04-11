// Class code examples
// Variable declaration (individual)

console.log('Variables are initialised with undefined', name)


// Variable declaration (grouping)
let age, phone, year


// Variable initialization
let dog = 'Fuffy'
console.log('My dog\'s name is ', dog)

dog = 'Salsicha'
console.log('Mi perro ahora se llama', dog)

console.log(
    "<<< typeof >>>",
    typeof 123,
    typeof ("Hola"),
    typeof undefined,
    typeof null,
    typeof false
);

const cappuccino = "cappuccino";
// cappuccino = "coffee"
let betterCappuccino = "cappuccino with cacao";
betterCappuccino = "it's really just coffee";

console.log(betterCappuccino = "ok, that's eought");
console.log(betterCappuccino == "ok that's enough");

// String template literals
const name = "Corina";
const sentence = `My name is ${name}`;
const sentence2 = `The result is ${10 / 2}`;

let customer = { firstName: "Foo", lastName: "Kim" };
let message = `Hello ${customer.firstName} ${customer.lastName}!!`;
console.log("message=", message);
console.log("customer=", customer);

// Remainder aporator
console.log("The remainder of 4 / 2 is ", 4 % 2);
console.log("The remainder of 7 / 2 is ", 7 % 2);
console.log("Is 6 a multiple of 3? -> ", 6 % 3 === 0);
console.log("Is 6 a multiple of 3? -> ", !(543262623 % 2 === 0)); // Quick trick to see if a number is odd

// String length porperty
let lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eos nam quis unde a odit, iste veniam, voluptatem officia minus sunt delectus. Expedita suscipit corrupti voluptatibus voluptatum nemo neque molestiae.";
console.log("This lorem text is", lorem.length, "characteres");

lorem[0]="l"; //cannot be changed
console.log(lorem);

// String .charAt() method
console.log(greeting.charAt(1)); // <== e
console.log(greeting.charAt(0)); // <== H
console.log(greeting.charAt(11)); // <== !
console.log(greeting.charAt(5)); // <== " "
console.log(greeting.charAt(12)); // <== "" as an empty string

// String .indexOf() method
const message2 = "Don't be sad, be happy!";
console.log(message2.indexOf("Don't")); // <== 0
console.log(message2.indexOf('t')); // <== 4
console.log(message2.indexOf('fuffy')); // <== -1

// String .substring() method
const message3 = "Don't be sad, be happy!";
let withSubstring = message3.substring(0, 3);
console.log(withSubstring); // <== Don: rteurns string neetween first and last index

// String .includes() method
const str = "To be, or not to be, that is the question.";
console.log(str.includes('to be')); // true
console.log(str.includes('question')); // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1)); // false




