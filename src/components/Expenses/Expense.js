import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expense.css";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props._expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  // let expensesContent = <p>No Found Item</p>;
  // if (filterExpenses.length > 0) {
  //   expensesContent = filterExpenses.map((expense) => {
  //     return (
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     );
  //   });
  // }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filterExpenses}/>
      <ExpensesList items={filterExpenses} />;
      {/* {filterExpenses.length === 0 && expensesContent}
        {filterExpenses.length > 0 && expensesContent} */}
      {/* {props._expenses.map((expense)=> {
          return(
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
          );
        })} */}
      {/* <ExpenseItem
        title={props._expenses[0].title}
        amount={props._expenses[0].amount}
        date={props._expenses[0].date}
        />
        <ExpenseItem
            title={props._expenses[1].title}
            amount={props._expenses[1].amount}
            date={props._expenses[1].date}
        />
        <ExpenseItem
            title={props._expenses[2].title}
            amount={props._expenses[2].amount}
            date={props._expenses[2].date}
        />
        <ExpenseItem
            title={props._expenses[3].title}
            amount={props._expenses[3].amount}
            date={props._expenses[3].date}
        /> */}
    </Card>
  );
};
export default Expense;
