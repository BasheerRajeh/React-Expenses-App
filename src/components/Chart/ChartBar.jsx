import React from "react";
import "./ChartBar.css";

const ChartBar = ({ label, maxValue, value }) => {
    const fill = Math.ceil((value / maxValue) * 100);
    return (
        <div className="chart-bar">
            <div className="chart-bar__container">
                <div className="chart-bar__fill" style={{ height: `${fill}%` }}></div>
            </div>
            <div className="chart-bar__label">{label.slice(0, 3)}</div>
        </div>
    );
};

export default ChartBar;
