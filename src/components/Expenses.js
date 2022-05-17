import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = (props) =>  {
  const renderList = props.expenses.map((item, index) => (
    <ExpenseItem
      key={index}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));
    
  return <div className="expenses">{renderList}</div>;
}

export default Expenses;
