import React from "react";

const Temperature = ({ data }) => {
  return (
    <div>
      {data.main ? <p>{data.main.temp}°F</p> : null}
      <p>Temp</p>
    </div>
  );
};

export default Temperature;
