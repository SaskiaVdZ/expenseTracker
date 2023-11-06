/*
TO DO:

1. Test what Helena showed in the meeting
2. Ask for name in prompt and use template literal to ask to make choice in the menu
3. make menu choices
4. make sure the user input is added into an array

*/

// OBJECT

// regular function declaration
function myFunc() {
   // kod
 }
 
 // before you had the function keyword first
 const accountObject = {
   firstName: "Saskia",
   expensesArray: [],
   // empty expenses array
   incomeArray: [],
   // empty income array
   addExpenses: function () {
     // this is a function declaration as a property, switch the keyword function the name
     //addIncome.push(2)
 
     // so we want to add something from the prompt
     //const expens = parseFloat(prompt("Please fill in your expens here"));
     const expenseDescription = prompt("Please describe your type of expense, for example food, petrol, rent, clothes:");
 
     const expenseAmount = parseFloat(prompt(`Please add the amount you spend on ${expenseDescription}:`));
 
     //[{expensDescription: "one", expenseAmount: 1000}, {expensDescription: "two", expenseAmount: 2000}]
 
     this.expensesArray.push({ expenseDescription, expenseAmount });
     // check that our function works
     console.log(this.expensesArray);
 
     // going back to menu
     menu();
   },
   //empty function
   // will add an expense to the income array
   // how? with?: ;
   addIncome: function () {
      // this is a function declaration as a property, switch the keyword function the name
     //addIncome.push(2)
 
     // so we want to add something from the prompt
     //const expens = parseFloat(prompt("Please fill in your expens here"));
     const incomeDescription = prompt("Please describe your source of income");
 
     const incomeAmount = parseFloat(prompt("Please add the amount"));
 
     //[{expensDescription: "one", expenseAmount: 1000}, {expensDescription: "two", expenseAmount: 2000}]
 
     this.incomeArray.push({ incomeDescription, incomeAmount });
     // check that our function works
     console.log(this.incomeArray);
 
     // going back to menu
     menu();
   },
   //empty function
   // will add an income to the income array
 
   listAllExpenses: function () {
     // how do we list all elements in an array?
     // we always have to loop through to see all elements
     // if we didnt have an object and just plain variables for loop would work fine
     // but if we have an object a forEach loop is a better approach
     let message = "";
     this.expensesArray.forEach(function (expense) {
       message +=
         "Expense description: " +
         expense.expenseDescription +
         " Expense amount: " +
         expense.expenseAmount +
         "\n";
     });
     // put the alert cause we only want to show it once
     // but we want to contain all of your expenses
     alert(message);
     menu();
   },

   listAllIncomes: function () {
      // how do we list all elements in an array?
      // we always have to loop through to see all elements
      // if we didnt have an object and just plain variables for loop would work fine
      // but if we have an object a forEach loop is a better approach
      let message = "";
      this.incomeArray.forEach(function (income) {
        message +=
          "Income description: " +
         income.incomeDescription +
          " Income amount: " +
          income.incomeAmount +
          "\n";
      });
      // put the alert cause we only want to show it once
      // but we want to contain all of your expenses
      alert(message);
      menu();
    },

   //empty function
   getSummary: function () {
     // 1. remove income and expense parameter not nessecary. Done
     // 2. create a variabel to store the total amount of all your incomes and do the same for expenses
     // 3. loop through expense array with forEach and only grab the expenseAmount property
     // 4. calculate total sum of each expense amount
     // 5. do the same for income
     // 6. calculate the totalIncomes - totalExpenses to get the result
 


     // create an array
//const myNums = [1,2,3,4,5];
this.incomeArray;

// create a variable for the sum and initialize it
let sumIncome = 0;

// calculate sum using forEach() method
this.incomeArray.forEach( num => {
 sum += num;
})

console.log(sumIncome); 

this.expensesArray;

// create a variable for the sum and initialize it
let sumExpenses = 0;

// calculate sum using forEach() method
this.expensesArray.forEach( num => {
 sum += num;
})
console.log(sumExpenses);

console.log(this.incomeArray);
console.log(this.expensesArray);

totalBalance = (sumIncome - sumExpenses);
alert(`You're total balance (income - expenses) is ${totalBalance}`);


 
     // going back to menu
     menu();

   },

 };
 

 
 // FUNCTION
 
 // why parseFloat? because it turns/stores the prompt input back as a decimal number
 
 accountObject.firstName = prompt("Hello there, what's your name?");
 
 function menu() {
   const choice = parseFloat(
     prompt(
       "Hello " +
         accountObject.firstName +
         "! Please make a choice from the menu by typing 1, 2, 3 for: \n 1. Add income \n 2. Add expenses \n 3. See total balance \n 4. List all your expenses \n 5. List all forms of income"
     )
   );
 
   if (choice === 1) {
      accountObject.addIncome();
     
   }
 
   if (choice === 2) {
     accountObject.addExpenses();
   }
 
   if (choice === 3) {
     accountObject.getSummary();
   }
 
   if (choice === 4) {
     accountObject.listAllExpenses();
   }

   if (choice === 5) {
      accountObject.listAllIncomes();
    }
 }
 
 menu();
 
 