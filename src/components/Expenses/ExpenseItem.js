import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {

  return (
    <Card className="expense-item">
      <div className="expense-date">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">-{props.amount}RON</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
