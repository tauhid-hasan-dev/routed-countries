import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const countrydata = useLoaderData();
    const countries = countrydata.meals;
    console.log(countries);
    return (
        <div className='flex flex-col gap-5 px-10 lg:px-96  py-10 justify-center items-center'>
            <div className='flex flex-col gap-5 w-full '>
            {
                countries.map(country => <Link to={`/menu/countryfood/${country.strArea}`}><Country country = {country}></Country></Link>)
            }
            </div>
            
        </div>
    );
};

export default Countries;