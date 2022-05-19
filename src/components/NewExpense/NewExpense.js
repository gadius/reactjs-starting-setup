import React from "react";
import "./NewExpense.css";
import PhoneForm from "./ExpenseForm";

const NewPhone = (props) => {
    const savePhoneDataHandler = (enteredPhoneData) => {
        const phoneData = {
            ...enteredPhoneData,
            id: Math.random().toString()
        };
        props.onAddPhone(phoneData);
        console.log(phoneData);

    };
  return (
    <div className="new-expense">
        <PhoneForm onSavePhoneData={savePhoneDataHandler}/>
    </div>
  );
};

export default NewPhone;
