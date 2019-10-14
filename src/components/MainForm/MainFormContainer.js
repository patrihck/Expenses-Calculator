import React from "react";
import MainFormComponent from "./MainFormComponent";

class MainFormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      expenseGrups: [],
      selectedView: null
    }
    this.handleSelectionChanged = this.handleSelectionChanged.bind(this);
  }

  render() {
    return (
      <MainFormComponent selectedView={this.state.selectedView} onChange={this.handleSelectionChanged} onExpenseGroupAdded = {this.handleExpenseGroupAdded}></MainFormComponent>
    );
  }

  handleSelectionChanged(selectedView) {
    this.setState({
      selectedView: selectedView
    });
  }
  handleExpenseGroupAdded = (expenseGroups) => {
    this.setState({
      expenseGroups: expenseGroups
    })
  }

}

export default MainFormContainer;
