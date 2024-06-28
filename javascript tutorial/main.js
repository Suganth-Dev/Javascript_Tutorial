//console.log("SUGANTHTHALA".charAt((Math.floor(Math.random()*12))));

//const myName = "suganth";
//console.log(myName.charAt((Math.floor(Math.random()*myName.length))));

//if statements

 let customerIsbanned = true;
let viewer = "Dhuddu Js full course"
let reply;
if(customerIsbanned){
    reply = 'sorry'
}
else if(viewer){
    reply = `Enjoy ${viewer}`;
}
else{
    reply = 'Sorry I am still working';
}
console.log(reply);

//if statement test score

let testScore = 65;
let grade;
let collegeStudent = false;

if(testScore>=90){
    grade = 'A';
}else if(testScore>=80){
    grade = 'B'
}
else if(testScore>=70){
    grade = 'C'
}
else if(testScore>=60){
    grade = 'D'
}
else{
    if(collegeStudent){
        grade = 'RA'
    }else{
    grade = 'F'
}
}
console.log(grade)

//switch statements

switch (expressions or values){
    case choice1:
        //runcode
        break
    case choice2:
        //run different code:
        break
    default:
        //run different code
}

//example 1

switch(3){
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;

    default:
        console.log("No match")
}

// ternary operator

// condition ? exprIfTrue : expreIfFalse

let subscriber = "subscribed";
let response = subscriber ? "welcome!": "kindly subscribe";
console.log(response);

// example 1 test score

let testScore = 90;
let grade = testScore >89 ? "A" 
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: "D"
console.log(grade);

// example 2 game

let player = "paper";
let computer = "scissors";
let result = 
    player === computer ? "Tie"
    : player === "rock" && computer === "paper" ? "computer wins!"
    : player === "paper" && computer === "scissors" ? "computer wins!"
    : player === "scissors" && computer === "rock" ? "computer wins!"
    : "player wins";
console.log(result);

// USER INPUT  "ALERT"

// no input for outside
let myBoolean = alert("hi subscriber");
console.log(myBoolean);
// using confirm you get alert msg user input
let myBoolean = confirm("ok === True\n cancel === False");
console.log(myBoolean);
// customer enter the msg  // ?? null collapsing
let my = prompt("Enter your name");
console.log(my ?? "You didn't enter your name");

// onnum eludhaaama 'ok' kuduthaa  that is 'string' // string avoid pannanum

let my = prompt("Enter your name");
if (my.length){console.log(my ?? "You didn't enter your name"); }
else {
    console.log("you didn't enter your name");
}

// logic error error makes  ".length problem"

let my = prompt("Enter your name");
if (my){console.log(my ?? "You didn't enter your name"); }
else {
    console.log("you didn't enter your name");
}

//whitespace error// "trim" unwanted whitespace

let my = prompt("Enter your name");
if (my){console.log(my ?? "You didn't enter your name"); }
else {
    console.log("you didn't enter your name");
}
console.log(my.trim().length);

// LOOPS 
  //step 1 - variable initiation
  //step 2 - condition
  //step 3 - variable increment
// while looop

let i=0;
while(i<50){
    console.log(i);
    i = i+1;
}
// Do while loop  one timaavathu run aaganum
let i=50;
do{
    console.log(i);
    i = i+10;
} while(i<50)

// For loop

for (i=0;i<50;i++){
    console.log(i);
}

//example 2

let name="money";
for(let i=0; i<= name.length; i++)
    {
        console.log(name.charAt(i));
    }

//FUNCTIONS
function Sum(num1, num2){
    return num1+num2;
}
console.log(sum (10,2)); 
console.log(sum (11,2)); 
console.log(sum (120,2)); 
console.log(sum (10,200));

//example 2
function sum(num1, num2){
    console.log(num1);
    console.log(num2);
    if(num2 ===undefined){
        return num1+num2;
    }
        return num1+num2;
}
console.log(sum(10,100));

//example 3

email = "suganth2501@gmail.com"

console.log(email.slice(0,email.indexof("@")));

//example 4

function getUserNameFromEmail(email){
    return(email.slice(0.email.indexof("@")));
}
console.log(getUserNameFromEmail("suganth2501@gmail.com"));

console.log(getUserNameFromEmail("suga2501@gmail.com"));
console.log(getUserNameFromEmail("suganth25@gmail.com"));

// example 5 to propercase
// (name) =>  // fuction (name)
const toProperCase = function (name){
    return name.charAt(0).toUppercase() + name.slice(1).toLowercase();
}
console.log(toProperCase("subscribe"));

//Scope Var, let, const

var x=1;
var x=2;
console.log(x);
// this is problem o/p = 2

let x=1
 x=2
console.log(x);
// error varum o/p = 2

const x=1;
const x=2;
console.log(x);
// error varum const one variable work aagum  o/p  = error

// Global scope
var x=1;
let y=2;
const z=3;
//local scope // block scope
{
    let y=4;
}

//local scope // fuction scope

function myFunc(){
    const z = 5;
}

//example 1   //var = fuction scope
var x=1;
let y=2;
const z=3;

console.log('global: ${x}');
console.log('global: ${y}');
console.log('global: ${z}');

function myFunc(){
    //const z=5
    console.log('fuction: ${x}');
    console.log('fuction: ${x}');
    console.log('fuction: ${x}');

    if(true){
        //let y=4
        console.log('block: ${x}');
        console.log('block: ${y}');
        console.log('block: ${z}');
    }
}
myFunc()
console.log(y);


// Arrays

const myArray=[];
//adding element
myArray[0]="Dhuddu";
myArray[1]="Subscribe"
myArray[2]=999
myArray[3]= true


console.log(myArray[2]);
console.log(myArray.length);
console.log(myArray[myArray.length-1]);

//adding new element example 1
const myArray=[];
//adding element
myArray[0]="Dhuddu";
myArray[1]="Subscribe"
myArray[2]=999
myArray[3]= true

console.log(myArray);
myArray.push("click");  // adding element @ last
console.log(myArray);
myArray.pop(); // last element delete
console.log(myArray);
//push - last addelement
//pop - last element delete
//unshift- fist add element
//shift - first element delete

//example - 2
const myArray=[];
//adding element
myArray[0]="Dhuddu";
myArray[1]="Subscribe"
myArray[2]=999
myArray[3]= true

console.log(myArray);

const lastItem = myArray.pop("bala")

// center element delete method

myArray.splice(2,1);

// element add pannalaam

myArray.splice(1,0, "subscribbed");

// slice method - copy of section array

const newArray = myArray.slice(1,2);

// reverse method
const newArray = myArray.reverse();

// join method - copy create pannum  //array to stringaaa maathidum
const newArray = myArray.join();

//split smethod - .split(','); // string to array

//concat method - 2 array join pannum
const newArray = myArray.concat(myArrayA);

//spread operator

const newArray = [...myArray,...myArrayA];

//Objects
//key-value pairs in curly braces

const myObj = {name:"Dhuddu"};

const anotherObj = {
    subscriber: true,
    no:10000,
    content: {
        earn:"js",
        grow:"stocks",
    },
    subdivisions:["Earn","Grow", "Give"],
    action: function(){
        return 'Earn by learning ${this.content.earn}';
    }
};


console.log(myObj.name);
console.log(anotherObj.subdivisions[1]);
console.log(anotherObj.content.earn);
console.log(anotherObj["subdivisions"]);
console.log(anotherObj.action());

// example 2

const vehicle = {
    doors:2,
    engine: function(){
        return "Vrroom!";
    }
};

console.log(Vehicle.engine());

const car = Object.create(vehicle); //Inherit panradhu
car.wheels = 4;
car.engine = function(){
    return "Whoosh"
};

console.log(car.engine());
console.log(car.doors);

const tesla = Object.create(car);
tesla.engine = function(){
    return "shhh"
}
console.log(tesla.doors);
console.log(tesla.engine());

//example 3

const movie = {
    actor:"Kavin",
    music:"Arr",
    director:"Lokesh",
    producer:"Anbu" 
};
movie.actress = "nayan"

delete movie.producer; //delete pandradhu
console.log(movie.hasOwnProperty("producer"));
console.log(Object.keys(movie));
console.log(Object.values(movie));

for ( let job in movie){
    console.log(movie.job); // o/p = undefined
    console.log(movie[job]);
    console.log(`${job}, it's ${movie[job]}`);
};

//example 4

const movie = {
    actor:"Kavin",
    music:"Arr",
    director:"Lokesh",
    producer:"Anbu" 
};

//destructuring the objects

const {music: myFavMusicDirector} = movie;
const {music: myFavMusicDirector, director: myFavD} = movie;

const {actor, music, director, producer}= movie;


console.log(myFavMusicDirector);
console.log(myFavMusicDirector, myFavD);
console.log(music);

function sings({music}){
    return music;
};
console.log(sings(movie)); //o/p = Arr


// CLASSES
// Blueprint of object

const myPizza =  {
    size: "medium",
    crust: "original",
    bake: function(){
        return console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
    }
};

myPizza.bake();

class pizza {
    constructor(typepizza){  //Initialize pandradhu
        this.type = typepizza
        this.size = "medium";
        this.crust = "original";
    }
    bake(){
        return console.log(`Baking a ${this.size} ${this.crust} crust myPizza.`)
    }
}

const anotherPizza = new pizza("margarita");
anotherPizza.bake()

//example 1

class pizza {
    constructor(typepizza,sizepizza, crustpizza){  //Initialize pandradhu
        this.type = typepizza;
        this.size = sizepizza;
        this.crust = crustpizza;
    }
    bake(){
        return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust myPizza.`)
    }
}

const anotherPizza = new pizza("margarita", "small", "thin");
anotherPizza.bake();
const anPizza = new pizza ("Pepperonni", "Medium", "Original");
anPizza.bake();

// get,set method

class pizza {
    constructor(typepizza,sizepizza, crustpizza){  //Initialize pandradhu
        this.type = typepizza;
        this.size = sizepizza;
        this.crust = crustpizza;
        this.toppings =[];
    }
    getToppings(){
        return this.toppings;
    }
    setToppings(toppingsPizza){
        this.toppings.push(toppingsPizza);
    }
    bake(){
        return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza with ${this.toppings}`);
    }
}

const myPizza = new pizza("margarita", "small", "thin");
myPizza.setToppings("sausage");
myPizza.setToppings("Egg");
myPizza.bake();

// calling child and parent example

class pizza {
    constructor(sizepizza){  
        this.size = sizepizza;
        this.crust = "original";
        
    }
    getcrust(){
        return this.crust;
    }
    setcrust(crustpizza){
        this.crust = crustpizza;
    }
}
//child class create
class specialPizza extends Pizza {
    constructor(sizepizza){
        super(sizepizza);
        this.type = "Margarita"
    }
    slice(){
        console.log(`Our ${this.type} ${this.type} ${this.crust} pizza has 8 slices`)
    }
}
const myspecialPizza = new specialPizza("medium");
myspecialPizza.slice();

//naming convention //_ private property
// public and private property
class pizza {
    crust = "original"; //public
    #sause = "tomato";  //private
    constructor(sizepizza){  
        this._size = sizepizza;
        this._crust = "original";
        
    }
    getcrust(){
        return this.crust;
    }
    setcrust(crustpizza){
        this.crust = crustpizza;
    }
    bake(){
        return console.log(`Baking a ${this.size} ${this.crust} ${this.#sause} pizza`);
    }
}

const myPizza = new Pizza("small");
myPizza.bake()