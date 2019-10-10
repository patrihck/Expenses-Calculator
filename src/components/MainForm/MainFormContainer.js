import React from "react";
import MainFormComponent from "./MainFormComponent";

class MainFormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      expensesFormHidden: true
    }
    this.handleSelectionChanged = this.handleSelectionChanged.bind(this);
  }

  render() {
    return (
      <MainFormComponent expensesFormHidden={this.state.expensesFormHidden} onChange={this.handleSelectionChanged}></MainFormComponent>
    );
  }

  handleSelectionChanged(selectedView) {
    this.setState(() => {
      let newState = selectedView === "expenses" ?
        {
          expensesFormHidden: false
        }
        :
        {
          expensesFormHidden: true
        }

      return newState;
    });

  }


}

export default MainFormContainer;
