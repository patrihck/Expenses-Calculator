import React from "react";
import ChartsFormComponent from "./ChartsFormComponent";
import _ from "lodash";
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
        <ChartsFormComponent
          chartsList={this.loadChartsList()}
        ></ChartsFormComponent>
      </div>
    );
  }

  loadChartsList = () => {
    const expenseGroups = this.props.expenseGroups;
    this.extractMonthsCount(expenseGroups);
  };

  extractMonthsCount(expenseGroups) {
    let globalMonthsList = [];
    expenseGroups.forEach(exGroup => {
      let monthsList = exGroup.expensesList.map(x =>
        new Date(x.date).getMonth()
      );
      globalMonthsList = _.concat(globalMonthsList, monthsList);
      globalMonthsList = _.uniq(globalMonthsList);
    });
    console.log(globalMonthsList);
  }
}

export default ChartsFormContainer;
