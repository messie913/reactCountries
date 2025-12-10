import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  let rangeIn = document.getElementById("rangeIn");
  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,capital"
      )
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          name="rangeIn"
          id="rangeIn"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
      </ul>
      <ul>
        {data
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
