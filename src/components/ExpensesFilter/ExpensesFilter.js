import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  //1- crear data-bind
  //2- asignar valor desde aqui a Expenses

  //const [enteredFilter, setEnteredFilter] = useState(""); no es necesario manejar aqui el estado del filtro, se maneja en Expenses.js
  const filterChangeHandler = (event) => {
    //setEnteredFilter(event.target.value); 

    props.onFilterData(event.target.value);
    console.log("ExpensesFilter.js", event.target.value);
  };
  //setEnteredFilter(props.selected); ESTO PRODUCE UN BUG LOOP INFINITO, POR QUE SE RENDEZA > MODIFICA > VUELVE A RENDERIZAR... ETC, mejor se pone directo en value en jsx
  //props.onFilterData(enteredFilter);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
