import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const addNewExpenseClickHandler = () => {
    setIsEditing(true);
  };

  const cancelNewExpenseClickHandler = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // add an id property to the object with a random value
    };

    // Pass up to
    props.onAddExpense(expenseData);

    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={addNewExpenseClickHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={cancelNewExpenseClickHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
