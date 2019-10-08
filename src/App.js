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
    return (
      <>
        <header>
          <button onClick={this.addExpenseGroup} className="btn btn-primary">New expense group</button>
        </header>
        {this.state.expensesGroups.map(currState => currState)}         
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
