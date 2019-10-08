import React from "react";
import doticon from "./../../icons/dot.png"

class Expense extends React.Component {
    render() {
        return (
            <div className="inline-container-list-row">
                <img src={doticon} style={{
                    maxHeight: 30 ,
                    maxWidth: 30,
                }}></img>
                <h1>{this.props.expenseName}</h1>
            </div>
        )
    }
}

export default Expense;