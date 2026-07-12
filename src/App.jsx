import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Dashboard from "./pages/Dashboard";
import Detail from "./components/detail";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const location = "New York, NY";
      const options =
        "&include=days&elements=id,temp,feelslikemin,tempmin,datetime,moonphase,sunrise,sunset,moonrise,moonset,description,visibility,conditions";
      const url =
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        location +
        "?key=" +
        API_KEY +
        options;
      // Makes the API call
      const response = await fetch(url);
      const json = await response.json();
      setData(json.days);
      // console.log(url);
      return json;
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="App-sidebar">
        <Header />
        <Menu />
      </div>

      <Routes>
        <Route path="/" element={<Dashboard data={data} />} />
        <Route path="/:datetime" element={<Detail data={data} />} />
      </Routes>
    </div>
  );
}

export default App;