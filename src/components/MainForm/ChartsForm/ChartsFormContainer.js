import React from "react";
import ChartsFormComponent from "./ChartsFormComponent";
import _ from "lodash";
import Months from "./../../constants/Months";
import { all } from "q";
class ChartsFormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      chartsList: [],
      monthsList: [],
      allExpenses: []
    };
  }
  render() {
    return (
      <div>
        <button onClick={this.loadChartsList}>Ładuj wykresy</button>
        <ChartsFormComponent
          horizontalBarChartData={{
            labels: this.state.monthsList,
            datasets: [
              {
                label: "Wydatki",
                backgroundColor: "red",
                borderColor: "orange",
                borderWidth: 1,
                data: this.state.allExpenses
              }
            ]
          }}
        ></ChartsFormComponent>
      </div>
    );
  }

  loadChartsList = () => {
    const expenseGroups = this.props.expenseGroups;
    let monthIndexes = this.extractMonthsCount(expenseGroups);
    let allExpenses = this.extractMonthsData(monthIndexes, expenseGroups);
    let months = monthIndexes.map(index => Months[index]);

    console.log(months);
    console.log(allExpenses);
    this.setState({
      monthsList: months,
      allExpenses: allExpenses
    });
  };

  extractMonthsCount(expenseGroups) {
    let globalMonthsList = [];
    expenseGroups.forEach(exGroup => {
      let monthsList = exGroup.expensesList.map(x =>
        new Date(x.date).getMonth()
      );
      globalMonthsList = _.concat(globalMonthsList, monthsList);
    });

    globalMonthsList = _.uniq(globalMonthsList).sort((a, b) => a - b);

    return globalMonthsList;
  }

  extractMonthsData(monthIndexes, expenseGroups) {
    let allExpenses = [];
    expenseGroups.forEach(exGroup => {
      let expensesPerMonth = null;
      monthIndexes.forEach(index => {
        expensesPerMonth = exGroup.expensesList
          .filter(expense => {
            const date = new Date(expense.date);
            const month = date.getMonth();
            return month === index ? true : false;
          })
          .map(expense => expense.price)
          .reduce((prev, next) => prev + next);
        allExpenses.push(expensesPerMonth);
      });

      allExpenses = _.concat(allExpenses, expensesPerMonth);
    });

    return allExpenses;
  }
}

export default ChartsFormContainer;
