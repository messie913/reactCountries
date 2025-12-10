import React from "react";

const Card = ({ country }) => {
  console.log(country);

  return (
    <li className="card">
      <img src={country.flags.svg} alt={"drapeau " + country.name.official} />
      <div className="infos">
        <h2>{country.name.official}</h2>
        <h4>{country.capital}</h4>
        <p>Pop : {country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
