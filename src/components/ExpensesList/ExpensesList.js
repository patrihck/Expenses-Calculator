import React from "react";
import Expense from '../constants/Expense';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './ExpensesList.css';

class ExpensesList extends React.Component {

    constructor () {
        super();
        this.state = {
            expensesList: [],
            description: "Type some expense here",
            price: null,
            date: "",
            addExpenseButtonHidden: true,
            columnDefs: [
                {headerName: 'Opis', field: 'description'},
                {headerName: 'Kwota', field: 'price'},
                {headerName: 'Data', field: 'date'}
            ]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    render () {
        return (
            <React.Fragment>
                <div className="ag-theme-balham expense-group-grid-container">
                    <AgGridReact className="expense-group-container"
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.expensesList}>
                    </AgGridReact>
                </div>                                     
                
                <input name="description" className="expense-name-input" placeholder="Description" onChange={this.handleInputChange}></input>
                <input name="price" className="expense-name-input" placeholder="Price" onChange={this.handleInputChange}></input>
                <input name="date" className="expense-name-input" placeholder="Date" onChange={this.handleInputChange}></input>
                <button onClick={this.addExpense} hidden={this.state.addExpenseButtonHidden} className="btn btn-secondary add-expense-btn">Add Expense</button>
            </React.Fragment>
        )                    
    } 

    addExpense = () => {
            this.setState((prevState) => {            
                let newExpensesList = [...prevState.expensesList];
                newExpensesList.push(
                    {
                        description: prevState.description,
                        price: prevState.price,
                        date: prevState.date                        
                    })
            let newState = {
                expensesList: newExpensesList
            }
            console.log(newState.expensesList);
            return newState;
            }
        )        
    }

    handleInputChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
            addExpenseButtonHidden: false
        })
    }
}

export default ExpensesList;