import React from "react";
import MainViewSelect from "./../MainViewSelect";
import ExpensesFormContainer from "./ExpensesForm/ExpensesFormContainer";
import ChartsFormContainer from "./ChartsForm/ChartsFormContainer";

class MainFormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      expensesGroups: []
    };
  }
  render() {
    return (
      <div>
        <MainViewSelect
          selectedView={this.props.selectedView}
          onChange={this.props.onChange}
        ></MainViewSelect>
        <div hidden={this.props.selectedView === "expenses" ? false : true}>
          <ExpensesFormContainer
            expensesGroups={this.state.expensesGroups}
            onExpenseGroupAdded={this.props.onExpenseGroupAdded}
          ></ExpensesFormContainer>
        </div>
        <div hidden={this.props.selectedView === "charts" ? false : true}>
          <ChartsFormContainer
            expenseGroups={this.props.expenseGroups}
          ></ChartsFormContainer>
        </div>
      </div>
    );
  }
}

export default MainFormComponent;
