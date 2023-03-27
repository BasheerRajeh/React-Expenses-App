import React from "react";
import ChartBar from "./ChartBar";
import Card from "../shared/Card";
import "./Chart.css";

const Chart = ({ bars }) => {
    let maxValue = 0;
    for (let bar of bars) {
        maxValue = Math.max(maxValue, bar.value);
    }

    return (
        <Card className="chart">
            {bars.map((bar, idx) => (
                <ChartBar
                    key={idx}
                    label={bar.label}
                    maxValue={maxValue}
                    value={bar.value}
                />
            ))}
        </Card>
    );
};

export default Chart;
