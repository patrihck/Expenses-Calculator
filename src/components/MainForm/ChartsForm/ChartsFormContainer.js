import React from  "react";

class ChartsFormContainer extends React.Component{
    constructor() {
        super();
        this.state = {
            charts: []
        }
    }
    render() {
        return(
            <div>
                <h1>Yoooo</h1>
                {console.log(this.props)}
            </div>
        )
    }
}

export default ChartsFormContainer;