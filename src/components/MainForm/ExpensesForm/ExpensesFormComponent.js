import React from "react";
import MainViewSelect from "./../../MainViewSelect";
import ExpenseGroup from "../../ExpenseGroup/ExpenseGroup";
function ExpensesFormComponent(props) {
  return (
    <>
      <header>
        <button
          onClick={props.addExpenseGroup}
          className="main-button btn btn-primary"
        >
          New expense group
        </button>
      </header>
      {props.data.expensesGroups.map(currState => {
        return (
          <ExpenseGroup
            key={currState.key}
            name={currState.name}
            expenseGroupId={currState.expenseGroupId}
            addExpense={currState.addExpense}
            handleExpenseGroupNameChanged={
              currState.handleExpenseGroupNameChanged
            }
          ></ExpenseGroup>
        );
      })}
    </>
  );
}

export default ExpensesFormComponent;
