import React from 'react';

const CatagoryList = ({meal}) => {
    return (
            <div className='cursor-pointer text-2xl font-semibold border-2 border-main-color p-2'>
            <p>{meal.strCategory}</p>
        </div>
        
    );
};

export default CatagoryList;