import React, {useState} from 'react';
import Phones from "./components/Expenses";
import NewPhone from "./components/NewExpense/NewExpense"

const App = () =>  {

  
  /*const [phones, setPhones] = useState(
    [
      { key: 1, name: "titulo", last_name: 1, phone: '2342342341' },
      { key: 2, name: "titulo", last_name: 1, phone: '4564564564' },
    ]
  );*/ 
  
  const [phones, setPhones] = useState([]); 

  const addPhoneHandler = phone => {
    setPhones(prevArray => [...prevArray, phone]);
  };

  return (
    <div>      
      <NewPhone onAddPhone={addPhoneHandler}/>
      <Phones phones={phones} />
    </div>
  );
}

export default App;
