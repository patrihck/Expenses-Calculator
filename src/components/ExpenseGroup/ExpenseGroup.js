import React from "react";
import ExpensesList from "../ExpensesList/ExpensesList";
import './ExpenseGroup.css';

class ExpenseGroup extends React.Component {
  constructor() {
    super();
    this.state = {
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
