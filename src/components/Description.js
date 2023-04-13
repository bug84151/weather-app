import React from "react";

const Description = ({ data }) => {
  return (
    <div>
      {data.weather ? (
        <div className="description">
          <h2>{data.weather[0].description}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt=""
          />
        </div>
      ) : null}
      {}
    </div>
  );
};

export default Description;
