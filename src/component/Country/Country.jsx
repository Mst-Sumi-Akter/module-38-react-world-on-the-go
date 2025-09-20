import React from 'react';

const Country = ({country}) => {
    console.log(country.ccn3.ccn3)
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common}</h3>
            <p>Population : {country.population.population}</p>
            <p>Country Code : {country.ccn3.ccn3}</p>
            <p>Cpital : {country.capital.capital}</p>
        </div>
    );
};

export default Country;