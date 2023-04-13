import React, { useState } from "react";

const GetWeather = ({ onGetWeather }) => {
  const [location, setLocation] = useState("");

  const onClickHandler = () => {
    onGetWeather(location);
    setLocation("");
  };

  return (
    <div className="input">
      <input
        className="searchBox"
        type="text"
        placeholder="Enter a city"
        value={location}
        onKeyUp={(e) => {
          e.key === "Enter" && onClickHandler();
        }}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button className="btn" onClick={onClickHandler}>
        Search
      </button>
    </div>
  );
};

export default GetWeather;
