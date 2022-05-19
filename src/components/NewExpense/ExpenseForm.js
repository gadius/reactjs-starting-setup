import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredName, setEnteredName] = useState('Coder');
  const [enteredLastName, setEnteredLastName] = useState('Byte');
  const [enteredPhone, setEnteredPhone] = useState('8885559999');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const lastChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const phoneData = {
      name: enteredName,
      last_name: enteredLastName,
      phone: enteredPhone,
    };
    props.onSavePhoneData(phoneData);
    setEnteredName("");
    setEnteredLastName("");
    setEnteredPhone("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>First name</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
            
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Last name</label>
          <input
            type="text"
            value={enteredLastName}
            onChange={lastChangeHandler}
            required
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Phone (Format expected: 8885559999)</label>
          <input
            placeholder="XXXXXXXXX"
            pattern="[0-9]{10}"
            type="tel"
            value={enteredPhone}
            onChange={phoneChangeHandler}
            required
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
