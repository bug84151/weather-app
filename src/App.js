import React, { useState } from "react";
import Header from "./components/Header";
import GetWeather from "./components/GetWeather";
import Humidity from "./components/Humidity";
import Temperature from "./components/Temperature";
import Wind from "./components/Wind";
import Description from "./components/Description";
import FeelsLike from "./components/FeelsLike";
function App() {
  const [data, setData] = useState({});
  const getWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e312cbe5b4d8a35175556c0217f30bc4&units=imperial`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?${data.name}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="upperSection">
          <GetWeather onGetWeather={getWeather} />
          <Header data={data} />
          <Description data={data} />
        </div>
        <div>
          <FeelsLike data={data} />
        </div>
        {data.name !== undefined && (
          <div className="card">
            <Temperature data={data} />
            <Humidity data={data} />
            <Wind data={data} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
