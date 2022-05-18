import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    //en JSX no es necesario indicar el parametro 'enteredExpenseData' por que no se ejecuta alli, 
    //al mandar la variable de la funcion implicitamente se hace la comunicación mandando el parametro necesario
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        console.log(expenseData);

    };
  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
