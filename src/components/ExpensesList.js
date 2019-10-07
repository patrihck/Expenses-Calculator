import React from "react";
import Expense from './constants/Expense';

class ExpensesList extends React.Component {

    expensesList = [];
    render () {
        return (
            <div>
                {this.expensesList}
                <input defaultValue="Type some expense here"></input>
                <button onClick={this.addExpense}>Add Expense</button>
            </div>
        )
            
    }

    addExpense() {
        this.expensesList.push(<Expense>Kondzior</Expense>);
    }
}

export default ExpensesList;