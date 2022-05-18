import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
const Expenses = (props) => {

  const [filteredData, setFilteredData] = useState('2020'); //para inicializar el valor del filtro de busqueda


  const renderList = props.expenses.map((item, index) => (
    <ExpenseItem
      key={index}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));

  const filterDataHandler = (enteredFilterData) => {
    console.log("Expenses.js", enteredFilterData);
    setFilteredData(enteredFilterData);
    console.log("Expenses.js filteredData", filteredData);
  };

  return (
    <div>
      <ExpensesFilter selected={filteredData} onFilterData={filterDataHandler}  />
      <div className="expenses">{renderList}</div>;
    </div>
  );
};

export default Expenses;
