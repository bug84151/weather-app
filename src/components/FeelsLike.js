import React from "react";

const FeelsLike = ({ data }) => {
  return (
    <div>
      {data.main ? (
        <div className="feelsLike">
          <p>Feels Like</p>
          <h1>{data.main.feels_like}°F</h1>
        </div>
      ) : null}
    </div>
  );
};

export default FeelsLike;
