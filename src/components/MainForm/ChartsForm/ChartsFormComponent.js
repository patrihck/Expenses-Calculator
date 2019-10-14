import React from "react";
import {Bar, Line, Pie} from "react-chartjs-2";

class ChartsFormComponent extends React.Component {
    constructor() {
        super();
        this.state = {
             horizontalBarChartData : {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Dataset 1',
                    backgroundColor: "red",
                    borderColor: "orange",
                    borderWidth: 1,
                    data: [
                        1,2,3,4,5,6,7,8,9
                    ]
                }]
            }
        }
    }
    render () {
        return (
            <div className="chart">
                <h1>SIEMANKOO</h1>
                <Bar data ={this.state.horizontalBarChartData} width={100} height={50} options={{maintainAspectRatio: false}}></Bar>
            </div>
        )
    }

    randomScalingFactor = () => {
        return Math.round(this.rand(-100, 100));
    }

    rand = (min, max) => {
        var seed = this._seed;
        min = min === undefined ? 0 : min;
        max = max === undefined ? 1 : max;
        this._seed = (seed * 9301 + 49297) % 233280;
        return min + (this._seed / 233280) * (max - min);
    }
}

export default ChartsFormComponent;
