import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CatagoryFoods = () => {
    const data = useLoaderData();
    const meals = data.meals;
    console.log(meals)
    return (
        <div>
            <p>catagoryfoods</p>
        </div>
    );
};

export default CatagoryFoods;