// import { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // Old code for simple example for useState - change title

  // // 1st arg is initial value, 2nd is
  // // returns an array, where first value is the value itself, and second is a function used to update the value
  // // initialize with array destructuring
  // // the initial value arg (props.title here) is only initialized the first time the component executes
  // const [title, setTitle] = useState(props.title);

  // // Using the handler name at the end of a fn is a convention that denotes it is used as an event listener, rather than being called in other code
  // const changeTitleHandler = () => {
  //   setTitle("Updated!"); // calling this function now runs the entire component function again (React re-evaluates the component)
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={changeTitleHandler}>Change title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
