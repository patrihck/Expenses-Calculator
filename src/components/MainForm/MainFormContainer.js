import React from "react";
import MainFormComponent from "./MainFormComponent";

class MainFormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      expenseGroups: [],
      selectedView: null
    };
    this.handleSelectionChanged = this.handleSelectionChanged.bind(this);
  }

  render() {
    return (
      <MainFormComponent
        selectedView={this.state.selectedView}
        onChange={this.handleSelectionChanged}
        onExpenseGroupAdded={this.handleExpenseGroupAdded}
        expenseGroups={this.state.expenseGroups}
      ></MainFormComponent>
    );
  }

  handleSelectionChanged(selectedView) {
    this.setState({
      selectedView: selectedView
    });
  }
  handleExpenseGroupAdded = expenseGroups => {
    this.setState(prevState => {
      let newState = {
        expenseGroups: expenseGroups
      };
      return newState;
    });
  };
}

export default MainFormContainer;
