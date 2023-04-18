import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setfilterYear] = useState("2020");

  function filterChangeHandler(selected) {
    setfilterYear(selected);
  }

  const enterdFilterHander = props.expenses.filter((expenses) => {
    return expenses.date.getFullYear() == filteredYear;
  });

  return (
    <Card className="expenses">
      <li>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={enterdFilterHander} />
        <ExpenseList item={enterdFilterHander} />
      </li>
    </Card>
  );
};
export default Expenses;
