import React, { useState } from 'react';
import './country.css'
const Country = ({country,  handleVisitedCountries,  handleVisitedFlag}) => {
    // console.log(country.ccn3.ccn3)
    const[visited, setVisitd] = useState(false);

    const handleVisited = () =>{

        // console.log('button clicked')
        setVisitd(visited ? false : true);
        handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited  &&'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common}</h3>
            <p>Population : {country.population.population}</p>
            <p>Country Code : {country.ccn3.ccn3}</p>
            <p>Cpital : {country.capital.capital}</p>
            <p>Area : {country.area.area} {country.area.area > 300000 ? "Big country":"Small country"}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not visited'}
            </button>
            <button onClick={ () => {handleVisitedFlag(country.flags.flags.png)}}>Add Visited Flags</button>
        </div>
    );
};

export default Country;