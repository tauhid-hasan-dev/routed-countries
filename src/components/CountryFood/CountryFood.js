import React from 'react';

const CountryFood = () => {
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1529154631088-a0e516571c60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover p-36 rounded-lg bg-opacity-20 relative cursor-pointer">
            <div className='inset-0 bg-gray-900 absolute bg-opacity-75 rounded-lg'></div>
            <div className='relative'>
               <p className='text-white font-bold text-3xl '>Food By Country</p>
            </div>
        </div>
    );
};

export default CountryFood;