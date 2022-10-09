import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CatagoryRecipies from '../CatagoryRecipies/CatagoryRecipies';

const CatagoryFoods = () => {
    const data = useLoaderData();
    const meals = data.meals;
    return (
        <div className='px-10 lg:px-20 text-center '>
            <p className='text-lg lg:text-2xl font-bold p-10'>Total Item Found: {meals.length}</p>
            <div className='grid lg:grid-cols-3 grid-cols-1  gap-10 '>
                {
                    meals.map((meal, idx) => <CatagoryRecipies key={idx} meal={meal}></CatagoryRecipies>)
                }
            </div>
        </div>
    );
};

export default CatagoryFoods;