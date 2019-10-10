import React from "react";
import MainViewSelect from "./../../MainViewSelect";
function ExpensesFormComponent(props) {
  return (
    <>
      <header>
        <button
          // hidden={this.props.data.expensesGroupsView}
          onClick={props.addExpenseGroup}
          className="main-button btn btn-primary"
        >
          New expense group
        </button>
      </header>
      {props.data.expensesGroups.map(currState => currState)}
    </>
  );
}

export default ExpensesFormComponent;