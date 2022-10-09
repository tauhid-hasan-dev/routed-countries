import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const countrydata = useLoaderData();
    const countries = countrydata.meals;
    console.log(countries);
    return (
        <div className='flex flex-col gap-5 px-20 py-10 justify-center items-center'>
            {
                countries.map(country => <Country country = {country}></Country>)
            }
        </div>
    );
};

export default Countries;