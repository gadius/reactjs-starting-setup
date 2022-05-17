import Expenses from "./components/Expenses";

function App() {
  const expenses_list = [
    { key: 1, title: "titulo", amount: 1, date: new Date() },
    { key: 2, title: "titulo", amount: 1, date: new Date() },
    { key: 2, title: "titulo", amount: 1, date: new Date() },
    { key: 2, title: "titulo", amount: 1, date: new Date() },
    { key: 2, title: "titulo", amount: 1, date: new Date() },
    { key: 2, title: "titulo", amount: 1, date: new Date() },
  ];
  return (
    <div>
      <h2>Let's get started! ayy lmao</h2>
      <Expenses expenses={expenses_list} />
    </div>
  );
}

export default App;
