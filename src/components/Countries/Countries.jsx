import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
//Type-> rsc
const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        const isVisited = visitedCountries.some(
            c => c.cca3.cca3 === country.cca3.cca3
        );

        if (isVisited) {
            const newVisited = visitedCountries.filter(
            c => c.cca3.cca3 !== country.cca3.cca3
            );
            setVisitedCountries(newVisited);
        } else {
            setVisitedCountries([...visitedCountries, country]);
        }
    }
    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    
    return (
        <div>
            <h1>All Total countries: {countries.length}</h1>
            <h3>My Total Visited Countries: {visitedCountries.length}</h3>
            <h3>Visited Flags: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries = {handleVisitedCountries} handleVisitedFlag ={handleVisitedFlag}></Country>)
                    
                }
            </div>
        </div>
    );
};

export default Countries;

