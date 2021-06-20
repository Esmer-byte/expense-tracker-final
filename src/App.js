import Expenses from "./components/Expenses/list";
import "./components/Expenses/ExpenseDate.css";
import NewExpense from "./components/NewExpenses/create";
import { useState } from "react/cjs/react.development";


function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses array={expenses} />
    </div>
  );
}

export default App;
