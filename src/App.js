import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

const App = () =>  {
  const expenses_list = [
    { key: 1, title: "titulo", amount: 1, date: new Date() },
    { key: 2, title: "titulo", amount: 1, date: new Date() },
    { key: 2, title: "titulo", amount: 1, date: new Date() },
    { key: 2, title: "titulo", amount: 1, date: new Date() },
    { key: 2, title: "titulo", amount: 1, date: new Date() },
    { key: 2, title: "titulo", amount: 1, date: new Date() },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js',expense);
  };
  return (
    <div>      
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses_list} />
    </div>
  );
}

export default App;
