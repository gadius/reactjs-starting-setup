import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
const Expenses = (props) => {


  const renderList = props.phones
  .sort((a, b) => a.last_name.toUpperCase() > b.last_name.toUpperCase() ? 1 : -1)
  .map((item, index) => (
    <ExpenseItem
      key={Math.random().toString()}
      name={item.name}
      last_name={item.last_name}
      phone={item.phone}
    />
  ));



  return (
    <div>
      <div className="expenses">{renderList}</div>;
    </div>
  );
};

export default Expenses;
