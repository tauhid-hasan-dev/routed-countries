import React from 'react';

const CountryRecipies = ({meal}) => {
    const {strMeal, strMealThumb } = meal;
    return (
        <div className="card bg-base-100 shadow-xl">
                <figure><img src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                </div>
            </div>
    );
};

export default CountryRecipies;