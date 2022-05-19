import React, { useState } from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div className="expense-date">
        <p>
          <a href="tel:+4733378901">{props.phone}</a>
        </p>        
      </div>
      <div className="expense-item__description">
        <h2>
          {props.name} {props.last_name}
        </h2>
      </div>
    </div>
  );
};
export default ExpenseItem;
