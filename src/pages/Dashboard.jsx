import React from "react";
import Card from "../components/Card";
import List from "../components/List";
import MoonPhaseChart from "../components/moonPhase";
import TempChart from "../components/tempChart";

const Dashboard = ({ data }) => {
    return (
        <div className="App-page">
            <div className="App-row">
                <div className="App-cards">
                    <Card number={"New York"} metric={"New York, USA"} />
                    <Card number={"43.9 °F"} metric="Low Temp" />
                    <Card number={"14:25:39"} metric="Moon Rise" />
                    <Card number={"🌒"} metric="Moon Phase" />
                </div>
            </div>
            <div className="App-row">
                <List data={data} />
                <div className="Charts">
                    <MoonPhaseChart data={data} />
                    <TempChart data={data} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;