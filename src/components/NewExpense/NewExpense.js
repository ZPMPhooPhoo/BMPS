import React from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),

        };
        //console.log(expenseData);
        props.onAddExpense(expenseData);
    };
    return(
        <Card className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </Card>
    );
}
export default NewExpense;