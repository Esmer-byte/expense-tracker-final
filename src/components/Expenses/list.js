import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./list.css";
import Card from "../UI/Card";
import ExpensesFilter from "./filter";
import { useState } from "react/cjs/react.development";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  function onChangeYearHandler(year) {
    setFilteredYear(year);
  }
  const dummy = props.array.filter(expense => expense.date.getFullYear().toString() === filteredYear)
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYear={onChangeYearHandler}
        />
        <ExpensesChart expenses = {dummy}/>
        {dummy.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
