import React from "react";
import ExpensesList from "../ExpensesList";
import './ExpenseGroup.css';

class ExpenseGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundStyle: {}
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
        <input type="text" defaultValue="New expense group" onChange={this.handleExpenseGroupNameChanged} className="expense-group-name-input"></input>
        <ExpensesList className="expense-group-grid-container"></ExpensesList>
      </div>
    );
  }

  handleExpenseGroupNameChanged = () => {

  }

  handleMouseMovement() {
    this.setState(previousState => {
      let newState =
        previousState.backgroundStyle.backgroundColor == "orange"
          ? {
              backgroundStyle: {
                backgroundColor: "darkcyan"
              }
            }
          : {
              backgroundStyle: {
                backgroundColor: "orange"
              }
            };

      return newState;
    });
  }
}

export default ExpenseGroup;
