import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CountryRecipies from '../CountryRecipies/CountryRecipies';

const CountryFoods = () => {
   const data = useLoaderData();
   const meals = data.meals;
    return (
        <div className='px-10 lg:px-20 text-center '>
            <p className='text-lg lg:text-2xl font-bold p-10'>Total Item Found: {meals.length}</p>
           <div className='grid lg:grid-cols-3 grid-cols-1  gap-10 '>
                {
                    meals.map((meal, idx) => <CountryRecipies key={idx} meal={meal}></CountryRecipies>)
                }
           </div>
            
        </div>
    );
};

export default CountryFoods;