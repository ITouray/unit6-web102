import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const TempChart = ({ data }) => {
    return (
        <div className="Chart">
            <BarChart
                width={400}
                height={300}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="datetime" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="temp" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default TempChart;
