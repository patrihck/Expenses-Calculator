import React from "react";
import ChartsFormComponent from "./ChartsFormComponent";

class ChartsFormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      chartsList: []
    };
  }
  render() {
    return (
      <div>
        <ChartsFormComponent chartsList = {this.loadChartsList()}></ChartsFormComponent>
      </div>
    );
  }

  loadChartsList = () => {
    const expenseGroups = this.props.expenseGroups;
    
    console.log(expenseGroups);
  }
}

export default ChartsFormContainer;
