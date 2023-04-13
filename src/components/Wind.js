import React from "react";

const Wind = ({ data }) => {
  return (
    <div>
      {data.wind ? <p>{data.wind.speed}MPH</p> : null}
      <p>Wind</p>
    </div>
  );
};

export default Wind;
