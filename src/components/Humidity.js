import React from "react";

const Humidity = ({ data }) => {
  return (
    <div>
      {data.main ? <p>{data.main.humidity}%</p> : null}
      <p>Humidity</p>
    </div>
  );
};

export default Humidity;
