import React from "react";

class Expense extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.expenseName}</h1>
            </div>
        )
    }
}

export default Expense;