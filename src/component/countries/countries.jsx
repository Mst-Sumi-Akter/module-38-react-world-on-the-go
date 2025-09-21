// rsc
import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitdFlags] = useState([])
    const handleVisitedCountries = (country) =>{
        console.log(`handle visited country clicked`,country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlag = (flag) => {
        // console.log('Flag need to be added',flag);
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitdFlags(newVisitedFlags)
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries)
    return (
        <div >
            <h2>In the Countries : {countries.length}</h2>
            <h3>Total number of country  : {visitedCountries.length}</h3>
            <h3>Total Flag visited : {visitedFlags.length}</h3>
            <ol> 
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }

            </ol>

            <div className='visited-flags-container'>
               {
                 visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
               }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}
                     handleVisitedCountries={ handleVisitedCountries}
                      handleVisitedFlag = { handleVisitedFlag}
                     ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;
