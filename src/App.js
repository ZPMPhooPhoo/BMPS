import React, {useState} from 'react';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12)
  },
  { id: "e3", 
    title: "Car Insurance",
    amount: 294.67, 
    date: new Date(2021, 2, 28)
  },
  { id: "e4", 
    title: "New Desk (Wooden)", 
    amount: 450, 
    date: new Date(2021, 5, 12)
  },
];
//function App() {
const App = () => {
  const [expenses, subExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpensesHandler = (expense) => {
    // console.log("Hello I am App.js");
    // console.log(expense);
    subExpenses((preventExpenses) => {
      return [expense, ...preventExpenses];
    });
  }
  return (
    <div>
    <h2> Let's get started!</h2>
    <NewExpense onAddExpense={addExpensesHandler}/>
    <Expense _expenses={expenses}/>
    </div>
    );
    
    // return React.createElement(
    //   "div",
    //   {},
    //   React.createElement
    //   ("h2", {}, "Let's get started"),
    //   React.createElement("Expense")
    //   );
  }
  
  export default App;