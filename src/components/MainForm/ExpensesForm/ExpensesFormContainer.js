import React from "react";
import ExpensesFormComponent from "./ExpensesFormComponent";
import ExpenseGroup from "../../ExpenseGroup/ExpenseGroup";

class ExpensesForm extends React.Component {
  constructor() {
    super();
    this.state = {
      expensesGroups: [],
      expensesGroupsView: true
    };
    this.addExpenseGroup = this.addExpenseGroup.bind(this);
  }

  render() {
    return (
      <ExpensesFormComponent
        addExpenseGroup={this.addExpenseGroup}
        data={this.state}
      ></ExpensesFormComponent>
    );
  }

  addExpenseGroup() {
    this.setState(prevState => {
      let expensesGroups = prevState.expensesGroups;
      expensesGroups.push({
        key: prevState.expensesGroups.length,
        name: "",
        expenseGroupId: prevState.expensesGroups.length,
        addExpense: this.addExpense,
        handleExpenseGroupNameChanged: this.handleExpenseGroupNameChanged,
        expensesList: []
      });
      this.props.onExpenseGroupAdded(expensesGroups);
      return expensesGroups;
    });
  }

  addExpense = (expenseGroupId, newExpense) => {
    this.setState(() => {
      let expenseGroups = this.state.expensesGroups;
      expenseGroups[expenseGroupId].expensesList = newExpense;

      return {
        expensesGroups: expenseGroups
      };
    });
  };

  handleExpenseGroupNameChanged = (index, newName) => {
    let expenseGroups = this.state.expensesGroups;
    expenseGroups[index].name = newName;

    this.setState({
      expensesGroups: expenseGroups
    });
  };
}

export default ExpensesForm;
