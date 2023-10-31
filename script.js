/*
TO DO:

1. Test what Helena showed in the meeting
2. 



let userObject = {};
let userInput = prompt("Please enter some data");
userObject.data = userInput;

let userName = {};
let userInput = prompt("Hello, what's your name?");
userName.data = userInput;

*/




//console.log ("hello there!");



//


// OBJECT





// FUNCTION

/*
function menu (){
const choice=parseFloat(prompt("Welcome " + firstName + "! Please type 1, 2, 3 or 4 to select a choice from the menu: \n 1. Add income \n 2. Add expenses \n 3. See all expenses \n 4. See total balance"));

}
// this is the text displayed in the alert box

menu()

// to call for the function to run

*/

const firstName = prompt("Hello there, what's your name?");
console.log(firstName);

function menu () {
const menu = parseFloat(prompt ("Hello " + firstName + "! Please make a choice from the menu by typing 1, 2, 3 for: \n 1. Add income \n 2. Add expenses \n 3. See total balance"));
console.log (menu);
}

if (1) {
   const income = parseFloat(prompt ("Please fill in your income here"));
   console.log (income);
}

if (2) {
   const expenses = parseFloat(prompt ("Please fill in your expenses here"));
   console.log (expenses);
}

if (3) {
   const sum = (income - expenses); 
   alert(`This is your balance: ${sum}`);
   console.log (`Your balance is ${sum}`);
}

else {
   parseFloat(prompt ("Please fill in your income and expenses first"));
}


// why parseFloat? because it turns/stores the prompt input back as a decimal number


// this works but it's not a function

/*
const firstName = prompt("Hello there, what's your name?");
console.log(firstName);


const menu = parseFloat(prompt ("Hello " + firstName + "! Please make a choice from the menu by typing 1, 2, 3 for: \n 1. Add income \n 2. Add expenses \n 3. See total balance"));

console.log (menu);



if (1) {
   const income = parseFloat(prompt ("Please fill in your income here"));
   console.log (income);
}

if (2) {
   const expenses = parseFloat(prompt ("Please fill in your expenses here"));
   console.log (expenses);
}

/*
if (3) {
   const sum = (income - expenses); 
   alert(`This is your balance: ${sum}`);
   console.log (`Your balance is ${sum}`);
}

else {
   parseFloat(prompt ("Please fill in your income and expenses first"));
}

*/

/*
function getSummary (income, expenses) {
   const resBalance = income - expenses;
   return resBalance;
   console.log (resBalance);
}



/*
const accountObject = {
   name: "firstName",

expensesArray = [],
// empty expenses array

incomeArray = [],
// empty income array

function addExpenses () {
   addIncome.push(2)
}
//empty function
// will add an expense to the income array
// how? with?: ;

function addIncome () {
}
//empty function
// will add an income to the income array

function listAllExpenses () {
}
//empty function

function getSummary () {
}

function getSummary (income, expenses) {
   const resBalance = income - expenses;
   return resBalance;
   console.log (resBalance);


//empty function
// Should summarise total balances
// Should show total income
// Should show total expenses
// Should calculate current balance (income - expenses)

*/