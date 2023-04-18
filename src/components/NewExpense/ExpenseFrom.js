import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enterdTitle, setEnterdTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   setEnterdTitle: "",
  //   setEnterdDate: "",
  //   setEnterdAmount: "",
  // });
  const titleChangeHandler = function (event) {
    setEnterdTitle(event.target.value);
    // setUserInput({ ...userInput, setEnterdTitle: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, setEnterdTitle: event.target.value };
    // });
  };
  const amountChangeHandler = function (event) {
    setEnterdAmount(event.target.value);
    // setUserInput({ ...userInput, setEnterdAmount: event.target.value });
  };
  const dateChangeHandler = function (event) {
    setEnterdDate(event.target.value);
    // setUserInput({ ...userInput, setEnterdDate: event.target.value });
  };
  function submitHander(event) {
    event.preventDefault();
    if (enterdDate && enterdTitle && enterdAmount) {
      const expenseData = {
        title: enterdTitle,
        date: new Date(enterdDate),
        amount: +enterdAmount,
      };
      props.saveExpenseData(expenseData);
      console.log(expenseData);
      setEnterdAmount("");
      setEnterdDate("");
      setEnterdTitle("");
    }
  }
  const [enterdID, setID] = useState("none");
  const [enterdID2, setID2] = useState("");
  function changeID() {
    setID("");
    setID2("none");
  }
  function returnExpense() {
    setID("none");
    setID2("");
  }
  function addNewExpense() {
    let check = true;
    if (enterdID2 === "none" && !enterdTitle) {
      alert("Please input Tilte");
      return (check = false);
    }
    if (enterdID2 === "none" && !enterdAmount) {
      alert("Please input Amount");
      return (check = false);
    }
    if (enterdID2 === "none" && !enterdDate) {
      alert("Please input Date");
      return (check = false);
    }
    if (check) {
      setID("none");
      setID2("");
    }
  }

  return (
    <form onSubmit={submitHander}>
      <button id={enterdID2} type="sumbit" onClick={changeID}>
        Add New Expense
      </button>
      <div id={enterdID} className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            id="input"
            type="text"
            value={enterdTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterdAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enterdDate}
            onChange={dateChangeHandler}
            min="01-01-2019"
            max="31-12-2024"
          />
        </div>
      </div>
      <div id={enterdID} className="new-expense__actions">
        <button type="submit" onClick={returnExpense}>
          Cancel
        </button>
        <button type="submit" onClick={addNewExpense}>
          Add Expense
        </button>
      </div>
    </form>
  );
}
export default ExpenseForm;
