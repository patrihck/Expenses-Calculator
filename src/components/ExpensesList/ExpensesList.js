import React from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './ExpensesList.css';

class ExpensesList extends React.Component {

    constructor () {
        super();
        this.state = {
            expensesList: [],
            description: "",
            price: "",
            date: "",
            expenseToDelete: null,
            addExpenseButtonDisabled: true,
            addOrDeleteExpense: "Add Expense",
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
                    <AgGridReact className="expense-group-container" onRowClicked={this.handleOnRowClicked}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.expensesList}>
                    </AgGridReact>
                </div>                                     
                
                <input name="description" type="text" maxLength="15" className="expense-detail-input" placeholder="Description" onChange={this.handleInputChange}></input>
                <input name="price" type="number" maxLength="4"className="expense-detail-input expense-price-input" placeholder="Price" onChange={this.handleInputChange}></input>
                <input name="date" type="date" className="expense-detail-input expense-date-input" placeholder="Date" onChange={this.handleInputChange}></input>
                <button onClick={this.handleAddDeleteButtonClicked} disabled={this.state.addExpenseButtonDisabled} value={this.state.addOrDeleteExpense} className="btn btn-secondary add-expense-btn">{this.state.addOrDeleteExpense}</button>
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
                expensesList: newExpensesList,
            }
            
            return newState;
            }
        )        
    }
    handleInputChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
            addOrDeleteExpense: "Add Expense"
        }, () => {
            const disabled = this.checkFieldsEmpty();
            this.setState({
                addExpenseButtonDisabled: disabled
            })
        })        
    }

    checkFieldsEmpty() {
        return this.state.description === ""
        || this.state.price === ""
        || this.state.date === ""
    }

    handleAddDeleteButtonClicked = (event) => {       
        let value = event.target.value;

        if (value === "Add Expense") {
            this.addExpense();
        } else {
            this.deleteExpense();
        }
    }

    handleOnRowClicked = (event) => {
        const {description, price, date} = event.data;
        let addOrDeleteExpense = "Delete Expense"
        this.setState((prevState) => {
            let newState = {
            expenseToDelete: {
                description: description,
                price: price,
                date: date
            },
            addOrDeleteExpense: addOrDeleteExpense
        }

        return newState;
        })
        
    }

    deleteExpense = () => {

        if (this.state.expenseToDelete === null) return;
        const {description, price, date} = this.state.expenseToDelete;

        this.setState((prevState) => {
            let newExpensesList = [...prevState.expensesList];
            let indexToDelete = newExpensesList.findIndex((expense) =>
                 expense.description == description
             && expense.price === price
             && expense.date === date)
            newExpensesList.splice(indexToDelete, 1);
            let newState = {
                expensesList: newExpensesList,
                expenseToDelete: null,
                addOrDeleteExpense: "Add Expense"
            }

            return newState;
        })
    }
}

export default ExpensesList;