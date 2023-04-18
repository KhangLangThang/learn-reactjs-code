import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
function ExpenseList(props) {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found !</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((x) => (
        <ExpenseItem
          key={x.id}
          title={x.title}
          amount={x.amount}
          date={x.date}
        />
      ))}
    </ul>
  );
}
export default ExpenseList;
