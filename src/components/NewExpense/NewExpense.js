import "./NewExpense.css";
import ExpenseForm from "./ExpenseFrom";
function NewExpense(props) {
  const saveExpenseDataHandler = function (enterdExpenseData) {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    props.saveExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm saveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
export default NewExpense;
