import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countrydata = useLoaderData();
    
    return (
        <div>
            <p>Total country : {countrydata.meals.length}</p>
        </div>
    );
};

export default Countries;