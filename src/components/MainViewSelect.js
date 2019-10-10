import React from "react";

class MainViewSelect extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedView : null,            
        }

        this.handleSelectionChanged = this.handleSelectionChanged.bind(this);
    }
    render () {
        return (
            <div>
                <select value={this.props.selectedView} onChange={this.handleSelectionChanged}>
                    <option >Choose a view</option>
                    <option value="expenses">Expenses</option>
                    <option value="charts">Charts</option>
                    <option value="info">Info</option>
                </select>
            </div>
        )
    }

    handleSelectionChanged(event) {

        const selectedView = event.target.value;
        this.props.onChange(selectedView);
    }
}

export default MainViewSelect;