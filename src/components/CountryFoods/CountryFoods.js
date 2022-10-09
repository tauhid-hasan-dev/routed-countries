import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryFoods = () => {
   const data = useLoaderData();
   console.log(data)
    return (
        <div>
            <p>countryfoods: {}</p>
        </div>
    );
};

export default CountryFoods;