import React from "react";
import ExpensesList from "./ExpensesList"

class ExpenseGroup extends React.Component {

    render() {
        return (
            <div>
                <h1>Expense Group Name</h1>
                <ExpensesList></ExpensesList>
            </div>
        )
    }
}

export default ExpenseGroup;