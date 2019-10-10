import React from "react";
import ExpensesFormComponent from "./ExpensesFormComponent";
import ExpenseGroup from '../../ExpenseGroup/ExpenseGroup';

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
            <ExpensesFormComponent addExpenseGroup = {this.addExpenseGroup} data = {this.state}></ExpensesFormComponent>
        )
    }

    addExpenseGroup() {
        this.setState(prevState => {
          let expensesGroups = prevState.expensesGroups;
          expensesGroups.push(
            <div>
              <ExpenseGroup key={this.state.expensesGroups.length}>
                New group
              </ExpenseGroup>
            </div>
          );
          console.log(expensesGroups);
    
          return expensesGroups;
        });
      };
}

export default ExpensesForm;