import React from "react";
import ExpensesList from "../ExpensesList/ExpensesList";
import './ExpenseGroup.css';

class ExpenseGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      expenseGroupName: "New expense group",
      expensesList: null,
      backgroundStyle: {
        backgroundColor: "black"
      }
    };

    this.handleMouseMovement = this.handleMouseMovement.bind(this);
  }
  render() {
    return (
      <div
        className="expense-group-container"
        onMouseEnter={this.handleMouseMovement}
        onMouseLeave={this.handleMouseMovement}
        style={this.state.backgroundStyle}
      >
        <input type="text" value={this.state.expenseGroupName} className="expense-group-name-input"></input>
        <ExpensesList expensesList = {this.props.expensesList} className="expense-group-grid-container"></ExpensesList>
      </div>
    );
  }

  handleMouseMovement() {
    this.setState(previousState => {
      let newState =
        previousState.backgroundStyle.backgroundColor == "black"
          ? {
              backgroundStyle: {
                backgroundColor: "rgb(179, 152, 103)"
              }
            }
          : {
              backgroundStyle: {
                backgroundColor: "black"
              }
            };

      return newState;
    });
  }
}

export default ExpenseGroup;
