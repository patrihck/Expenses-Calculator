import React from "react";
import Expense from './constants/Expense';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class ExpensesList extends React.Component {

    constructor () {
        super();
        this.state = {
            expensesList: [],
            newExpenseText: "Type some expense here",
            addExpenseButtonHidden: true,
            columnDefs: [
                {headerName: 'Make', field: 'make'},
                {headerName: 'Model', field: 'model'},
                {headerName: 'Price', field: 'price'}
            ],
            rowData: [
                {make: 'Toyota', model: 'Celica', price: 35000},
                {make: 'Ford', model: 'Mondeo', price: 32000},
                {make: 'Porsche', model: 'Boxter', price: 72000}
            ]
        }
        this.addExpense = this.addExpense.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    render () {
        return (
            <React.Fragment>
                <div className="ag-theme-balham expense-group-grid-container">
                    <AgGridReact className="expense-group-container"
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>                                     
                
                <input className="expense-name-input" placeholder="Type some expense here" onChange={this.handleInputChange}></input>
                <button onClick={this.addExpense} hidden={this.state.addExpenseButtonHidden} className="btn btn-secondary add-expense-btn">Add Expense</button>
            </React.Fragment>
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
            newExpenseText: e.target.value,
            addExpenseButtonHidden: false
        })
    }
}

export default ExpensesList;