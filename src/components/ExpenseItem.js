import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title); //siempre regresa un arreglo de 2 elementos, variable y la funcion que hace el update de la variable
  //title = nombre variable, setTitle una funcion que se puede usar despues
  //useState hook, para poder manipular el estatus de variables y poder renderizar denuevo el componente en la vista, las funciones normales no sirven de esa manera.
  //al crear useState se crean "variables especiales" para poder usarlas dentro del componente

  const clickHandler = () => {
    setTitle('Updated Title folowing example');
    console.log("Click");
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
};
export default ExpenseItem;
