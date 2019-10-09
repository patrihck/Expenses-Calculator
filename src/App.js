import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseGroup from './components/ExpenseGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      expensesGroups: []
    }
    this.addExpenseGroup = this.addExpenseGroup.bind(this);
  }

  render() {
    document.body.style.background = "#585858";
    return (
      <>
        <header>
          <button onClick={this.addExpenseGroup} className="btn btn-primary main-button">New expense group</button>
        </header>
        <body>
          {this.state.expensesGroups.map(currState => currState)}
        </body>
      </>
    );
  }

  addExpenseGroup() {
    this.setState((prevState) => {
      let expensesGroups = prevState.expensesGroups;
      expensesGroups.push(<ExpenseGroup key={this.state.expensesGroups.length}>New group</ExpenseGroup>);
      console.log(expensesGroups);

      return expensesGroups;
    })
  }
  
}

export default App;
