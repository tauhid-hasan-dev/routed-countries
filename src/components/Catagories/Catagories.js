import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CatagoryList from '../CatagoryList/CatagoryList';

const Catagories = () => {
    const data = useLoaderData();
    const meals = data.meals;
    return (
        <div className='flex flex-col items-center'>
              <p className='text-lg lg:text-2xl font-bold p-10'>Total Item Found: {meals.length}</p>
            <div className='px-20 flex flex-col gap-4 w-[50%]'>
                {
                    meals.map((meal, idx) => <Link to='/menu/catagoryfood/beef'><CatagoryList  key={idx} meal={meal} ></CatagoryList></Link>)
                }
            </div>
        </div>
    );
};

export default Catagories;