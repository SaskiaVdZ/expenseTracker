

// OBJECT

const accountObject = {
  expensesArray: [],
  // empty expense array
  incomeArray: [],
  // empty income array

  addExpenses: function () {
    // this is a function declaration as a property, switch the keyword function the name
    //addIncome.push(2)

    //const expens = parseFloat(prompt("Please fill in your expense here"));
    const expenseDescription = prompt("Please describe your type of expense, for example food, petrol, rent, clothes:");
  
    const expenseAmount = parseFloat(prompt(`Please add the amount you spend on ${expenseDescription}:`));
   
    // making sure the user only fills in numbers not strings
    if (isNaN(expenseAmount)){
      alert("Please fill in a number"); 
      accountObject.addExpenses();
    }
    // adding the user input from the prompt into the array
    else {
      this.expensesArray.push({ expenseDescription, expenseAmount });
    //[{expensDescription: "one", expenseAmount: 1000}, {expensDescription: "two", expenseAmount: 2000}]
    // {object} within curly braces: an object
    }
  
    // going back to the menu
    menu(); 
    
  },

   
  // FUNCTIONS


  addIncome: function () {
    
    const incomeDescription = prompt("Please describe your source of income");

    const incomeAmount = parseFloat(prompt("Please add the amount"));

    if (isNaN(incomeAmount)){
      alert("Please fill in a number"); 
      accountObject.addIncome();
    }

    else {
      this.incomeArray.push({ incomeDescription, incomeAmount });
    }
  
    menu();
  },
  
// here we want to list and show all the items in the array
  listAllExpenses: function () {
    // for an object, a forEach loop is better
    let message = "";
    this.expensesArray.forEach(function (expense) {
      message +=
        " You've spent " +
        expense.expenseAmount +
        ",- on " +
        expense.expenseDescription +
        "\n";
    });

    alert(message);
    menu();
  },

  listAllIncomes: function () {
  
     let message = "";
     this.incomeArray.forEach(function (income) {
       message +=
        " You've earned " +
         income.incomeAmount +
         ",- with your " +
        income.incomeDescription +
         "\n";
     });
  
     alert(message);
     menu();
   },

 
  
  getSummary: function () {
    //I first created variables to store the totals in
    let totalExpenses = 0;
    let totalIncome = 0;
    
  
    // adding upp the expenses from the expense array with ForEach method
    this.expensesArray.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.expenseAmount;
    });

     // doing the same with the userinput in the income array
    this.incomeArray.forEach(function (income) {
      totalIncome = totalIncome + income.incomeAmount;

      // and then a template literal in an alert with the adding up/taking the expenses from the income amount 
    });

    alert(`Your total income is ${totalIncome},- and your total total expenses are ${totalExpenses},- \nYour current balance is ${totalIncome - totalExpenses},- \nHave a nice day!`);
    menu();
  },
};
   

// MENU
// I started with a prompt saying 'hello' and craeted the menu function
// Why parseFloat? because it turns/stores the prompt input back as a decimal number
// Why did I use if else statements?  If else seems to be the easiest way.

function menu() {
  const choice = parseFloat(
    prompt(
      "Hello! \nPlease make a choice from the menu by typing a number between 1 - 5 for: \n 1. Add income \n 2. Add expenses \n 3. See total balance \n 4. List all your expenses \n 5. List all forms of income \n 6. Exit"
    )
  );

  if (choice === 1) {
     accountObject.addIncome();
  }

  else if (choice === 2) {
    accountObject.addExpenses();
  }

  else if (choice === 3) {
    accountObject.getSummary();
  }

  else if (choice === 4) {
    accountObject.listAllExpenses();
  }

  else if (choice === 5) {
     accountObject.listAllIncomes();
   }

   else if (choice === 6) {(alert("You have exited the program, bye!"));
  
  }
    
  // the user must make a choice in the form of a number between 1-5
  else {(alert("Please choose a number between 1-6"));
  menu();
  }
}

menu();