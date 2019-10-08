import React from "react";
import Expense from './constants/Expense';

class ExpensesList extends React.Component {

    constructor () {
        super();
        this.state = {
            expensesList: [],
            newExpenseText: "dd"
        }
        this.addExpense = this.addExpense.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    render () {
        return (
            <div className="container">
                {
                    this.state.expensesList.map((currValue) => {
                    return <Expense expenseName={currValue.expenseName} key={currValue.key}></Expense>
                })
                }
                <input defaultValue="Type some expense here" onChange={this.handleInputChange}></input>
                <button onClick={this.addExpense} className="btn btn-secondary">Add Expense</button>
            </div>
        )                    
    }

    addExpense() {

            this.setState((prevState) => {            
            let newState = prevState.expensesList;
            newState.push({
                expenseName: prevState.newExpenseText,
                key: this.state.expensesList.length
            });
            console.log(newState);
            return newState;
        })        
    }

    handleInputChange(e) {
        this.setState({
            newExpenseText: e.target.value
        })
    }
}

export default ExpensesList;