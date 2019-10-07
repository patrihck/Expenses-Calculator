import React from "react";

class Expense extends React.Component {
    expenseName;
    expenseAmount;
    expenseCurrency;

    render(props) {
        return (
            <div>
                <h1>{this.props.expenseName}</h1>
            </div>
        )
    }
}

export default Expense;